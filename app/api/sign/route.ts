import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const privateKey = formData.get("privateKey") as string;

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(fileBuffer);
  signer.end();

  const signature = signer.sign(privateKey).toString("base64");

  return NextResponse.json({
    message: "File signed successfully!",
    signature,
  });
}
