import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Image from "next/image";


export default function Download() {
  return (
    <div>
      <Navbar />
    <main className="min-h-screen overflow-hidden bg-linear-to-b from-[#6887f4] via-[#6b8ff7] to-[#6dc9ff] relative">

      <div className="flex flex-col items-center justify-center text-center  gap-4 absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[42px] text-white">Trade faster. Earn more. <br /> Stay secure.</h1>
        <h2 className="text-white">Enjoy smoother trades, exclusive rewards, instant updates.</h2>
        <div className="flex gap-4">
         <button className="px-3 py-1 rounded-full text-[12px] border border-white text-white hover:bg-white hover:text-blue-600">Get an Iphone</button>
         <button className="px-3 rounded-full text-[12px]  border border-white text-white hover:bg-white hover:text-blue-600">Get an Android</button>
        </div>
      </div>
    
    </main> 
    <Footer />
    </div>
  );
}