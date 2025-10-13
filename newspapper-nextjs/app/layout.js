import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({ 
  weight: ["400", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const lora = Lora({ 
  weight: ["400", "700"],
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weazel News",
  description: "Tu app de noticias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${lora.variable} antialiased`}>
          <Nav />
          {children}
      </body>
    </html>
  );
}