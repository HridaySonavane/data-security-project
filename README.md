## 🪶 **Digital Signature Verifier**

A sleek and elegant web application built with **Next.js (TypeScript)** that allows users to **sign and verify files using RSA digital signatures** — ensuring **authenticity** and **integrity**.

> 🔐 “Secure your files. Verify with confidence.”

---

### ✨ **Features**

* 📂 Upload files for signing or verification
* 🔑 Sign files using a **private key**
* 🧾 Verify signatures using a **public key**
* 🧠 Demonstrates **data integrity and authenticity**
* 💅 Elegant **Soft Cocoa White** theme with warm tones and smooth shadows
* ⚡ Built with **Next.js, TypeScript, and Tailwind CSS**

---

### 🧱 **Tech Stack**

| Category   | Technologies                                                  |
| ---------- | ------------------------------------------------------------- |
| Framework  | [Next.js 14+ (TypeScript)](https://nextjs.org/)               |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)                      |
| Encryption | [Node.js `crypto` module](https://nodejs.org/api/crypto.html) |
| UI Design  | Minimalist Glassmorphism + Warm White & Cocoa theme           |

---

### 🧩 **Project Structure**

```
digital-signature-verifier/
│
├── app/
│   ├── page.tsx              # Main UI
│   ├── api/
│   │   ├── sign/route.ts     # API endpoint to sign file
│   │   └── verify/route.ts   # API endpoint to verify file
│
├── public/
│   └── uploads/              # Stores signed files locally
│
├── components/
│   └── FileUpload.tsx        # File upload UI component
│
├── styles/
│   └── globals.css           # Tailwind + theme overrides
│
├── tailwind.config.ts        # Tailwind theme config
├── package.json
└── README.md
```

---

### ⚙️ **Getting Started**

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/digital-signature-verifier.git
cd digital-signature-verifier
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Run the development server

```bash
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** ✨

---

### 🔐 **How It Works**

1. **File Signing**

   * Upload a file and your **private key (.pem)**.
   * The server generates a **digital signature** using RSA SHA256.
   * A signed copy of your file is saved in `/public/uploads/`.

2. **Signature Verification**

   * Upload the **signed file** and the **public key**.
   * The system validates the file’s integrity.
   * Displays `✅ Verified` or `❌ Signature mismatch`.

---

### 🎨 **Theme: Soft Cocoa White**

| Element    | Color     | Description             |
| ---------- | --------- | ----------------------- |
| Background | `#F8F6F3` | Warm off-white          |
| Card       | `#EDE8E3` | Soft beige              |
| Accent     | `#8B5E3C` | Cocoa brown             |
| Text       | `#1F1F1F` | Deep neutral gray-black |
| Success    | `#3B7A57` | Warm green              |
| Error      | `#B23A48` | Muted warm red          |

---

### 🧑‍💻 **Author**

**Hriday Sonawane**
💼 MERN Stack & Next.js Developer
📧 [[your-email@example.com](mailto:your-email@example.com)]
🌐 [your-portfolio-link.com]

---

### 🧭 **License**

This project is licensed under the **MIT License** — feel free to use and modify it.