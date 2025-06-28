export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Modern Hero Section */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-8">
            Welcome to the 
            <span className="text-transparent bg-gradient-to-r from-sky-500 to-amber-500 bg-clip-text"> No Socks</span> Revolution
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Life is better without socks. Join thousands who have discovered 
            the freedom, comfort, and pure joy of going sockless.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-sky-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sky-600 hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
              Start Your Journey 🦶
            </button>
            <button className="text-sky-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sky-50 hover:scale-105 transition-all duration-200">
              Learn More →
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Feet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">$50M+</div>
              <div className="text-gray-600 font-medium">Saved on Socks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Benefits Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why No Socks?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover the benefits that thousands have already experienced</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-200">
              🦶
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Freedom</h3>
            <p className="text-gray-600 leading-relaxed">Your feet deserve to breathe. Experience true comfort without restrictive fabric holding you back.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-200">
              🌱
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
            <p className="text-gray-600 leading-relaxed">Less laundry, less waste, more time for what matters. It's better for you and the planet we call home.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-200">
              💰
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Money</h3>
            <p className="text-gray-600 leading-relaxed">Never buy socks again. Invest those savings in shoes that feel amazing barefoot and experiences that matter.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-sky-500 to-amber-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">Take the first step towards freedom. Your feet will thank you.</p>
          <button className="bg-white text-sky-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
            Get Started Today
          </button>
        </div>
      </div>
    </main>
  );
}