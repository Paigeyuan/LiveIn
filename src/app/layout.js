import { Inter } from "next/font/google";
import "./globals.css";
import Navbar  from "./navbar";
import Footer from "./footer";
import Head from 'next/head';






const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "LiveIn",
   description: "New AI bidding Technology",

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
     <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />  
      </body>
    </html>
  

  );
}
