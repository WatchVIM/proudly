import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { brand } from "@proudly/shared";

export const metadata: Metadata = {
  title: `${brand.name} | Queer-safe travel, stays, nightlife, and events`,
  description: "Find queer-safe places to stay, go out, celebrate, and plan trips worldwide.",
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="footer">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
            <div className="logo"><span className="logo-mark" /> Proudly.</div>
            <div>Be You. Everywhere. © 2026 Proudly.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
