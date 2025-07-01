"use client";
import { Suspense } from "react";

function NotFoundContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-gray-400 mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 underline">Go Home</a>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense>
      <NotFoundContent />
    </Suspense>
  );
} 