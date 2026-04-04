import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trexip | Receipt Infrastructure for Bank-Connected Commerce",
  description:
    "Trexip presents a consent-based digital receipt network that connects merchants, open banking, and customer email delivery.",
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
