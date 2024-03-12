import type { Metadata } from "next";
import "./globals.css";
import { typePrimary, typeSecond } from "@/functions/font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${typePrimary.variable} ${typeSecond.variable}`}
    >
      <body>
        <div className="App">
          <main className="AppBody">{children}</main>
        </div>
      </body>
    </html>
  );
}