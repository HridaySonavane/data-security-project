/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  KeyRound,
  FileCheck,
  Lock,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  const features = [
    {
      icon: KeyRound,
      title: "RSA Key Generation",
      description:
        "Generate secure RSA key pairs for signing and verification operations.",
    },
    {
      icon: FileCheck,
      title: "Digital Signing",
      description:
        "Sign your files with your private key to ensure authenticity and integrity.",
    },
    {
      icon: Shield,
      title: "Signature Verification",
      description:
        "Verify file signatures using public keys to detect tampering or forgery.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "All cryptographic operations happen securely using industry-standard RSA encryption.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description:
        "Quick file processing with a streamlined, user-friendly interface.",
    },
    {
      icon: CheckCircle2,
      title: "Easy to Use",
      description:
        "Simple three-step process: Generate keys, Sign files, Verify signatures.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Generate Keys",
      description:
        "Create a new RSA key pair consisting of a public key and a private key. The private key is kept secret for signing, while the public key can be shared for verification.",
    },
    {
      number: "02",
      title: "Sign Your File",
      description:
        "Upload your file and use your private key to generate a digital signature. This signature proves the file's authenticity and integrity.",
    },
    {
      number: "03",
      title: "Verify Signature",
      description:
        "Use the public key to verify that a file's signature is valid and that the file hasn't been tampered with since it was signed.",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-3.5rem)] bg-background-dark text-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            About Signora
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Digital signature verification made simpler. Sign files securely
            with your private key and verify authenticity using a public key.
          </p>
          <p className="font-sans text-lg text-gray-400 max-w-2xl mx-auto">
            🔐 "Sign smart. Verify with confidence."
          </p>
        </div>

        {/* Mission Section */}
        <Card className="bg-background-light border-gray-700 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-white/90 font-display">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-lg leading-relaxed">
              Signora empowers users to ensure document authenticity and
              integrity through RSA digital signatures. We believe that security
              should be accessible, elegant, and transparent. Our platform
              demonstrates core principles of data integrity and authenticity,
              making cryptographic operations simple and intuitive for everyone.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="font-display text-4xl text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className="bg-background-light border-gray-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl font-display text-white/20">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden md:block h-6 w-6 text-gray-600 ml-auto" />
                    )}
                  </div>
                  <CardTitle className="text-2xl text-white/90 font-display">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="font-display text-4xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-background-light border-gray-700 hover:border-gray-600 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white/90 font-display">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="bg-background-light border-gray-700 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-white/90 font-display">
              Technology Stack
            </CardTitle>
            <CardDescription className="text-gray-400">
              Built with modern, reliable technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Next.js 16+ (TypeScript)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    shadcn/ui Components
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Lucide React Icons
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">
                  Backend & Security
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Node.js Crypto Module
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    RSA Encryption (SHA-256)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Next.js API Routes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Secure File Processing
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white/90 font-display mb-4">
              Ready to Get Started?
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Start signing and verifying files with Signora today
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Link href="/dashboard">
              <Button className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white">
                Go to Dashboard
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-gray-600 bg-transparent hover:bg-white/10 text-white"
              >
                Contact Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
