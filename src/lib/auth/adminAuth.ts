import crypto from "node:crypto";
import {
  SESSION_DURATION_SECONDS,
  getSessionSecret,
} from "@/lib/auth/adminSession";

type AdminSessionPayload = {
  sub: "admin";
  exp: number;
};

function base64UrlEncode(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function base64UrlDecode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(value: string): string {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(value)
    .digest("base64url");
}

function safeEquals(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

function hashPassword(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function isValidAdminCredentials(
  email: string,
  password: string,
): boolean {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || (!adminPassword && !adminPasswordHash)) {
    return false;
  }

  const emailMatches = safeEquals(
    email.trim().toLowerCase(),
    adminEmail.trim().toLowerCase(),
  );
  if (!emailMatches) {
    return false;
  }

  if (adminPasswordHash) {
    return safeEquals(hashPassword(password), adminPasswordHash.toLowerCase());
  }

  return safeEquals(password, adminPassword as string);
}

export function createAdminSessionToken(nowMs: number = Date.now()): string {
  const payload: AdminSessionPayload = {
    sub: "admin",
    exp: Math.floor(nowMs / 1000) + SESSION_DURATION_SECONDS,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(
  token: string,
  nowMs: number = Date.now(),
): boolean {
  const [encodedPayload, providedSignature] = token.split(".");

  if (!encodedPayload || !providedSignature) {
    return false;
  }

  const expectedSignature = sign(encodedPayload);
  if (!safeEquals(providedSignature, expectedSignature)) {
    return false;
  }

  try {
    const payload = JSON.parse(
      base64UrlDecode(encodedPayload),
    ) as AdminSessionPayload;
    if (payload.sub !== "admin") {
      return false;
    }

    return payload.exp > Math.floor(nowMs / 1000);
  } catch {
    return false;
  }
}

export function getAdminSessionMaxAge(): number {
  return SESSION_DURATION_SECONDS;
}
