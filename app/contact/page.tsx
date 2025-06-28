export default function Contact() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Get in <span className="text-sky-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your sockless journey? We'd love to hear from you!
            </p>
          </div>
  
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-400 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-400 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-400 transition-all duration-200"
                    placeholder="Tell us about your sockless journey or questions..."
                  ></textarea>
                </div>
  
                <button className="w-full bg-sky-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-600 transition-all duration-200">
                  Send Message
                </button>
              </div>
            </div>
  
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Or reach us directly:</h3>
              <p className="text-gray-600">📧 hello@nosocks.io</p>
              <p className="text-sm text-gray-500 mt-2">We respond within 24 hours!</p>
            </div>
          </div>
        </div>
      </main>
    );
  }