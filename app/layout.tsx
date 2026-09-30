import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: {
    default: "Brandon Arroyo | Project Portfolio",
    template: '%s | Brandon Arroyo'
  },
  description: 'A portfolio of Brandon Arroyo\'s developer projects.',
  metadataBase: new URL('https://wdd430-portfolio-two-dusky.vercel.app/'),
};



export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};