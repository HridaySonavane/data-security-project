import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const publicKey = formData.get("publicKey") as string;
  const signature = formData.get("signature") as string;

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const verifier = crypto.createVerify("RSA-SHA256");
  verifier.update(fileBuffer);
  verifier.end();

  const verified = verifier.verify(publicKey, Buffer.from(signature, "base64"));

  return NextResponse.json({
    verified,
    message: verified
      ? "✅ Signature Verified! File is Authentic."
      : "❌ Verification Failed! File may have been modified.",
  });
}
