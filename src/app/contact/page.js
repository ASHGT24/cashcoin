export default function ContactPage() {
    return (
      <section className="bg-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-8">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are here to help! Reach out to our team using the form below or connect with us via social media.
            </p>
          </div>
        </section>
  
        {/* Contact Form Section */}
        <section className="py-20 px-4 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                  placeholder="Your Message"
                  rows="6"
                ></textarea>
              </div>
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
  
        {/* Social Links Section */}
        <section className="py-20 px-4 lg:px-20 bg-gray-900 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Follow Us</h2>
          <p className="text-lg text-gray-300 mb-8">Stay connected with us on social media!</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </section>
    );
  }
  