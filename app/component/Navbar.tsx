import Link from "next/link"

export default function Navbar() {
  return (
   <header className="flex justify-between items-center px-8 py-4">
    <nav className="flex space-x-6">
      <Link href="/" className="hover:text-gray-200">
        Home
      </Link>
      <Link href="/sell-gift-card" className="hover:text-gray-200">
        Sell Gift Card
      </Link>
      <Link href="/faq" className="hover:text-gray-200">
        FAQ
      </Link>
      <Link href="/download-app" className="hover:text-gray-200">
        Download App
      </Link>
    </nav>
    <div className="space-x-4">
      <button className="bg-white text-blue-600 px-4 py-2 rounded">Sign up</button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded">Log in</button>
    </div>
  </header>
  );
}