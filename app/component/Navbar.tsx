import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md text-black">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          Carding
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link
            href="/sell-gift-card"
            className="hover:text-blue-600 transition"
          >
            Sell Gift Card
          </Link>

          <Link
            href="/faq"
            className="hover:text-blue-600 transition"
          >
            FAQ
          </Link>

          <Link
            href="/download-app"
            className="hover:text-blue-600 transition"
          >
            Download App
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="text-sm hover:text-blue-600 transition"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-gray-900 px-4 py-2 text-sm hover:bg-gray-900 hover:text-white transition"
          >
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
}