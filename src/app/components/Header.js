import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-gray-100 py-4 shadow-lg">
      <div className=" mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-widest">
          <Link href="/">
            Crypto<span className="text-blue-400">Site</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-lg">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link href="/market" className="hover:text-blue-400 transition duration-300">
            Market
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition duration-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
