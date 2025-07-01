import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-gray-100 mb-8">
              Stop Wasting Money on <span className="accent-text">Traditional Agencies</span><br />
              Start Seeing <span className="accent-text">Measurable Results</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12">
              Tired of bloated agencies that burn your budget with little to show? No Socks delivers 
              AI-powered marketing systems that generate real ROI within 90 days — or you don't pay.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              <span className="font-semibold">Trusted by 200+ growth-focused companies</span> across SaaS, eCommerce, and B2B
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="brand-button text-lg px-8 py-4">
                Get Your Free Marketing Audit
              </button>
              <button className="brand-button-outline text-lg px-8 py-4">
                See 5X ROI Case Studies →
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">99%</div>
                <div className="text-gray-400 font-medium">Client Retention Rate<br/><span className="text-sm">(vs. industry avg. 30%)</span></div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">5.3X</div>
                <div className="text-gray-400 font-medium">Average ROI Increase<br/><span className="text-sm">Within First 6 Months</span></div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">30%</div>
                <div className="text-gray-400 font-medium">Lower Cost Than Agencies<br/><span className="text-sm">With Better Results</span></div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">72h</div>
                <div className="text-gray-400 font-medium">From Signup to Live<br/><span className="text-sm">Implementation Speed</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="container mx-auto px-6 py-20 bg-gray-800 bg-opacity-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">How We Deliver Results Other Agencies Can't</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                While traditional agencies burn your budget on meetings and middlemen, our proprietary system drives measurable growth through three proven approaches:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1: AI Leveragers */}
              <div className="card-dark p-8 text-center hover:bg-gray-750 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">AI Advantage</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our AI systems analyze 10,000+ data points to identify hidden growth opportunities your competitors miss. This translates to 47% higher conversion rates and 3X more qualified leads.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-300 italic">
                    <span className="text-blue-400 font-semibold">Unlike traditional agencies</span> that rely on gut feelings and outdated playbooks, we let data drive every decision.
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    "Helped us identify a customer segment we were completely missing — now our #1 revenue source." — <span className="text-gray-300">FitTech, $4M ARR</span>
                  </p>
                </div>
              </div>
              
              {/* Pillar 2: Automation Artists */}
              <div className="card-dark p-8 text-center hover:bg-gray-750 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">24/7 Revenue Systems</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our automated marketing engines work while you sleep, generating leads and sales around the clock. Clients typically see 2-3X more conversions within 60 days of implementation.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-300 italic">
                    <span className="text-blue-400 font-semibold">Unlike traditional agencies</span> that bill by the hour and drag projects out, our systems start generating revenue immediately.
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    "Generated $127K in sales during our first weekend after launch — while our team was offline." — <span className="text-gray-300">GreenHome, DTC Brand</span>
                  </p>
                </div>
              </div>
              
              {/* Pillar 3: Marketing OS Builders */}
              <div className="card-dark p-8 text-center hover:bg-gray-750 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Scalable Infrastructure</h3>
                <p className="text-gray-400 leading-relaxed">
                  Instead of one-off campaigns that fizzle out, we build permanent marketing assets you own forever. This approach has helped clients scale from $1M to $10M+ without increasing their marketing budget.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-300 italic">
                    <span className="text-blue-400 font-semibold">Unlike traditional agencies</span> that keep you dependent on their services, we build systems you fully own and control.
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    "Reduced CAC by 42% while doubling our customer base in 9 months." — <span className="text-gray-300">CloudSecure, B2B SaaS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Is Your Business <span className="accent-text">The Right Fit?</span></h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                We only work with companies ready for explosive growth. Our approach works best for these specific business types:
              </p>
              <p className="text-md text-gray-300 max-w-2xl mx-auto">
                <span className="font-semibold">Note:</span> Due to our high-touch approach, we only accept 5 new clients per month. Apply below to secure your spot.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-dark p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">Funded Startups</h4>
                <p className="text-sm text-gray-400 mb-4">Need to hit aggressive growth targets fast? Our systems deliver 40% faster results than traditional marketing approaches.</p>
                <div className="text-xs text-gray-500 mt-auto">
                  <p className="mb-1">✓ Series A or beyond</p>
                  <p className="mb-1">✓ $1M+ ARR</p>
                  <p className="mb-1">✓ Clear product-market fit</p>
                  <p className="mb-1 text-gray-400 font-semibold">→ Typical ROI: 7.2X within 12 months</p>
                </div>
              </div>
              
              <div className="card-dark p-6">
                <div className="text-4xl mb-4">🛍️</div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">DTC Brands ($1M+)</h4>
                <p className="text-sm text-gray-400 mb-4">Ready to scale beyond $1M? Our clients typically see 3-5X ROAS within 90 days of implementing our systems.</p>
                <div className="text-xs text-gray-500 mt-auto">
                  <p className="mb-1">✓ $1M+ annual revenue</p>
                  <p className="mb-1">✓ Healthy profit margins</p>
                  <p className="mb-1">✓ Repeat purchase model</p>
                  <p className="mb-1 text-gray-400 font-semibold">→ Typical ROI: 5.3X within 6 months</p>
                </div>
              </div>
              
              <div className="card-dark p-6">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">B2B Companies</h4>
                <p className="text-sm text-gray-400 mb-4">Struggling with long sales cycles? Our clients see 60% shorter sales cycles and 2X higher deal values.</p>
                <div className="text-xs text-gray-500 mt-auto">
                  <p className="mb-1">✓ $2M+ annual revenue</p>
                  <p className="mb-1">✓ Deal size $10K+</p>
                  <p className="mb-1">✓ Defined ICP</p>
                  <p className="mb-1 text-gray-400 font-semibold">→ Typical ROI: 4.1X within 9 months</p>
                </div>
              </div>
              
              <div className="card-dark p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">Growth-Focused Leaders</h4>
                <p className="text-sm text-gray-400 mb-4">Been burned before? We offer a 100% performance guarantee — you only pay full price when we deliver measurable results.</p>
                <div className="text-xs text-gray-500 mt-auto">
                  <p className="mb-1">✓ Decision maker with budget authority</p>
                  <p className="mb-1">✓ Ready to implement quickly</p>
                  <p className="mb-1">✓ Committed to long-term growth</p>
                  <p className="mb-1 text-gray-400 font-semibold">→ Apply for qualification assessment</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="brand-button-outline text-lg px-8 py-4">
                Take Our 2-Minute Qualification Quiz
              </button>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="container mx-auto px-6 py-20 bg-gray-800 bg-opacity-30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">Real Results From Real Clients</h2>
            
            <div className="card-dark p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-left">
                  <p className="text-xl text-gray-300 italic">
                    "No Socks delivered exactly what they promised. Their AI systems helped us scale from $1M to $10M ARR in just 18 months while REDUCING our total marketing spend by 22%. The ROI is undeniable."
                  </p>
                  <div className="font-semibold text-gray-100 mt-4">Sarah Chen, CEO at TechFlow</div>
                  <div className="text-sm text-gray-400">Series B SaaS Startup • 10X Growth in 18 Months</div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-gray-700 rounded-lg p-4 text-center min-w-[120px]">
                    <div className="text-sm text-gray-400">Before</div>
                    <div className="text-xl font-bold text-gray-200">$1M ARR</div>
                    <div className="text-sm text-gray-400">CAC: $872</div>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <span className="text-blue-400">→</span>
                  </div>
                  <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-400">After</div>
                    <div className="text-xl font-bold accent-text">$10M ARR</div>
                    <div className="text-sm text-gray-400">CAC: $681</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-dark p-6">
                <p className="text-md text-gray-300 italic mb-4">
                  "Generated 3.8X ROAS within 30 days. By month 3, we were at 6.2X. Best marketing investment we've ever made."
                </p>
                <div className="font-semibold text-gray-100">Michael Roberts, CMO</div>
                <div className="text-sm text-gray-400">AthleteGear • DTC Brand</div>
              </div>
              
              <div className="card-dark p-6">
                <p className="text-md text-gray-300 italic mb-4">
                  "Sales cycle dropped from 87 days to 32 days. Deal size increased 28%. Our board is thrilled with the results."
                </p>
                <div className="font-semibold text-gray-100">Jennifer Patel, Sales Director</div>
                <div className="text-sm text-gray-400">SecureStack • B2B Software</div>
              </div>
            </div>
            
            <button className="brand-button text-lg px-8 py-4 mb-16">
              Read 27 More Success Stories
            </button>
            
            <div className="mt-20">
              <p className="text-gray-400 mb-8 text-lg">Trusted by innovative companies across industries:</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                <div className="w-32 h-12 bg-gray-700 rounded flex items-center justify-center">Logo 1</div>
                <div className="w-32 h-12 bg-gray-700 rounded flex items-center justify-center">Logo 2</div>
                <div className="w-32 h-12 bg-gray-700 rounded flex items-center justify-center">Logo 3</div>
                <div className="w-32 h-12 bg-gray-700 rounded flex items-center justify-center">Logo 4</div>
                <div className="w-32 h-12 bg-gray-700 rounded flex items-center justify-center">Logo 5</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-500 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Stop Wasting Money on Marketing That Doesn't Work?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book your free 30-minute Marketing Efficiency Audit today. We'll analyze your current approach and show you exactly how to get better results for less money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
                Get Your Free Audit (Limited Spots)
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-500 transition-all duration-200">
                Download 5X ROI Playbook
              </button>
            </div>
            <p className="text-blue-100 mt-6 text-sm">*No obligation. No sales pitch. Just actionable insights you can use immediately.</p>
          </div>
        </section>
      </main>
    </Suspense>
  );
}