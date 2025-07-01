// app/connect/page.tsx
import type { Metadata } from "next";
import ConnectForm from "./ConnectForm";

export const metadata: Metadata = {
  title: "Connect | No Socks Marketing",
  description: "Ready to build your Marketing OS? Schedule a consultation to discuss AI-powered automation, intelligent marketing systems, and velocity optimization for your brand.",
};

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-gray-100 mb-8">
            Ready to Build Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Marketing OS</span>?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Let's architect an intelligent marketing ecosystem that gives your brand unstoppable velocity. 
            No jargon, no black boxes—just systems that work.
          </p>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto mb-16">
            <p className="font-mono text-blue-400 text-sm mb-2">// consultation_process.js</p>
            <div className="font-mono text-gray-300 text-sm text-left">
              <div>function startConsultation() &#123;</div>
              <div className="ml-4">analyze.currentState();</div>
              <div className="ml-4">identify.opportunities();</div>
              <div className="ml-4">design.customSolution();</div>
              <div className="ml-4">return roadmap.success;</div>
              <div>&#125;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ConnectForm />
            {/* Information Sidebar */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-gray-100 mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-sm mr-3 mt-1">
                      <span className="font-mono text-blue-400">01</span>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-semibold">Strategic Assessment</h4>
                      <p className="text-gray-400 text-sm">Deep dive into your current marketing ecosystem and growth obstacles.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-sm mr-3 mt-1">
                      <span className="font-mono text-blue-400">02</span>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-semibold">Custom Solution Design</h4>
                      <p className="text-gray-400 text-sm">Tailored Marketing OS architecture specific to your business needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-sm mr-3 mt-1">
                      <span className="font-mono text-blue-400">03</span>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-semibold">Implementation Roadmap</h4>
                      <p className="text-gray-400 text-sm">Clear timeline, milestones, and success metrics for your project.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="grid gap-4">
                {/* Lightning Response */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-bold mb-2 text-white">⚡ Lightning Response</h4>
                  <p className="font-mono text-blue-100 text-sm">RESPONSE_TIME: &lt; 4hrs</p>
                  <p className="text-blue-100">
                    Strategy sessions scheduled within 24 hours.
                  </p>
                </div>

                {/* Success Rate */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-bold mb-2 text-white">🎯 Success Rate</h4>
                  <p className="font-mono text-pink-100 text-sm">CLIENT_SUCCESS: 94%</p>
                  <p className="text-pink-100">
                    of clients see measurable improvements within 60 days.
                  </p>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-gray-100 mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">For immediate questions:</p>
                    <p className="font-mono text-blue-400">hello@nosocks.dev</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Partnership inquiries:</p>
                    <p className="font-mono text-blue-400">partners@nosocks.dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Status Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-100 mb-4">System Status</h2>
              <p className="text-gray-400">Real-time status of our consultation and response systems.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                  🟢
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">Response System</h4>
                <p className="font-mono text-green-400 text-sm">AVAILABILITY: 99.9%</p>
                <p className="text-gray-400 text-sm">All consultation requests processed</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                  🤖
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">Auto Qualification</h4>
                <p className="font-mono text-blue-400 text-sm">AUTO_QUALIFY: enabled</p>
                <p className="text-gray-400 text-sm">Instant project assessment active</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                  ⚡
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">Calendar Sync</h4>
                <p className="font-mono text-purple-400 text-sm">CALENDAR_SYNC: active</p>
                <p className="text-gray-400 text-sm">Real-time scheduling available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mr-6">
                🚨
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">Urgent Project?</h3>
                <p className="text-gray-300">
                  Dealing with a marketing crisis or have an urgent launch deadline?
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <p className="font-mono text-red-400 text-sm mb-2">// emergency_contact.js</p>
              <div className="font-mono text-gray-300 text-sm">
                <div>if (project.urgency === 'critical') &#123;</div>
                <div className="ml-4">response.priority = 'immediate';</div>
                <div className="ml-4">escalate.to_leadership();</div>
                <div className="ml-4">activate.emergency_protocol();</div>
                <div>&#125;</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-lg font-bold text-gray-100 mb-2">Crisis Response</h4>
                <p className="font-mono text-red-400 text-sm">EMERGENCY_CONTACT: immediate</p>
                <p className="text-gray-300 text-sm">Use subject line "URGENT" for priority routing</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-lg font-bold text-gray-100 mb-2">Same-Day Consultation</h4>
                <p className="font-mono text-red-400 text-sm">RAPID_RESPONSE: &lt; 2hrs</p>
                <p className="text-gray-300 text-sm">Emergency strategy sessions available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-100 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Technical answers to common questions about our process.</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-gray-100 mb-3">
                  <span className="font-mono text-blue-400">Q: </span>How long does Marketing OS development take?
                </h4>
                <div className="bg-gray-800 rounded-lg p-4 mb-3">
                  <p className="font-mono text-blue-400 text-xs">// typical_timeline.js</p>
                  <div className="font-mono text-gray-300 text-xs">
                    <div>const timeline = &#123;</div>
                    <div className="ml-4">discovery: '1-2 weeks',</div>
                    <div className="ml-4">architecture: '2-3 weeks',</div>
                    <div className="ml-4">implementation: '4-8 weeks',</div>
                    <div className="ml-4">optimization: 'ongoing'</div>
                    <div>&#125;;</div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Total implementation: 6-12 weeks for a complete Marketing OS, depending on complexity and integrations required.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-gray-100 mb-3">
                  <span className="font-mono text-blue-400">Q: </span>What's included in the initial consultation?
                </h4>
                <p className="text-gray-400">
                  90-minute strategic assessment covering current state analysis, growth opportunity identification, 
                  technical architecture recommendations, and custom solution design. No sales pitch—pure strategy.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-gray-100 mb-3">
                  <span className="font-mono text-blue-400">Q: </span>Do you work with specific industries or company sizes?
                </h4>
                <p className="text-gray-400">
                  We work with ambitious brands across all industries. Typical clients: funded startups ($1M+ ARR), 
                  DTC brands ($5M+ revenue), and innovative B2B companies ready to invest in marketing infrastructure.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-gray-100 mb-3">
                  <span className="font-mono text-blue-400">Q: </span>What happens to our systems if we stop working together?
                </h4>
                <p className="text-gray-400">
                  You own everything. Complete system documentation, access credentials, and technical specifications 
                  are transferred to your team. Your Marketing OS continues running independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop Renting Marketing Results</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start building marketing assets that compound over time. Schedule your consultation today.
          </p>
          
          <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="font-mono text-blue-100 text-sm mb-2">// transformation_awaits.js</p>
            <div className="font-mono text-blue-100 text-sm text-left">
              <div>while (competition.uses_agencies) &#123;</div>
              <div className="ml-4">your_brand.gains_advantage();</div>
              <div className="ml-4">market_share.increases();</div>
              <div className="ml-4">revenue.compounds();</div>
              <div>&#125;</div>
            </div>
          </div>
          
          <a href="#contact-form" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
            Start Your Transformation
          </a>
        </div>
      </section>
    </main>
  );
}