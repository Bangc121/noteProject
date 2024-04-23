import "./globals.css";

import Link from "next/link";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import { Open_Sans } from "next/font/google";
import styles from "./layout.module.css";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">products</Link>
            <Link href="/chat">Chat</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
