import Navbar from "../component/Navbar";

export default function Success() {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-8 rounded-3xl text-center">
        <h1 className="text-4xl font-bold text-green-500">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-gray-400">
          Your gift card order has been received.
        </p>
      </div>
    </div>
    </div>
  );
}