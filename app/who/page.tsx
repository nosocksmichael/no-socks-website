// app/who/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who | No Socks Agency - Our Story & Approach",
  description: "We architect intelligent marketing ecosystems for ambitious challengers. Learn about our mission to give your authentic vibe unstoppable velocity through AI, automation, and marketing OS development.",
};

export default function Who() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-8 tracking-tight">
            The <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">No Socks</span> Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
            Forget vanity metrics. We focus on the data that drives your bottom line.
          </p>
          
          {/* Technical Philosophy Code Block */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="font-mono text-blue-400 text-sm mb-2">// company_philosophy.js</p>
            <div className="font-mono text-gray-300 text-sm text-left">
              <div>const noSocks = &#123;</div>
              <div className="ml-4">mission: 'build_permanent_assets',</div>
              <div className="ml-4">approach: 'ai_powered_systems',</div>
              <div className="ml-4">result: 'unstoppable_velocity'</div>
              <div>&#125;;</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Story */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 lg:p-12 mb-12">
            <div className="mb-6">
              <p className="font-mono text-blue-400 text-sm">// origin_story.execute()</p>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-blue-400 font-semibold leading-relaxed">
                For too long, ambitious brands have been trapped by the bloated and outdated agency model.
              </p>
              
              <p className="text-lg leading-relaxed">
                We started No Socks because we saw brilliant brands being held back by agencies that were 
                slow, expensive, and opaque. The old playbook is obsolete. We're building the framework 
                for the next decade of brand growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our approach is different: we don't just execute campaigns—we architect intelligent marketing 
                ecosystems. We transform complex AI potential into tactical advantages. We design automation 
                that works like art. We build Marketing Operating Systems that become permanent growth assets.
              </p>
              
              <p className="text-lg leading-relaxed">
                What began as frustration with the status quo has become a new path forward. Today, we partner 
                with funded startups, modern DTC brands, and innovative B2B companies who refuse to accept 
                "that's how it's always been done."
              </p>
            </div>
            
            {/* Technical Metrics */}
            <div className="bg-gray-900 rounded-lg p-4 mt-6">
              <p className="font-mono text-blue-400 text-xs mb-2">// impact_metrics.js</p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-mono text-green-400 text-sm">CLIENTS_SERVED: 50+</p>
                  <p className="text-gray-400 text-xs">ambitious brands transformed</p>
                </div>
                <div>
                  <p className="font-mono text-green-400 text-sm">AVG_ROI_LIFT: +280%</p>
                  <p className="text-gray-400 text-xs">performance improvement</p>
                </div>
                <div>
                  <p className="font-mono text-green-400 text-sm">SYSTEMS_BUILT: 100%</p>
                  <p className="text-gray-400 text-xs">client ownership guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Our Mission</h3>
              <p className="font-mono text-blue-400 text-xs mb-3">// mission_statement.execute()</p>
              <p className="text-gray-400 leading-relaxed">
                To empower ambitious challengers to move at the speed of culture by architecting 
                intelligent marketing ecosystems that give their authentic vibe unstoppable velocity.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Our Values</h3>
              <p className="font-mono text-blue-400 text-xs mb-3">// core_values.list()</p>
              <p className="text-gray-400 leading-relaxed">
                Speed over bureaucracy. Transparency over mystery. ROI over vanity metrics. 
                Strategic thinking over tactical execution. We believe in partnerships, not vendor relationships.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 lg:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-100 mb-4 text-center">How We Work</h3>
            <p className="font-mono text-blue-400 text-sm text-center mb-8">// methodology.demonstrate()</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                  🤖
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-3">AI Leveraging</h4>
                
                {/* Technical Code Block */}
                <div className="bg-gray-900 rounded-lg p-3 mb-4">
                  <p className="font-mono text-blue-400 text-xs">// ai_advantage.js</p>
                  <div className="font-mono text-gray-300 text-xs text-left">
                    <div>ai.analyze(audience_data)</div>
                    <div>.predict(behavior_patterns)</div>
                    <div>.optimize(creative_performance);</div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  We master AI to give you tactical advantages: deeper audience insights, 
                  predictive media buying, and creative that resonates on a new level.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                  ⚡
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-3">Automation Artistry</h4>
                
                {/* Technical Code Block */}
                <div className="bg-gray-900 rounded-lg p-3 mb-4">
                  <p className="font-mono text-blue-400 text-xs">// automation_flow.js</p>
                  <div className="font-mono text-gray-300 text-xs text-left">
                    <div>automate.workflows(&#123;</div>
                    <div className="ml-2">precision: 'surgical',</div>
                    <div className="ml-2">personality: 'authentic'</div>
                    <div>&#125;);</div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  We design elegant automation that works 24/7, amplifying your message with 
                  precision and personality—the human touch amplified, not replaced.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                  🔧
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-3">Marketing OS Building</h4>
                
                {/* Technical Code Block */}
                <div className="bg-gray-900 rounded-lg p-3 mb-4">
                  <p className="font-mono text-blue-400 text-xs">// marketing_os.js</p>
                  <div className="font-mono text-gray-300 text-xs text-left">
                    <div>build.ecosystem(&#123;</div>
                    <div className="ml-2">data: unified,</div>
                    <div className="ml-2">intelligence: adaptive</div>
                    <div>&#125;);</div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  We build bespoke Marketing Operating Systems that integrate your data, 
                  creative, and media into a single, intelligent growth engine.
                </p>
              </div>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 lg:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">Our Team Philosophy</h3>
            <p className="font-mono text-blue-400 text-sm mb-6">// team_dna.define()</p>
            
            <div className="space-y-6 text-gray-300">
              <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-lg leading-relaxed">
                  <span className="text-blue-400 font-semibold font-mono">CONFIDENT_AND_DIRECT:</span> We speak with authority but without arrogance. 
                  We are direct and avoid jargon. We get to the point quickly.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-lg leading-relaxed">
                  <span className="text-purple-400 font-semibold font-mono">EFFORTLESSLY_SMART:</span> We are experts in a complex field, 
                  but we make it feel accessible and intuitive. Think of it as the central nervous system for your marketing.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-lg leading-relaxed">
                  <span className="text-green-400 font-semibold font-mono">WITTY_AND_HUMAN:</span> Our AI is brilliant, but it hasn't developed 
                  a sense of humor. That's still our job.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-lg leading-relaxed">
                  <span className="text-yellow-400 font-semibold font-mono">FUTURE_FOCUSED:</span> We're not just keeping up with what's next—we're building it today.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 lg:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-100 mb-4 text-center">Why Choose No Socks</h3>
            <p className="font-mono text-blue-400 text-sm text-center mb-8">// competitive_advantages.list()</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">
                  <span className="font-mono text-blue-400">// </span>What Makes Us Different
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">OWNERSHIP_MODEL:</span>
                      <span className="block text-gray-300">We build systems you own, not campaigns that end</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">AI_FIRST_APPROACH:</span>
                      <span className="block text-gray-300">AI-powered systems with human creativity and strategy</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">TRANSPARENCY_PROTOCOL:</span>
                      <span className="block text-gray-300">Open processes with complete documentation</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">NO_VENDOR_LOCK:</span>
                      <span className="block text-gray-300">Fixed-scope projects, complete independence</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">
                  <span className="font-mono text-blue-400">// </span>Our Commitment
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">PERFORMANCE_BENCHMARKS:</span>
                      <span className="block text-gray-300">Metrics tied directly to your business goals</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">WEEKLY_UPDATES:</span>
                      <span className="block text-gray-300">Progress reports and milestone reviews</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">KNOWLEDGE_TRANSFER:</span>
                      <span className="block text-gray-300">Team training and complete system handover</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-mono">✓</span>
                    <div>
                      <span className="font-mono text-blue-400 text-sm">POST_LAUNCH_SUPPORT:</span>
                      <span className="block text-gray-300">Ongoing optimization and system health monitoring</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Capabilities Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 lg:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-100 mb-6 text-center">Technical Capabilities</h3>
            <p className="font-mono text-blue-400 text-sm text-center mb-8">// tech_stack.overview()</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-100 mb-4">
                  <span className="font-mono text-green-400">// </span>AI & Machine Learning
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="font-mono">• predictive_analytics.py</div>
                  <div className="font-mono">• behavioral_modeling.js</div>
                  <div className="font-mono">• creative_optimization.ai</div>
                  <div className="font-mono">• attribution_modeling.ml</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-100 mb-4">
                  <span className="font-mono text-purple-400">// </span>Automation & Integration
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="font-mono">• workflow_automation.js</div>
                  <div className="font-mono">• api_integrations.py</div>
                  <div className="font-mono">• data_pipeline.sql</div>
                  <div className="font-mono">• real_time_sync.go</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Marketing OS?</h3>
            <div className="bg-blue-800 bg-opacity-30 rounded-xl p-4 max-w-xl mx-auto mb-6">
              <p className="font-mono text-blue-100 text-sm mb-2">// next_steps.execute()</p>
              <div className="font-mono text-blue-100 text-sm text-left">
                <div>if (ready_for_change) &#123;</div>
                <div className="ml-4">schedule.consultation();</div>
                <div className="ml-4">build.marketing_os();</div>
                <div className="ml-4">achieve.unstoppable_velocity();</div>
                <div>&#125;</div>
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's dismantle the old model and build an engine for your growth. No jargon, just results.
            </p>
            <a href="/connect" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}