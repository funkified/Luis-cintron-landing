import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Cintron Landing",
  description: "Landing page for Luis Cintron.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
