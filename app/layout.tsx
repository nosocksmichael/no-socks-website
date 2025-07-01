// app/layout.tsx
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";
import GoogleTagManager from "@/lib/GoogleTagManager"; // Import the component
import { Suspense } from "react";

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
        {/* The GTM script is now handled by the component below */}
      </head>
      <body className="font-inter antialiased">
        {/* Add the GTM component here */}
        <Suspense>
          <GoogleTagManager />
        </Suspense>
        
        <Navigation />
        {children}
      </body>
    </html>
  );
}