import "./globals.css";

export const metadata = { title: "Em construção | TabNews" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="logo">
            Tab<span>News</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
