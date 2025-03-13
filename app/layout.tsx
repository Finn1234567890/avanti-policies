import type { Metadata } from "next";
import "./globals.css";
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: "Avanti - Policies",
  description: "Privacy Policy and Terms of Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-system antialiased">
        <Navigation />
        <div className="pt-[73px]">
          {children}
        </div>
      </body>
    </html>
  );
}
