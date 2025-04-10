import "./globals.css";

import { Red_Hat_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHatDisplay.className} antialiased bg-background-primary text-content-body`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-JJPZVBCTN1" />
    </html>
  );
}
