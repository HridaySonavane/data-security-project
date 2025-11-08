"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  FileUp,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Upload,
} from "lucide-react";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [signature, setSignature] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("generate");
  const [isDragging, setIsDragging] = useState(false);

  const generateKeys = async () => {
    const res = await fetch("/api/generate-keys");
    const data = await res.json();
    setPublicKey(data.publicKey);
    setPrivateKey(data.privateKey);
    setMessage(data.message);
    setActiveTab("sign");
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
    setActiveTab("verify");
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

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0]);
    }
  };

  return (
    <main className="min-h-screen bg-background-dark text-foreground">
      {/* Header */}
      <div className="border-b border-border/30 bg-background-dark sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-background-dark flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-background-dark text-white">
                SignVault Dashboard
              </h1>
              <p className="text-xs text-muted-foreground">
                Manage your digital signatures
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-amber-900" />
            Ready to sign
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Welcome back to SignVault
          </h2>
          <p className="text-muted-foreground">
            Manage your digital keys and sign documents with ease
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex justify-between gap-2 mb-12">
          {[
            { id: "generate", label: "Generate Keys", icon: KeyRound },
            { id: "sign", label: "Sign File", icon: FileUp },
            { id: "verify", label: "Verify", icon: CheckCircle2 },
          ].map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <button
                onClick={() => setActiveTab(step.id)}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === step.id
                    ? "bg-linear-to-r from-orange-900 to-amber-900 text-white shadow-lg shadow-blue-600/30"
                    : "bg-card opacity-80 hover:text-white/60 hover:bg-amber-950"
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden text-xs">Step {index + 1}</span>
              </button>
              {index < 2 && (
                <div className="shrink-0 mx-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Generate Keys Card */}
          <Card
            className={`p-8 transition-all duration-300 transform cursor-pointer border-amber-800 bg-amber-950/50 hover:bg-amber-800/40 ${
              activeTab === "generate"
                ? "ring-2 ring-amber-800 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActiveTab("generate")}
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-blue-500/20">
                <KeyRound className="w-7 h-7 text-amber-700" />
              </div>
              <h3
                className={`text-xl font-bold ${
                  activeTab === "generate" && "text-white/90"
                } text-white/70 `}
              >
                Generate Keys
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                RSA key pair generation
              </p>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Create a new RSA key pair for secure signing and verification
              operations.
            </p>
            <Button
              onClick={generateKeys}
              className={`w-full bg-linear-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 ${
                activeTab === "generate" ? "text-white/90" : "text-white/70"
              } font-semibold rounded-lg transition-all`}
            >
              Generate New Keys
            </Button>
          </Card>

          {/* Sign File Card */}
          <Card
            className={`p-8 transition-all duration-300 transform cursor-pointer border-slate-700 bg-slate-800/50 hover:bg-slate-800 ${
              activeTab === "sign"
                ? "ring-2 ring-cyan-500 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActiveTab("sign")}
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 border border-cyan-500/20">
                <FileUp className="w-7 h-7 text-cyan-400" />
              </div>
              <h3
                className={`text-xl font-bold ${
                  activeTab === "sign" && "text-white/90"
                } text-white/70 `}
              >
                Sign File
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Digital signature creation
              </p>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Upload and digitally sign your file using your private key.
            </p>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Select or drag file
                </label>
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-lg p-8 transition-all duration-200 text-center cursor-pointer ${
                    isDragging
                      ? "border-cyan-400 bg-cyan-400/10"
                      : file
                      ? "border-green-500/50 bg-green-500/5"
                      : "border-slate-600 bg-slate-900/50 hover:border-cyan-500/50 hover:bg-cyan-400/5"
                  }`}
                >
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-2">
                    {file ? (
                      <>
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                        <p className="text-sm font-medium text-foreground">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Click to change file
                        </p>
                      </>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-cyan-400" />
                        <p className="text-sm font-medium text-white/90">
                          Drag and drop your file
                        </p>
                        <p className="text-xs text-muted-foreground">
                          or click to browse
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Button
                onClick={signFile}
                disabled={!file || !privateKey}
                className="w-full bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all"
              >
                Sign File
              </Button>
            </div>
          </Card>

          {/* Verify Card */}
          <Card
            className={`p-8 transition-all duration-300 transform cursor-pointer border-green-900 bg-green-950/50 hover:bg-green-900 ${
              activeTab === "verify"
                ? "ring-2 ring-green-500 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActiveTab("verify")}
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 border border-green-500/20">
                <CheckCircle2 className="w-7 h-7 text-green-400" />
              </div>
              <h3
                className={`text-xl font-bold ${
                  activeTab === "verify" && "text-white/90"
                } text-white/70 `}
              >
                Verify
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Signature verification
              </p>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Verify that a signed file is authentic using the public key.
            </p>
            <Button
              onClick={verifyFile}
              disabled={!file || !publicKey || !signature}
              className="w-full bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all"
            >
              Verify Signature
            </Button>
          </Card>
        </div>

        {/* Output Section */}
        {(publicKey || privateKey || signature || message) && (
          <Card className="p-8 border-slate-700 bg-slate-800/50 backdrop-blur border-2 border-blue-500/20">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Results & Output
            </h3>
            <div className="space-y-4">
              {message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    message.includes("successfully") ||
                    message.includes("verified")
                      ? "bg-green-500/10 border border-green-500/30 text-green-300"
                      : "bg-yellow-500/10 border border-yellow-500/30 text-yellow-300"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
