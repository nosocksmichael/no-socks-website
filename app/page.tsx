export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to the 
            <span className="text-blue-600"> No Socks</span> Revolution
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Life is better without socks. Join thousands who have discovered 
            the freedom, comfort, and pure joy of going sockless.
          </p>
          
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Join the Movement
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why No Socks?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🦶</div>
            <h3 className="text-2xl font-semibold mb-4">Freedom</h3>
            <p className="text-gray-600">Your feet deserve to breathe. Experience true comfort without restrictive fabric.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold mb-4">Sustainable</h3>
            <p className="text-gray-600">Less laundry, less waste, more time for what matters. It's better for you and the planet.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-semibold mb-4">Save Money</h3>
            <p className="text-gray-600">Never buy socks again. Invest those savings in shoes that feel amazing barefoot.</p>
          </div>
        </div>
      </div>
    </main>
  );
}