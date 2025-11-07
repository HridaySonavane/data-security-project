import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });

  return NextResponse.json({
    message: "Keys generated successfully!",
    publicKey,
    privateKey,
  });
}
