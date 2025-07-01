// app/layout.tsx - Typography Updates
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "No Socks | Where Vibe Marketing Meets Velocity",
  description: "We architect intelligent marketing ecosystems that give your authentic vibe unstoppable velocity. AI leveraging, automation artistry, and marketing OS building for ambitious challengers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL64XDHQ');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="font-inter antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NL64XDHQ" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}