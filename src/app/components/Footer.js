export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <p className="text-gray-400 mb-2">3015 Grand Ave, Coconut Grove,</p>
            <p className="text-gray-400 mb-2">Merrick Way, FL 12345</p>
            <p className="text-gray-400 mb-2">Phone: 123-456-7890</p>
            <p className="text-gray-400">Email: info@cryptosite.com</p>
          </div>

          {/* Categories or Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/market" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Cryptocurrency Market
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  About Cryptocurrency
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and news in the cryptocurrency world.
            </p>
            <form action="#" method="POST" className="flex flex-col">
              <input
                type="email"
                className="px-4 py-2 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Sign Up
              </button>
            </form>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  How to Get Started with Cryptocurrency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Top 5 Cryptocurrencies to Watch in 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Blockchain Explained: The Basics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  Decentralized Finance (DeFi) Overview
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Social Media Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-400 hover:text-blue-400 transition duration-300" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.36 4.36 0 001.92-2.4c-.83.48-1.75.82-2.73 1a4.26 4.26 0 00-7.27 3.89A12.07 12.07 0 013 4.8a4.23 4.23 0 001.33 5.68 4.22 4.22 0 01-1.93-.54v.05a4.25 4.25 0 003.4 4.17c-.4.1-.82.14-1.26.14-.3 0-.61-.03-.9-.08a4.27 4.27 0 003.99 2.95 8.53 8.53 0 01-5.3 1.84c-.34 0-.68-.02-1.01-.06A12.05 12.05 0 006.29 19c7.7 0 11.91-6.37 11.91-11.91 0-.18-.01-.37-.02-.55A8.5 8.5 0 0022.46 6z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-400 hover:text-blue-400 transition duration-300" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.462.099 2.795.143v3.24h-1.916c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.11c.731 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-400 hover:text-blue-400 transition duration-300" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9.08h3.52v11.37zm-1.76-12.9c-1.12 0-2.03-.92-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03-.91 2.03-2.03 2.03zm14.38 12.9h-3.52v-5.56c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.94v5.67H9.65V9.08h3.38v1.55h.05c.47-.89 1.6-1.83 3.3-1.83 3.53 0 4.18 2.32 4.18 5.33v6.33z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CryptoSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
