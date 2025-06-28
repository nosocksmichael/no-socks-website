import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Socks - Life is Better Without Socks",
  description: "Join the No Socks revolution. Experience freedom, comfort, and savings by going sockless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Modern Navigation */}
        <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              {/* Modern Logo */}
              <div className="flex items-center">
                <a href="/" className="text-3xl font-bold text-gray-900 hover:text-sky-600 transition-colors duration-200">
                  No Socks <span className="text-2xl">🧦</span>
                </a>
              </div>
              
{/* Modern Navigation Links */}
<div className="flex space-x-2">
  <a href="/" className="text-gray-600 font-medium px-4 py-2 rounded-xl hover:text-sky-600 hover:bg-sky-50 transition-all duration-200">
    Home
  </a>
  <a href="/about" className="text-gray-600 font-medium px-4 py-2 rounded-xl hover:text-sky-600 hover:bg-sky-50 transition-all duration-200">
    About
  </a>
  <a href="/faq" className="text-gray-600 font-medium px-4 py-2 rounded-xl hover:text-sky-600 hover:bg-sky-50 transition-all duration-200">
    FAQ
  </a>
  <a href="/contact" className="text-gray-600 font-medium px-4 py-2 rounded-xl hover:text-sky-600 hover:bg-sky-50 transition-all duration-200">
    Contact
  </a>
  <a href="#" className="bg-sky-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-sky-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ml-4">
    Join the Movement
  </a>
</div>

            </div>
          </div>
        </nav>
        
        {children}
      </body>
    </html>
  );
}