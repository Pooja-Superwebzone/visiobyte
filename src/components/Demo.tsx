export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See VisioByte in Action
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed">
            Experience the power of AI-powered visual intelligence with a personalized demo. 
            Our experts will show you exactly how VisioByte can transform your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Demo</h3>
              <p className="text-blue-100">
                Tailored to your industry and specific use cases
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Integration</h3>
              <p className="text-blue-100">
                See real-time processing and results
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-blue-100">
                Get answers from our AI specialists
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                Watch Video Demo
              </button>
            </div>

            <p className="text-blue-100 text-sm">
              No commitment required • 30-minute session • Free consultation
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-blue-100 mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white/80">Microsoft</div>
              <div className="text-2xl font-bold text-white/80">Google</div>
              <div className="text-2xl font-bold text-white/80">Amazon</div>
              <div className="text-2xl font-bold text-white/80">IBM</div>
              <div className="text-2xl font-bold text-white/80">Oracle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
