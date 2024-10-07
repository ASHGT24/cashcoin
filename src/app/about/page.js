import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-8">About CryptoSite</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            CryptoSite is a platform designed to provide the latest updates, insights, and analysis on cryptocurrency. 
            Our mission is to empower people by providing accurate and real-time data on blockchain and cryptocurrencies. 
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            At CryptoSite, our mission is to demystify the world of cryptocurrency and make it accessible to everyone. 
            We believe in the transformative power of blockchain and decentralized technologies, and we aim to deliver 
            valuable insights that empower our users to navigate this exciting landscape confidently.
          </p>
          <div className="flex justify-center mt-12">
            <img
              src="https://images.unsplash.com/photo-1423666523292-b458da343f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VHJhZGV8ZW58MHwwfDB8fHww"
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full lg:w-3/4"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 lg:px-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Transparency</h3>
              <p className="text-lg text-gray-300">
                We believe in open and transparent communication in everything we do. Our content is unbiased, 
                well-researched, and rooted in facts.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Integrity</h3>
              <p className="text-lg text-gray-300">
                Integrity is at the heart of what we do. We maintain high ethical standards and work hard to provide accurate information.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Innovation</h3>
              <p className="text-lg text-gray-300">
                We are committed to being on the cutting edge of blockchain innovation, keeping up with the latest trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D"
                alt="Jane Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Jane Doe</h3>
              <p className="text-gray-300">CEO & Co-founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1525357816819-392d2380d821?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="John Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">John Smith</h3>
              <p className="text-gray-300">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1533689476487-034f57831a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2ZpbGV8ZW58MHwwfDB8fHww"
                alt="Alice Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Alice Johnson</h3>
              <p className="text-gray-300">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
