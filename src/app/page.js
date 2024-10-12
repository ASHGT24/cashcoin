import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=1682&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-6xl font-extrabold text-white mb-4 animate-pulse">Welcome to Cash Coin</h1>
          <p className="text-xl text-gray-300 mb-6">Your own trusted cryptocurrency site</p>
          <Link href="/market">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Explore the Market</button>
          </Link>
        </div>
      </div>

      {/* Section 1: Cryptocurrency Overview */}
      <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What is Cryptocurrency?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Cryptocurrency is a decentralized digital currency that uses blockchain technology. 
            It allows secure peer-to-peer transactions without the need for intermediaries, making it the future of finance.
          </p>
        </div>
        <div className="flex justify-center mt-12 animate-fade-in-up">
          <img src="https://images.unsplash.com/photo-1642142783250-d1bef1dafbc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWRpbmd8ZW58MHwwfDB8fHww" width={600} height={400} />
        </div>
      </section>

      {/* Section 2: Bitcoin Overview */}
      <section className="py-20 px-4 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Bitcoin: The Pioneer of Cryptocurrency</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Bitcoin (BTC) was the first decentralized cryptocurrency, launched in 2009 by Satoshi Nakamoto. 
            It revolutionized the concept of digital assets and remains the most popular cryptocurrency today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Key Features of Bitcoin</h3>
            <ul className="mt-4 space-y-4 text-lg">
              <li className="text-gray-300 flex items-center">
                <span className="bg-blue-500 rounded-full p-2 mr-3"></span> Decentralized peer-to-peer transactions
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="bg-blue-500 rounded-full p-2 mr-3"></span> Limited supply of 21 million coins
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="bg-blue-500 rounded-full p-2 mr-3"></span> Most safe and secure transactions
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="bg-blue-500 rounded-full p-2 mr-3"></span> Acceptable all accross the digital markets
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="bg-blue-500 rounded-full p-2 mr-3"></span> Highly secure and immutable blockchain
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1641580529558-a96cf6efbc72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fEJpdGNvaW58ZW58MHwwfDB8fHww" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Section 3: How Cryptocurrency is Secure */}
      <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">How Cryptocurrency is Secure</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            One of the key advantages of cryptocurrency is its high security standards. Built on blockchain technology, 
            it ensures transparency, immutability, and the security of each transaction. Below are some security features:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Blockchain Technology</h3>
            <p className="text-gray-300">
              Each cryptocurrency transaction is recorded on a secure and immutable public ledger.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Encryption</h3>
            <p className="text-gray-300">
              All transactions are encrypted with strong cryptography to prevent tampering or fraud.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Decentralization</h3>
            <p className="text-gray-300">
              No central authority controls the blockchain, making it resistant to hacking or manipulation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Community Support */}
      <section className="py-20 px-4 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Strong Cryptocurrency Community</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            One of the strongest aspects of cryptocurrency is its community. From developers to investors, the global community works together to improve the technology and support newcomers.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" alt="Community Support" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" width={600} height={400} />
        </div>
      </section>

      {/* Section 5: How to Get Started with Cryptocurrency */}
      <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">How to Get Started with Cryptocurrency</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Getting started with cryptocurrency is easier than you think. Follow these simple steps to begin your journey into the digital economy:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Step 1: Choose an Exchange</h3>
            <p className="text-gray-300">
              Select a reputable cryptocurrency exchange to buy and trade your first coins (e.g., Coinbase, Binance).
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Step 2: Create a Wallet</h3>
            <p className="text-gray-300">
              A cryptocurrency wallet is necessary to securely store your digital assets. Use trusted wallets like MetaMask or Trust Wallet.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Step 3: Start Trading</h3>
            <p className="text-gray-300">
              Once you have coins in your wallet, you can trade, hold, or invest in various cryptocurrencies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Cryptocurrency Statistics */}
      <section className="py-20 px-4 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Crypto Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-blue-400">21M</h3>
              <p className="text-gray-300">Total Bitcoin Supply</p>
            </div>
            {/* Stat 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-blue-400">$2 Trillion</h3>
              <p className="text-gray-300">Crypto Market Capitalization</p>
            </div>
            {/* Stat 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-blue-400">5000+</h3>
              <p className="text-gray-300">Cryptocurrencies Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-20 px-4 lg:px-20 text-center bg-gray-900">
        <h2 className="text-4xl font-bold text-white mb-8">Join the Future of Finance</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">Ready to start your cryptocurrency journey? Sign up now and stay updated with the latest trends and insights!</p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">Get Started</button>
        </Link>
      </section>
    </section>
  );
}
