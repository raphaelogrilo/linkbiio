import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link na Bio",
  description: "Links personalizados para clínicas e negócios locais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: "#091a2e" }}>{children}</body>
    </html>
  );
}
