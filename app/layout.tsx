import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trexip | Automated Receipt Delivery for Modern Cash Registers",
  description:
    "Trexip is building POS software that connects payments, customer identity, and email delivery to send receipts automatically.",
  icons: {
    icon: "/LeLogo.svg",
    shortcut: "/LeLogo.svg",
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
