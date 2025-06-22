import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  title: "Kayra Auth System",
  description: "Next.js Auth0 Authentication System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}