import React from 'react'
import { Inter } from "next/font/google";
import "../styles/init.scss";
import 'semantic-ui-css/semantic.min.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
