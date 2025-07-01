// app/what/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | No Socks Marketing",
  description: "AI-powered marketing systems, intelligent automation, and Marketing OS development. We build marketing infrastructure that becomes a permanent competitive advantage.",
};

export default function WhatPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-gray-100 mb-8">
            What We <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Actually</span> Do
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12">
            We're not your typical marketing agency. We build marketing infrastructure that becomes 
            a permanent competitive advantage for ambitious brands ready to dominate their markets.
          </p>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto mb-16">
            <p className="font-mono text-blue-400 text-sm mb-2">// our_mission.js</p>
            <div className="font-mono text-gray-300 text-sm text-left">
              <div>function buildMarketingOS(brand) &#123;</div>
              <div className="ml-4">return integrate(&#123;</div>
              <div className="ml-8">vibe: brand.authenticity,</div>
              <div className="ml-8">velocity: scalable_systems,</div>
              <div className="ml-8">victory: measurable_results</div>
              <div className="ml-4">&#125;);</div>
              <div>&#125;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Disciplines */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Our Core Disciplines</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three specialized capabilities that transform how ambitious brands approach marketing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* AI Leveragers */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">AI Leveragers</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We transform AI from buzzword to competitive advantage. Our systems predict, optimize, 
                  and scale your marketing with surgical precision.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="font-mono text-blue-400 text-xs">// ai_capabilities.js</p>
                  <div className="font-mono text-gray-300 text-xs text-left">
                    <div>ai.predict(audience_behavior)</div>
                    <div>ai.optimize(creative_performance)</div>
                    <div>ai.scale(winning_campaigns)</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>• Predictive audience modeling</div>
                  <div>• Intelligent creative optimization</div>
                  <div>• Automated performance scaling</div>
                </div>
              </div>
              
              {/* Automation Artists */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Automation Artists</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We design elegant automation that works 24/7. Not clunky workflows, but sophisticated 
                  systems that amplify your brand with personality intact.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="font-mono text-blue-400 text-xs">// automation_flow.js</p>
                  <div className="font-mono text-gray-300 text-xs text-left">
                    <div>if (visitor.intent === 'high') &#123;</div>
                    <div className="ml-4">trigger.personalizedJourney()</div>
                    <div>&#125;</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>• Intelligent lead nurturing</div>
                  <div>• Dynamic customer journeys</div>
                  <div>• Real-time campaign optimization</div>
                </div>
              </div>
              
              {/* Marketing OS Builders */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Marketing OS Builders</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We architect complete marketing operating systems. Infrastructure you own, 
                  control, and scale forever.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="font-mono text-blue-400 text-xs">// marketing_os.js</p>
                  <div className="font-mono text-gray-300 text-xs text-left">
                    <div>const ecosystem = build(&#123;</div>
                    <div className="ml-4">data: unified_pipeline,</div>
                    <div className="ml-4">automation: intelligent,</div>
                    <div className="ml-4">analytics: predictive</div>
                    <div>&#125;);</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>• Complete system architecture</div>
                  <div>• Unified data infrastructure</div>
                  <div>• Scalable automation framework</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each engagement is designed to build permanent assets for your business, not temporary campaigns.
            </p>
          </div>

          {/* Marketing OS Development - Featured Service */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-4xl mr-6">
                🔧
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-100 mb-2">Marketing OS Development</h3>
                <p className="text-blue-400 font-mono text-sm">// flagship_service.execute()</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 text-lg">
              Build a comprehensive marketing infrastructure that becomes a permanent competitive advantage. 
              This isn't a campaign—it's your marketing foundation for the next decade.
            </p>
            
            <h4 className="text-lg font-semibold text-gray-100 mb-4">System Architecture Preview:</h4>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
              <pre className="font-mono text-sm text-gray-300">
{`// Your Marketing OS Structure
├── data_pipeline/
│   ├── customer_tracking.js      // Unified customer data
│   ├── attribution_model.js      // Multi-touch attribution
│   └── performance_analytics.js  // Real-time insights
├── automation_engine/
│   ├── lead_nurturing.js         // Intelligent workflows
│   ├── campaign_optimization.js  // Auto-scaling campaigns
│   └── personalization.js       // Dynamic content delivery
├── growth_dashboard/
│   ├── real_time_insights.js     // Live performance data
│   ├── predictive_models.js      // Forecast & trends
│   └── alert_system.js          // Automated monitoring
└── integration_layer/
    ├── crm_connector.js          // Sales alignment
    ├── ad_platform_sync.js       // Media optimization
    └── analytics_bridge.js       // Unified reporting`}
              </pre>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-mono text-blue-400 text-sm mb-2">DEPLOY_TIME: 6-12 weeks</h5>
                <p className="text-gray-300 text-sm">Complete implementation timeline</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-mono text-blue-400 text-sm mb-2">ROI_IMPACT: 300-500%</h5>
                <p className="text-gray-300 text-sm">Typical performance improvement</p>
              </div>
            </div>
            
            <a href="/connect" className="brand-button text-lg px-8 py-4 inline-block">
              Discuss Your Marketing OS
            </a>
          </div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI Automation Service */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🤖
                </div>
                <h4 className="text-lg font-bold text-gray-100">AI Automation</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-xs text-blue-400">// automation_config.js</p>
                <div className="font-mono text-xs text-gray-300">
                  <div>if (lead.score > threshold) &#123;</div>
                  <div className="ml-4">nurture.trigger('high_intent');</div>
                  <div className="ml-4">alert.sales_team();</div>
                  <div>&#125;</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Intelligent systems that work 24/7 to convert and nurture your audience with precision timing and personalized messaging.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-blue-400 text-xs">EFFICIENCY_GAIN: +340%</p>
                <p className="text-gray-300 text-sm">average improvement in lead processing</p>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Behavioral trigger automation</li>
                <li>• Dynamic content personalization</li>
                <li>• Predictive lead scoring</li>
              </ul>
            </div>

            {/* Velocity Strategy Service */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
                  ⚡
                </div>
                <h4 className="text-lg font-bold text-gray-100">Velocity Strategy</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-xs text-blue-400">// velocity_metrics.js</p>
                <div className="font-mono text-xs text-gray-300">
                  <div>const growth_rate = calculate(&#123;</div>
                  <div className="ml-4">acquisition: channels,</div>
                  <div className="ml-4">retention: campaigns,</div>
                  <div className="ml-4">velocity: optimization</div>
                  <div>&#125;);</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Strategic planning that accelerates your path to market dominance through data-driven velocity optimization.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-blue-400 text-xs">TIME_TO_MARKET: -60%</p>
                <p className="text-gray-300 text-sm">reduction in campaign deployment</p>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Rapid testing frameworks</li>
                <li>• Growth opportunity mapping</li>
                <li>• Velocity bottleneck analysis</li>
              </ul>
            </div>

            {/* Performance Analytics Service */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
                  📊
                </div>
                <h4 className="text-lg font-bold text-gray-100">Performance Analytics</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-xs text-blue-400">// analytics_dashboard.js</p>
                <div className="font-mono text-xs text-gray-300">
                  <div>dashboard.render(&#123;</div>
                  <div className="ml-4">realTime: true,</div>
                  <div className="ml-4">predictive: enabled,</div>
                  <div className="ml-4">alerts: intelligent</div>
                  <div>&#125;);</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Real-time insights and predictive analytics that turn data into actionable intelligence for faster decisions.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-blue-400 text-xs">ACCURACY_RATE: 94%</p>
                <p className="text-gray-300 text-sm">in performance predictions</p>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Real-time performance tracking</li>
                <li>• Predictive trend analysis</li>
                <li>• Automated alert systems</li>
              </ul>
            </div>

            {/* Media Infrastructure */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
                  📡
                </div>
                <h4 className="text-lg font-bold text-gray-100">Media Infrastructure</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-xs text-blue-400">// media_orchestration.js</p>
                <div className="font-mono text-xs text-gray-300">
                  <div>optimize.channels(&#123;</div>
                  <div className="ml-4">budget: allocation,</div>
                  <div className="ml-4">creative: variants,</div>
                  <div className="ml-4">audiences: segments</div>
                  <div>&#125;);</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Unified media management across all channels with intelligent budget allocation and performance optimization.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-blue-400 text-xs">COST_REDUCTION: -35%</p>
                <p className="text-gray-300 text-sm">average decrease in acquisition costs</p>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Cross-platform optimization</li>
                <li>• Automated budget allocation</li>
                <li>• Creative performance testing</li>
              </ul>
            </div>

            {/* Growth Consulting */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🚀
                </div>
                <h4 className="text-lg font-bold text-gray-100">Growth Consulting</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-xs text-blue-400">// growth_strategy.js</p>
                <div className="font-mono text-xs text-gray-300">
                  <div>strategy.execute(&#123;</div>
                  <div className="ml-4">market: analysis,</div>
                  <div className="ml-4">competitive: intelligence,</div>
                  <div className="ml-4">opportunity: mapping</div>
                  <div>&#125;);</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Strategic guidance for scaling marketing operations and building sustainable competitive advantages.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-blue-400 text-xs">GROWTH_RATE: +180%</p>
                <p className="text-gray-300 text-sm">average increase in qualified leads</p>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Market opportunity analysis</li>
                <li>• Competitive positioning</li>
                <li>• Scalability planning</li>
              </ul>
            </div>

            {/* Technical Integration */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🔗
                </div>
                <h4 className="text-lg font-bold text-gray-100">Technical Integration</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-xs text-blue-400">// integration_layer.js</p>
                <div className="font-mono text-xs text-gray-300">
                  <div>connect.systems(&#123;</div>
                  <div className="ml-4">crm: salesforce,</div>
                  <div className="ml-4">analytics: unified,</div>
                  <div className="ml-4">automation: seamless</div>
                  <div>&#125;);</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Seamless integration of all marketing tools and platforms into a unified, intelligent ecosystem.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="font-mono text-blue-400 text-xs">INTEGRATION_TIME: 2-3 weeks</p>
                <p className="text-gray-300 text-sm">typical setup for full ecosystem</p>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• API development & management</li>
                <li>• Data pipeline architecture</li>
                <li>• System health monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Our Process</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A systematic approach to building marketing infrastructure that delivers compounding returns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* Discovery */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Discovery</h3>
                <p className="font-mono text-xs text-blue-400 mb-3">// system_analysis.run()</p>
                <p className="text-gray-400 text-sm mb-4">
                  Deep technical audit of your current marketing ecosystem, data flows, and growth bottlenecks.
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="font-mono text-blue-400 text-xs">DURATION: 1-2 weeks</p>
                </div>
              </div>
              
              {/* Architecture */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Architecture</h3>
                <p className="font-mono text-xs text-blue-400 mb-3">// system_design.create()</p>
                <p className="text-gray-400 text-sm mb-4">
                  Design your bespoke Marketing OS architecture with scalable data pipelines and automation frameworks.
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="font-mono text-blue-400 text-xs">DURATION: 2-3 weeks</p>
                </div>
              </div>
              
              {/* Implementation */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Implementation</h3>
                <p className="font-mono text-xs text-blue-400 mb-3">// marketing_os.deploy()</p>
                <p className="text-gray-400 text-sm mb-4">
                  Build and deploy your Marketing OS with rigorous testing, integration, and optimization phases.
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="font-mono text-blue-400 text-xs">DURATION: 4-8 weeks</p>
                </div>
              </div>
              
              {/* Optimization */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                  <span className="font-mono font-bold text-blue-400">04</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Optimization</h3>
                <p className="font-mono text-xs text-blue-400 mb-3">// growth_engine.optimize()</p>
                <p className="text-gray-400 text-sm mb-4">
                  Continuous optimization and scaling of your marketing infrastructure based on performance data.
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="font-mono text-blue-400 text-xs">DURATION: Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">
              Why <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Infrastructure</span> Matters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most agencies build campaigns. We build permanent competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Traditional Agency Model</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Campaign-Based Thinking</h4>
                    <p className="text-gray-400 text-sm">Results die when contracts end</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Manual Processes</h4>
                    <p className="text-gray-400 text-sm">Everything requires human intervention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Fragmented Tools</h4>
                    <p className="text-gray-400 text-sm">Disconnected platforms and data silos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Reactive Optimization</h4>
                    <p className="text-gray-400 text-sm">Changes happen after problems occur</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">No Socks Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">System-Based Assets</h4>
                    <p className="text-gray-400 text-sm">Infrastructure you own and control forever</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Intelligent Automation</h4>
                    <p className="text-gray-400 text-sm">Systems that learn and optimize 24/7</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Unified Ecosystem</h4>
                    <p className="text-gray-400 text-sm">All tools working as one integrated system</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="text-gray-300 font-semibold">Predictive Intelligence</h4>
                    <p className="text-gray-400 text-sm">Systems that anticipate and prevent issues</p>
                  </div>
                </div>
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
            Stop renting marketing results. Start building marketing assets that compound over time.
          </p>
          
          <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="font-mono text-blue-100 text-sm mb-2">// next_steps.execute()</p>
            <div className="font-mono text-blue-100 text-sm text-left">
              <div>function startYourJourney() &#123;</div>
              <div className="ml-4">schedule.consultation();</div>
              <div className="ml-4">analyze.currentState();</div>
              <div className="ml-4">design.marketingOS();</div>
              <div className="ml-4">deploy.competitive_advantage();</div>
              <div>&#125;</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/connect" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
              Schedule Your Consultation
            </a>
            <a href="/" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More About Our Approach
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}