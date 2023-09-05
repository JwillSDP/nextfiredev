import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Jason App",
   description: "Created by Jason Williams",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
