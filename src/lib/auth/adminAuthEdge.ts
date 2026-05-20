import { getSessionSecret } from "@/lib/auth/adminSession";

type AdminSessionPayload = {
  sub: "admin";
  exp: number;
};

const encoder = new TextEncoder();

function base64UrlToBytes(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const normalized = padded + "=".repeat((4 - (padded.length % 4)) % 4);
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function safeEquals(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return mismatch === 0;
}

async function sign(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSessionSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(value),
  );
  return bytesToBase64Url(new Uint8Array(signature));
}

export async function verifyAdminSessionTokenEdge(
  token: string,
  nowMs: number = Date.now(),
): Promise<boolean> {
  const [encodedPayload, providedSignature] = token.split(".");

  if (!encodedPayload || !providedSignature) {
    return false;
  }

  const expectedSignature = await sign(encodedPayload);
  if (!safeEquals(providedSignature, expectedSignature)) {
    return false;
  }

  try {
    const payloadText = new TextDecoder().decode(
      base64UrlToBytes(encodedPayload),
    );
    const payload = JSON.parse(payloadText) as AdminSessionPayload;

    if (payload.sub !== "admin") {
      return false;
    }

    return payload.exp > Math.floor(nowMs / 1000);
  } catch {
    return false;
  }
}
