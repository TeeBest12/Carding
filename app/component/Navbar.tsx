import Link from "next/link"

export default function Navbar() {
  return (
   <header className="flex justify-between cursor-pointer items-center px-4 py-4">
    {/* <nav className="flex  space-x-6">
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
    </div> */}

    <nav className="flex justify-between text-[11px]  gap-2 items-center w-full"> 
      <div className="flex gap-2 items-center">
        <a className="text-[16px] font-bold" href="">Carding</a>
      </div>

      <div className="flex gap-3">
        <a className="hover:opacity-75" href="">Home</a>
        <a  className="hover:opacity-75"href="/sell-gift-card">Sell Gift Card</a>
        <a className="hover:opacity-75"href="/faq">FAQ</a>
        <a className="hover:opacity-75" href="/download-app">Download App</a>
      </div>

      <div  className="flex gap-4">
        <button className="hover:opacity-75">Sign up</button>
        <button className="hover:opacity-75 border border-black px-2 py-1 rounded hover:bg-black hover:text-white">Log in</button>
      </div>
    </nav>
  </header>
  );
}