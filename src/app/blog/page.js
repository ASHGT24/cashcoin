export default function BlogPage() {
    return (
      <section className="bg-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-8">Latest Blog Posts</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest news, trends, and insights from the world of cryptocurrency.
            </p>
          </div>
        </section>
  
        {/* Blog Articles Section */}
        <section className="py-20 px-4 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Blog Post 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Understanding Blockchain Technology</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Explore how blockchain technology is revolutionizing data security, transparency, and transaction efficiency.
                </p>
                <a href="#" className="text-blue-400 hover:underline">Read More</a>
              </div>
              {/* Blog Post 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Top Cryptocurrencies to Watch in 2024</h2>
                <p className="text-lg text-gray-300 mb-6">
                  From Bitcoin to emerging altcoins, find out which cryptocurrencies you should be keeping an eye on in 2024.
                </p>
                <a href="#" className="text-blue-400 hover:underline">Read More</a>
              </div>
              {/* Blog Post 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">The Rise of Decentralized Finance (DeFi)</h2>
                <p className="text-lg text-gray-300 mb-6">
                  DeFi is transforming traditional finance. Learn how its empowering users with decentralized alternatives.
                </p>
                <a href="#" className="text-blue-400 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
  