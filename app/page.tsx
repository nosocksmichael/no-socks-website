// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Socks | Where Vibe Marketing Meets Velocity",
  description: "We architect intelligent marketing ecosystems that give your authentic vibe unstoppable velocity. AI leveraging, automation artistry, and marketing OS building for ambitious challengers.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-gray-100 mb-8">
            Where <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Vibe Marketing</span><br />
            Meets <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Velocity</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12">
            For ambitious brands tired of the bloated and outdated agency model, No Socks provides a new path. 
            We architect intelligent marketing ecosystems that give your authentic vibe unstoppable velocity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="/connect" className="brand-button text-lg px-8 py-4">
              Schedule Your Consultation
            </a>
            <a href="/who" className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-500 hover:text-gray-100 transition-all duration-200">
              Learn Our Approach →
            </a>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                🤖
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">AI-Powered</h3>
              <div className="text-gray-400 font-medium">Marketing systems that work intelligently, not just harder</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">Built to Scale</h3>
              <div className="text-gray-400 font-medium">Systems you own forever, not campaigns that fizzle out</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                🔧
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">Transparent</h3>
              <div className="text-gray-400 font-medium">No jargon, no black boxes, just clear results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Our Core Disciplines</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your brand's vibe is your greatest asset. Our job is to give it unstoppable momentum through three core disciplines.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1: AI Leveragers */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">AI Leveragers</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We don't just use AI; we master it. We transform the complex potential of artificial intelligence 
                  into a tactical advantage, giving your brand the leverage to outpace and outperform the competition.
                </p>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>• Predictive audience insights</div>
                  <div>• Intelligent media optimization</div>
                  <div>• Creative performance analysis</div>
                </div>
              </div>
              
              {/* Pillar 2: Automation Artists */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Automation Artists</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Anyone can automate. We make it an art form. We design and deploy seamless, elegant automation 
                  that works 24/7, amplifying your message with precision and personality.
                </p>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>• 24/7 lead nurturing systems</div>
                  <div>• Personalized customer journeys</div>
                  <div>• Intelligent campaign optimization</div>
                </div>
              </div>
              
              {/* Pillar 3: Marketing OS Builders */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Marketing OS Builders</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We go beyond campaigns to build your core marketing infrastructure. We architect a bespoke 
                  Marketing OS—an intelligent, adaptive system that becomes a permanent asset for driving growth.
                </p>
                
                {/* Technical code element - Fixed JSX syntax */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4 text-left">
                  <p className="font-mono text-blue-400 text-xs">// marketing_ecosystem.js</p>
                  <div className="font-mono text-gray-300 text-sm">
                    <div>const growthEngine = integrate(&#123;</div>
                    <div className="ml-4">data: customerInsights,</div>
                    <div className="ml-4">creative: brandVibe,</div>
                    <div className="ml-4">media: velocityChannels</div>
                    <div>&#125;);</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Built for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ambitious Challengers</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with brands that refuse to accept the status quo. You value speed, transparency, ROI, and strategic thinking.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 lg:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">The Traditional Agency Problem</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-4">What You're Tired Of:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    Slow, bureaucratic processes that delay results
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    Opaque reporting that hides real performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    Cookie-cutter strategies that ignore your uniqueness
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    Expensive retainers with minimal accountability
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    Campaigns that end when the contract does
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">The No Socks Difference:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Rapid implementation and fast iteration cycles
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Complete transparency in methods and results
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Bespoke systems tailored to your specific needs
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Performance-based partnerships, not time-based billing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Marketing assets you own and control forever
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Target Audience */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Funded Startups</h4>
              <p className="text-sm text-gray-400">Need to hit aggressive growth targets with marketing that scales as fast as you do.</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Modern DTC Brands</h4>
              <p className="text-sm text-gray-400">Understand that vibe and community are crucial for sustainable, profitable growth.</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Innovative B2B</h4>
              <p className="text-sm text-gray-400">Tired of dry, corporate marketing and ready to build a brand with a genuine point of view.</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Frustrated Leaders</h4>
              <p className="text-sm text-gray-400">Been burned by agencies and looking for a true strategic partner, not another vendor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">Our Approach</h2>
            <p className="text-xl text-gray-400 mb-12">We strip away the unnecessary to get to what matters.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">01</span>
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-3">Audit & Analyze</h3>
                <p className="font-mono text-xs text-blue-400 mb-2">// system_analysis.run()</p>
                <p className="text-gray-400 text-sm">Deep dive into your current marketing ecosystem to identify opportunities and inefficiencies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">02</span>
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-3">Architect & Build</h3>
                <p className="font-mono text-xs text-blue-400 mb-2">// marketing_os.deploy()</p>
                <p className="text-gray-400 text-sm">Design and implement your bespoke Marketing OS with AI-powered automation at its core.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">03</span>
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-3">Optimize & Scale</h3>
                <p className="font-mono text-xs text-blue-400 mb-2">// growth_engine.optimize()</p>
                <p className="text-gray-400 text-sm">Continuously refine and expand your marketing infrastructure as your business grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Marketing OS?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's dismantle the old model and build an engine for your growth. No jargon, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/connect" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
              Schedule Your Consultation
            </a>
            <a href="/who" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More About Our Approach
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}