import "./globals.css";
import { typePrimary, typeSecond } from "@/functions/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${typePrimary.variable} ${typeSecond.variable} `}
    >
      <body className="bg-gray-100">
        <div className="App">
          <main className="AppBody"> {children}</main>
        </div>
      </body>
    </html>
  );
}
