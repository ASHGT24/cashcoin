export default function MarketPage() {
    return (
      <section className="bg-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-8">Cryptocurrency Market</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore the latest cryptocurrency market trends, prices, and performance of the top digital currencies.
            </p>
          </div>
        </section>
  
        {/* Market Overview Section */}
        <section className="py-20 px-4 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Market Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              The global cryptocurrency market is valued at over $2 trillion. Here is a detailed overview of the most prominent cryptocurrencies leading the market.
            </p>
            <div className="flex justify-center mt-12">
              <img
                src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZGV8ZW58MHwwfDB8fHww"
                alt="Cryptocurrency Market"
                className="rounded-lg shadow-lg w-full lg:w-3/4"
              />
            </div>
          </div>
        </section>
  
        {/* Top Cryptocurrencies Section */}
        <section className="py-20 px-4 lg:px-20 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Top Cryptocurrencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Bitcoin */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Bitcoin (BTC)</h3>
                <p className="text-lg text-gray-300 mb-4">
                  The original cryptocurrency, Bitcoin dominates the market, known for its scarcity and decentralized nature.
                </p>
                <p className="text-gray-300">Price: $50,000</p>
                <p className="text-gray-300">Market Cap: $900 Billion</p>
              </div>
              {/* Ethereum */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Ethereum (ETH)</h3>
                <p className="text-lg text-gray-300 mb-4">
                  Ethereum introduced smart contracts and is the backbone of decentralized applications (DApps).
                </p>
                <p className="text-gray-300">Price: $3,500</p>
                <p className="text-gray-300">Market Cap: $400 Billion</p>
              </div>
              {/* Solana */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Solana (SOL)</h3>
                <p className="text-lg text-gray-300 mb-4">
                  Known for its speed and low transaction costs, Solana is a rising star in the blockchain world.
                </p>
                <p className="text-gray-300">Price: $200</p>
                <p className="text-gray-300">Market Cap: $60 Billion</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
  