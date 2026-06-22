import Navbar from "../component/Navbar";
import Image from "next/image";

export default function Download() {
  return (
    <div>
      <Navbar />
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#6887f4] via-[#6b8ff7] to-[#6dc9ff] relative">

      <div className="absolute inset-0 opacity-20 bg-[url('/bg-lines.png')] bg-cover bg-center"></div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mt-20">
          Trade faster. Earn more.
          <br />
          Stay secure.
        </h1>

        <p className="text-white text-xl mt-8">
          Enjoy smoother trades, exclusive rewards, instant updates.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-14">
          <button className="border border-white text-white rounded-full px-10 py-4 hover:bg-white hover:text-blue-500 duration-300">
             Get on iPhone
          </button>

          <button className="border border-white text-white rounded-full px-10 py-4 hover:bg-white hover:text-blue-500 duration-300">
            ▶ Get on Android
          </button>
        </div>

        <div className="mt-20">
          <Image
            src="/phone.png"
            alt="Phone Mockup"
            width={650}
            height={650}
            priority
            className="object-contain"
          />
        </div>
      </section>
    </main>
    </div>
  );
}