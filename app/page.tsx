"use client";
import HeroHeaderSection from "@/components/HeroHeaderSection";
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

  return <HeroHeaderSection />;
}
