import { NextRequest, NextResponse } from "next/server";
import status from "http-status";
import { isBlank } from "@/lib/utils";
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
  verifyAndDecodeToken,
} from "@/lib/jwt";
import {
  retrieveOne as retrieveOneSub,
  update as updateSub,
} from "@/server/db/query/subs";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const token = searchParams.get("token");

    if (!token || isBlank(token)) {
      return NextResponse.redirect(
        new URL("/?error=INVALID_OR_MISSING_TOKEN", req.nextUrl),
        {
          status: status.TEMPORARY_REDIRECT,
        }
      );
    }
    const { subId } = verifyAndDecodeToken<{ subId: string }>(token);
    const sub = await retrieveOneSub(subId);
    if (!sub) {
      return NextResponse.redirect(
        new URL("/?error=SUBSCRIBER_NOT_FOUND", req.nextUrl),
        {
          status: status.TEMPORARY_REDIRECT,
        }
      );
    }
    if (sub.verified) {
      return NextResponse.redirect(
        new URL("/?error=EMAIL_ALREADY_CONFIRMED", req.nextUrl),
        {
          status: status.TEMPORARY_REDIRECT,
        }
      );
    }
    await updateSub(subId, {
      verified: true,
      updatedAt: new Date(),
    });

    return NextResponse.redirect(
      new URL("/?message=EMAIL_CONFIRMED_SUCESSFULLY", req.nextUrl),
      { status: status.TEMPORARY_REDIRECT }
    );
  } catch (error) {
    console.error(error);
    if (
      error instanceof JsonWebTokenError ||
      error instanceof TokenExpiredError ||
      error instanceof NotBeforeError
    ) {
      return NextResponse.redirect(
        new URL("/?error=INVALID_OR_EXPIRED_TOKEN", req.nextUrl),
        { status: status.TEMPORARY_REDIRECT }
      );
    }
    return NextResponse.redirect(
      new URL("/?error=INTERNAL_SERVER_ERROR", req.nextUrl),
      { status: status.TEMPORARY_REDIRECT }
    );
  }
}
