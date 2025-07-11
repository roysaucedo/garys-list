function Hero() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Muscians/Worship Leaders! Connect with 
              <span className="text-blue-600"> Local </span>
              with Your 
              <span className="text-purple-600"> Churches</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The premier platform connecting talented worship musicians with churches seeking to enrich their ministry through music
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Find Opportunities
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-2xl font-bold text-gray-900 mb-1">2,500+</div>
              <div className="text-gray-600">Active Musicians</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-2xl font-bold text-gray-900 mb-1">1,200+</div>
              <div className="text-gray-600">Partner Churches</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-2xl font-bold text-gray-900 mb-1">5,000+</div>
              <div className="text-gray-600">Successful Matches</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;