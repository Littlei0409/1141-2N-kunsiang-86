import { Geist, Geist_Mono } from 'next/font/google';
import NavbarShopSupa_28 from '../_componemts/NavbarShopSupa_28';

//import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'midterm p2_28',
  description: '1141 Midterm P2',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarShopSupa_28 />
        {children}
      </body>
    </html>
  );
}
