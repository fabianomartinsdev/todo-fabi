import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo do Fabiano",
  description: "Gerencie suas tarefas do dia a dia, com esse app lindo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptbr">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
