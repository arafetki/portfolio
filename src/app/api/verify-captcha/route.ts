import { NextResponse, type NextRequest } from "next/server";
import { env } from "@/env";
import { TurnstileTokenSchema } from "@/lib/zod";
import { retryWithBackoff } from "@/lib/utils";
import { status } from "http-status";
import { ZodError } from "zod";

const verifyEndpoint =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const parsedToken = TurnstileTokenSchema.parse(token);

    const res = await retryWithBackoff(
      fetch(verifyEndpoint, {
        method: "POST",
        body: `secret=${encodeURIComponent(env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(parsedToken)}`,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }),
      {
        retries: 4,
      }
    );

    const data = await res.json();

    return NextResponse.json(JSON.stringify(data), {
      status: data.success ? status.OK : status.BAD_REQUEST,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          error:
            "The request could not be understood by the server due to malformed syntax or incorrect parameter type",
        },
        { status: status.BAD_REQUEST }
      );
    }
    return NextResponse.json(
      {
        error:
          "the server encountered a problem and could not process your request",
      },
      { status: status.INTERNAL_SERVER_ERROR }
    );
  }
}
