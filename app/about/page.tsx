export default function About() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              The <span className="text-transparent bg-gradient-to-r from-sky-500 to-amber-500 bg-clip-text">No Socks</span> Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              It started with a simple realization: socks are optional.
            </p>
          </div>
        </div>
        
        {/* Story Content */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Story */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl text-sky-600 font-semibold mb-6 leading-relaxed">
                  For too long, society has convinced us that feet must be wrapped in fabric prisons.
                </p>
                
                <p className="mb-6 text-lg leading-relaxed">
                  But what if there was a better way? What if comfort, freedom, and natural living 
                  could start with something as simple as taking off your socks? The No Socks movement 
                  isn't just about bare feet - it's about questioning conventions, embracing simplicity, 
                  and finding joy in the most unexpected places.
                </p>
                
                <p className="mb-8 text-lg leading-relaxed">
                  What began as one person's journey to comfort has become a global revolution. 
                  Thousands have discovered that life really is better without socks. The freedom, 
                  the savings, the environmental impact - it all adds up to something bigger than 
                  we ever imagined.
                </p>
              </div>
            </div>
  
            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200">
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To help people discover the simple pleasure of going sockless, 
                  while building a community of free-thinking, comfort-loving individuals 
                  who aren't afraid to be different.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                  🌟
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Freedom over convention. Comfort over conformity. Simplicity over complexity. 
                  We believe in authentic living and the courage to choose what feels right 
                  for you, not what society expects.
                </p>
              </div>
            </div>
  
            {/* Impact Stats */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-12">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact So Far</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-sky-600 mb-2">10,000+</div>
                  <div className="text-gray-600 font-medium">People Liberated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-2">50M+</div>
                  <div className="text-gray-600 font-medium">Dollars Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-2">2M+</div>
                  <div className="text-gray-600 font-medium">Sock Pairs Avoided</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-500 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>
  
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-sky-500 to-amber-500 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h3>
              <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                Your journey to freedom starts with a single step. Take off those socks and feel the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg">
                  Start Your Journey
                </button>
                <button className="text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }