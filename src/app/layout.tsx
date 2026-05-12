import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuan Ta Anh | AI Engineer Portfolio",
  description:
    "AI Engineer portfolio focused on GenAI, RAG systems, backend APIs, SaaS automation, data science, and cloud MLOps.",
  keywords: [
    "AI Engineer",
    "GenAI",
    "RAG",
    "LLM",
    "Backend APIs",
    "Data Science",
    "MLOps",
    "GCP",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Tuan Ta Anh" }],
  openGraph: {
    title: "Tuan Ta Anh | AI Engineer Portfolio",
    description:
      "GenAI, RAG systems, backend APIs, SaaS automation, data science, and cloud MLOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}