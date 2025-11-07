"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [signature, setSignature] = useState("");
  const [message, setMessage] = useState("");

  const generateKeys = async () => {
    const res = await fetch("/api/generate-keys");
    const data = await res.json();
    setPublicKey(data.publicKey);
    setPrivateKey(data.privateKey);
    setMessage(data.message);
  };

  const signFile = async () => {
    if (!file || !privateKey)
      return setMessage("Please upload file & private key!");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("privateKey", privateKey);
    const res = await fetch("/api/sign", { method: "POST", body: formData });
    const data = await res.json();
    setSignature(data.signature);
    setMessage(data.message);
  };

  const verifyFile = async () => {
    if (!file || !publicKey || !signature) return setMessage("Missing inputs!");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("publicKey", publicKey);
    formData.append("signature", signature);
    const res = await fetch("/api/verify", { method: "POST", body: formData });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F6F3] text-[#1F1F1F] px-6 py-10">
      <div className="max-w-lg w-full bg-[#EDE8E3] shadow-lg rounded-2xl p-10 border border-[#BFA98A]/40">
        <h1 className="text-4xl font-semibold text-[#8B5E3C] mb-2 text-center tracking-tight">
          🔐 Digital Signature Verifier
        </h1>
        <p className="text-[#6B5E52] text-center mb-8">
          Ensure your file’s integrity and authenticity using cryptographic
          signing.
        </p>

        <div className="flex flex-col space-y-5">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-[#4B4037] border border-[#C8BBAF] rounded-lg cursor-pointer bg-[#F8F6F3] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/40 transition"
          />

          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-[#8B5E3C] text-white font-medium py-2.5 px-6 rounded-md shadow-md hover:bg-[#7A5030] hover:shadow-lg transition-all duration-200">
              Sign File
            </button>
            <button className="bg-transparent border border-[#8B5E3C] text-[#8B5E3C] font-medium py-2.5 px-6 rounded-md hover:bg-[#8B5E3C] hover:text-white transition-all duration-200">
              Verify File
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-sm text-[#8B5E3C]/70">
        Built by{" "}
        <span className="font-semibold text-[#8B5E3C]">Hriday Sonawane</span>
      </footer>
    </div>
  );
}
