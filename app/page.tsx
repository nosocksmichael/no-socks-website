export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-gray-100 mb-8">
            Where <span className="accent-text">Vibe Marketing</span><br />
            Meets <span className="accent-text">Velocity</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12">
            For the ambitious brands tired of the bloated and outdated agency model, No Socks provides a new path. 
            We architect intelligent marketing ecosystems that give your authentic vibe unstoppable velocity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="brand-button text-lg px-8 py-4">
              Schedule Your Demo
            </button>
            <button className="brand-button-outline text-lg px-8 py-4">
              View Case Studies →
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">99%</div>
              <div className="text-gray-400 font-medium">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">5X</div>
              <div className="text-gray-400 font-medium">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold accent-text mb-3 font-mono">30%</div>
              <div className="text-gray-400 font-medium">Faster Than Traditional Agencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="container mx-auto px-6 py-20 bg-gray-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Our Core Disciplines</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your brand's vibe is your greatest asset. Our job is to give it unstoppable momentum through three core disciplines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: AI Leveragers */}
            <div className="card-dark p-8 text-center hover:bg-gray-750 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                🤖
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">AI Leveragers</h3>
              <p className="text-gray-400 leading-relaxed">
                We don't just use AI; we master it. We transform the complex potential of artificial intelligence 
                into a tactical advantage, giving your brand the leverage to outpace and outperform the competition.
              </p>
            </div>
            
            {/* Pillar 2: Automation Artists */}
            <div className="card-dark p-8 text-center hover:bg-gray-750 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Automation Artists</h3>
              <p className="text-gray-400 leading-relaxed">
                Anyone can automate. We make it an art form. We design and deploy seamless, elegant automation 
                that works 24/7, amplifying your message with precision and personality.
              </p>
            </div>
            
            {/* Pillar 3: Marketing OS Builders */}
            <div className="card-dark p-8 text-center hover:bg-gray-750 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                🔧
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Marketing OS Builders</h3>
              <p className="text-gray-400 leading-relaxed">
                We go beyond campaigns to build your core marketing infrastructure. We architect a bespoke 
                Marketing OS—an intelligent, adaptive system that becomes a permanent asset for driving growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Built for <span className="accent-text">Ambitious Challengers</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with brands that refuse to accept the status quo. You value speed, transparency, ROI, and strategic thinking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-dark p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Funded Startups</h4>
              <p className="text-sm text-gray-400">Aggressive growth targets need marketing engines that can keep pace.</p>
            </div>
            
            <div className="card-dark p-6 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Modern DTC Brands</h4>
              <p className="text-sm text-gray-400">You understand that vibe and community are crucial for scalable growth.</p>
            </div>
            
            <div className="card-dark p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Innovative B2B</h4>
              <p className="text-sm text-gray-400">Tired of dry, corporate marketing and ready to build a genuine point of view.</p>
            </div>
            
            <div className="card-dark p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Frustrated Leaders</h4>
              <p className="text-sm text-gray-400">Burned by slow, expensive agencies. Looking for a true strategic partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-6 py-20 bg-gray-800 bg-opacity-30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">The Results Speak for Themselves</h2>
          
          <div className="card-dark p-8 mb-8">
            <p className="text-xl text-gray-300 italic mb-6">
              "No Socks completely transformed our marketing approach. Their AI-driven insights and automation 
              helped us scale from $1M to $10M ARR in 18 months. They don't just execute—they architect growth."
            </p>
            <div className="font-semibold text-gray-100">Sarah Chen, CEO at TechFlow</div>
            <div className="text-sm text-gray-400">Series B SaaS Startup</div>
          </div>
          
          <button className="brand-button text-lg px-8 py-4">
            See More Case Studies
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Marketing OS?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's dismantle the old model and build an engine for your growth. No jargon, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
              Schedule Your Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-500 transition-all duration-200">
              Download Our Playbook
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}