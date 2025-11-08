# 🪶 **Signora — Digital Signature Verifier**

**Signora** is a sleek and elegant web application built with **Next.js (TypeScript)** that empowers users to **sign and verify files using RSA digital signatures**, ensuring **authenticity**, **integrity**, and **trust**.

> 🔐 “Sign smart. Verify with confidence.”

---

### ✨ **Features**

- 📂 Upload files for signing or verification
- 🔑 Sign files securely using a **private key**
- 🧾 Verify digital signatures with a **public key**
- 🧠 Demonstrates core principles of **data integrity** and **authenticity**
- 💅 Elegant **Soft Cocoa White** UI with smooth shadows and warm tones
- ⚡ Powered by **Next.js**, **TypeScript**, and **Tailwind CSS**

---

### 🧱 **Tech Stack**

| Category   | Technologies                                                  |
| ---------- | ------------------------------------------------------------- |
| Framework  | [Next.js 14+ (TypeScript)](https://nextjs.org/)               |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)                      |
| Encryption | [Node.js `crypto` module](https://nodejs.org/api/crypto.html) |
| UI Design  | Minimalist Glassmorphism + Soft Cocoa White theme             |

---

### 🧩 **Project Structure**

```

signora/
│
├── app/
│ ├── page.tsx # Landing page
│ ├── layout.tsx # Global layout and metadata
│ ├── dashboard/ # Main signing and verification UI
│ └── api/
│ ├── sign/route.ts # API endpoint for signing
│ └── verify/route.ts # API endpoint for verifying
│
├── public/
│ └── uploads/ # Stores signed files locally (temporary)
│
├── components/
│ ├── FileUpload.tsx # Upload interface
│ └── SignatureCard.tsx # Display signature results elegantly
│
├── styles/
│ └── globals.css # Global Tailwind and theme overrides
│
├── tailwind.config.ts # Tailwind theme customization
├── package.json
└── README.md

```

---

### ⚙️ **Getting Started**

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/signora.git
cd signora
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Run the development server

```bash
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** to explore ✨

---

### 🔐 **How It Works**

#### 1. File Signing

- Upload a file and your **private key (.pem)**
- The backend generates a **digital signature** using RSA SHA-256
- A signed version is stored temporarily under `/public/uploads/`

#### 2. Signature Verification

- Upload the **signed file** and corresponding **public key**
- The app verifies if the file has been tampered with
- Displays `✅ Verified` or `❌ Signature Mismatch`

---

### 🎨 **Theme — Soft Cocoa White**

| Element    | Color     | Description             |
| ---------- | --------- | ----------------------- |
| Background | `#F8F6F3` | Warm off-white          |
| Card       | `#EDE8E3` | Soft beige              |
| Accent     | `#8B5E3C` | Cocoa brown             |
| Text       | `#1F1F1F` | Deep neutral gray-black |
| Success    | `#3B7A57` | Warm green              |
| Error      | `#B23A48` | Muted warm red          |

> The theme reflects **trust, minimalism, and warmth**, aligning with the principles of digital security and simplicity.

---

### 🧑‍💻 **Author**

**Hriday Sonawane**
💼 MERN Stack & Next.js Developer
📧 [your-email@example.com](mailto:your-email@example.com)
🌐 [your-portfolio-link.com](https://your-portfolio-link.com)

---

### 🧭 **License**

This project is licensed under the **MIT License** — you’re free to use, modify, and share it with proper credit.

---

> 🪶 _“Secure. Elegant. Transparent. — That’s Signora.”_
