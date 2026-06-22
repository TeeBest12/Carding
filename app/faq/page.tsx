import Navbar from "../component/Navbar";

export default function Faq() {
  return (
    <div>
        <Navbar/>
   <main className="max-w-6xl mx-auto px-6 py-12">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions About Carding</h2>
      <input type="text" placeholder="Search for articles..." className="mt-6 w-full md:w-1/2 border rounded px-4 py-2"/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
        <div className="text-3xl">👛</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Sell Gift Card</h3>
          <p className="mt-2 text-gray-600">Some questions you may have while selling gift cards on Carding.</p>
          <p className="mt-2 text-blue-600 font-medium">2 articles</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
        <div className="text-3xl">🎁</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Rewards</h3>
          <p className="mt-2 text-gray-600">Find quick answers about levels and rewards on Carding.</p>
          <p className="mt-2 text-blue-600 font-medium">3 articles</p>
        </div>
      </div>

    </div>
  </main>
  </div>
  );
}