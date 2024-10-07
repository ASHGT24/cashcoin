import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className=" mx-auto py-8 px-4 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
