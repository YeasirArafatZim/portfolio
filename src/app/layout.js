import './globals.css';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js.map';
import Navbar from '@/components/Navbar/Navbar';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MD. Yeasir Arafat</title>
        <link rel="shortcut icon" href="/img/profile.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Lobster&display=swap" rel="stylesheet"/>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script> */}
        
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
