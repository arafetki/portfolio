import { env } from "@/env";
import jwt, {
  JwtPayload,
  TokenExpiredError,
  JsonWebTokenError,
  NotBeforeError,
} from "jsonwebtoken";
import { StringValue } from "@/types";

const ISSUER = process.env.NEXT_PUBLIC_SITE_URL;

function generateToken(payload: object, expiry: StringValue) {
  return jwt.sign(payload, env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: expiry,
    issuer: ISSUER,
  });
}

function verifyAndDecodeToken<T extends Record<string, unknown>>(
  token: string
): JwtPayload & T {
  const decodedPayload = jwt.verify(token, env.JWT_SECRET_KEY, {
    issuer: ISSUER,
  }) as JwtPayload & T;

  if (typeof decodedPayload === "string") {
    throw new Error(
      "Unexpected token payload format (expected object, got string)."
    );
  }

  return decodedPayload;
}

export {
  generateToken,
  verifyAndDecodeToken,
  TokenExpiredError,
  JsonWebTokenError,
  NotBeforeError,
};
