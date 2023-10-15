import "./globals.css";
import Footer from "./components/Footer";
import { Figtree } from "next/font/google";
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "meuFone",
  description: "Loja de fones fictícia criada pro portfólio de @mthsoliveira7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={figtree.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
