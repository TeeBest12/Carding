import Navbar from "../component/Navbar";

export default function Sign() {
  return (
   <div className="min-h-screen w-full">
    <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
      <div className="space-y-6">
      
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-gray-300">CD</div>
        <span className="text-2xl font-semibold text-gray-100">Carding</span>
      
      </div>

      <h2 className="text-3xl font-bold text-gray-100">Top Prices, Instant Payouts</h2>
      <p className="text-lg text-gray-100">
        A secure and trusted gift card platform—turn your cards into cash easily, quickly, and safely.
      </p>

      <div className="">
        <img src="https://carding.icu/_nuxt/auth_group.vnMSx7tz.png" alt="Carding" className="h-auto w-full"/>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Log in</h2>
        <a href="#" className="text-blue-600 hover:underline">APP Download</a>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <div className="flex items-center border rounded px-3 py-2">
            <img src="https://v2-app-backend-public.afr-nigeria.ufileos.com/icon/Sell_Country_Nigeria%403x.webp" alt="Nigeria" className="h-5 w-5 mr-2"/>
            <span className="text-gray-700">Nigeria (NG)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Account</label>
          <input type="text" placeholder="Email / Phone number" className="w-full border rounded px-3 py-2"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" placeholder="Input password" className="w-full border rounded px-3 py-2"/>
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Log in
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500">
        By continuing, you agree to Carding Term of Use and confirm that you have read Privacy Policy.
      </p>

      <p className="mt-4 text-sm text-gray-600">
        Not yet register? <a href="signup.html" className="text-blue-600 hover:underline">Sign Up</a>
      </p>
    </div>
  </section>
   </div>
  );
}