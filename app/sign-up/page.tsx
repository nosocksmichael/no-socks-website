"use client";
import { useState } from "react";
import Head from "next/head";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>No Socks Sign Up - Experience True Foot Freedom</title>
        <meta name="description" content="Join 10,000+ who have discovered the freedom, comfort, and savings of going sockless. Sign up for exclusive tips and offers!" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50 flex flex-col items-center justify-start">
        {/* Logo Only */}
        <header className="w-full flex justify-center py-8">
          <a href="/" className="text-3xl font-bold text-gray-900 hover:text-sky-600 transition-colors duration-200 flex items-center gap-2">
            No Socks <span className="text-2xl">🧦</span>
          </a>
        </header>

        {/* Hero Section */}
        <section className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-4 mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Experience True Foot Freedom
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Join 10,000+ comfort-seekers who have discovered the liberation, savings, and pure joy of going sockless. Your feet will thank you!
          </p>
          {/* Signup Form */}
          {!submitted ? (
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4" onSubmit={handleSubmit} aria-label="Sign up for No Socks tips and offers">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white border-2 border-neutral-200 rounded-xl px-4 py-3 w-full sm:w-auto focus:border-sky-400 focus:ring-4 focus:ring-sky-100 placeholder:text-neutral-400 transition-all duration-200 text-lg"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 hover:scale-105 focus:ring-4 focus:ring-sky-200 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Get My Free Guide
              </button>
            </form>
          ) : (
            <div className="text-green-600 text-lg font-semibold mb-4" role="status">
              🎉 Thanks for joining! Check your inbox for your first tip.
            </div>
          )}
          <div className="text-sm text-gray-500 mb-2">No spam. Unsubscribe anytime.</div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full max-w-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Feet</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">$50M+</div>
              <div className="text-gray-600 font-medium">Saved on Socks</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-1">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full max-w-2xl mb-12">
          <div className="bg-gradient-to-br from-sky-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-sky-100 shadow text-center">
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">“I never realized how much socks were holding me back. Now, every day feels like freedom. My feet (and wallet) are happier than ever!”</blockquote>
            <div className="font-semibold text-gray-900">— Jamie L., No Socks Advocate</div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full max-w-2xl text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Feel the Difference?</h2>
          <p className="text-lg text-gray-600 mb-6">Sign up now and get our exclusive guide: <span className="font-semibold text-sky-600">“How to Go Sockless with Confidence”</span></p>
          {!submitted && (
            <button
              onClick={() => setSubmitted(true)}
              className="bg-sky-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-sky-600 hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Claim My Free Guide
            </button>
          )}
        </section>
      </main>
    </>
  );
} 