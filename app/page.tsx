import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-r from-blue-500 to-purple-600">
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">
            Got Gift Cards? Turn Them Into Cash Now!
          </h1>

          <p className="text-lg">
            No stress, no waiting. Just sell your cards and get your money fast,
            straight into your wallet.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg w-fit">
            Download App
          </button>

          <div className="flex space-x-6 mt-4">
            <img
              src="https://carding.icu/_nuxt/apple.carding.CZbUIWkD.png"
              alt="Apple"
              className="h-36"
            />

            <img
              src="https://carding.icu/_nuxt/google.carding.DBRjdwR4.png"
              alt="Steam"
              className="h-36"
            />

      
          </div>
        </div>

        <div className="bg-white text-black rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">
            Check Your Gift Card Value
          </h2>

          <form className="space-y-4">
            <select className="w-full border rounded px-3 py-2">
              <option>Category</option>
            </select>

            <select className="w-full border rounded px-3 py-2">
              <option>Country</option>
            </select>

            <select className="w-full border rounded px-3 py-2">
              <option>Type</option>
            </select>

            <select className="w-full border rounded px-3 py-2">
              <option>Speed</option>
            </select>

            <input
              type="number"
              placeholder="Please enter the card balance"
              className="w-full border rounded px-3 py-2"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Get Quote
            </button>
          </form>

          <p className="mt-4 text-gray-700">
            Sales Price <span className="font-semibold">₦0</span>
          </p>
        </div>
      </section>
<div className="bg-gray-100">
  <section className="bg-gray-100 text-black py-12 px-8 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg max-w-5xl mx-auto">
    
    <div className="max-w-lg">
      <h2 className="text-3xl font-bold">
        Sign up & Get ₦3,000 Cash + ₦2,100 in Coupons!
      </h2>
      <p className="text-lg">
        New users get ₦3,000 instantly, plus 5 exclusive coupons to boost your first gift card sales. Register now and start selling your gift cards for more!
      </p>
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        Register now →
      </button>
      <div className="flex space-x-8 mt-6">
        <div className="text-center">
          <p className="text-2xl font-bold">₦3,000</p>
          <p className="text-sm">Cash Bonus</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">₦2,100</p>
          <p className="text-sm">Coupon</p>
        </div>
      </div>
    </div>

    <div className="mt-8 md:mt-0 md:ml-12">
      <img
        src="https://carding.icu/images/home-coin-data.png"
        alt="Gift box with coins and coupons"
        className="w-64 h-auto"
      />
    </div>
  </section>
  </div>

  <div className="bg-gray-200">
  <section className="max-w-6xl mx-auto py-16 px-6">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">Wide Range of Supported Gift Cards</h2>
      <p className="mt-4 text-gray-600">
        Our platform supports a wide range of popular gift card brands, giving you more options and flexibility.
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        View more +
      </button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      <img src="apple.png" alt="Apple Gift Card" className="h-20 mx-auto"/>
      <img src="ebay.jpeg" alt="Steam Gift Card" className="h-20 mx-auto"/>
      <img src="Razergold.png" alt="Razer Gold Gift Card" className="h-20 mx-auto"/>
      <img src="xbox.jpeg" alt="Xbox Gift Card" className="h-20 mx-auto"/>

      <img src="ebay.jpeg" alt="eBay Gift Card" className="h-20 mx-auto"/>
      <img src="Sephora.png" alt="Sephora Gift Card" className="h-20 mx-auto"/>
      <img src="googleplay.png" alt="Google Play Gift Card" className="h-20 mx-auto"/>
      <img src="macys.jpeg" alt="Macy’s Gift Card" className="h-20 mx-auto"/>
    </div>
  </section>
  </div>

  <div className="bg-gray-100">
  <section className="max-w-6xl mx-auto py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800">How to Sell Your Gift Cards?</h2>
    <p className="mt-2 text-lg text-gray-600">Sell Your Gift Cards in 3 Easy Steps</p>

    <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-12 md:space-y-0">
      
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl font-bold">
          👤
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">Create Account</h3>
        <p className="mt-2 text-gray-600 max-w-xs">Create your secure account in minutes.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-green-600 text-white text-3xl font-bold">
          🎁
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">Sell Card</h3>
        <p className="mt-2 text-gray-600 max-w-xs">Enter your card details and get verified.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-purple-600 text-white text-3xl font-bold">
          💰
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">Get Paid</h3>
        <p className="mt-2 text-gray-600 max-w-xs">Withdraw your money instantly to your bank.</p>
      </div>
    </div>
  </section>
  </div>

  <div className="bg-gray-200">
  <section className="max-w-6xl mx-auto py-16 px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800">Platform Advantages</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Carding is your trusted gift card trading platform, providing secure and fast gift card exchange services.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-xl font-semibold text-gray-800">Secure</h3>
        <p className="mt-2 text-gray-600">Industry-leading protection for every trade</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">💲</div>
        <h3 className="text-xl font-semibold text-gray-800">Best Price</h3>
        <p className="mt-2 text-gray-600">Get the maximum value for your cards</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">🎁</div>
        <h3 className="text-xl font-semibold text-gray-800">Variety</h3>
        <p className="mt-2 text-gray-600">All major brands, one platform</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold text-gray-800">Fast</h3>
        <p className="mt-2 text-gray-600">Sell and withdraw in minutes</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">🔄</div>
        <h3 className="text-xl font-semibold text-gray-800">Seamless</h3>
        <p className="mt-2 text-gray-600">Simple steps, smooth experience</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">📞</div>
        <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
        <p className="mt-2 text-gray-600">Always here when you need us</p>
      </div>
    </div>
  </section>
  </div>

  <div className="bg-gray-100">
  <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Web & App — Designed for Your Convenience</h2>
      <p className="text-lg text-gray-600">
        Sell and manage gift cards effortlessly — enjoy the full power of our web platform and the flexibility of our mobile app, anytime, anywhere.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Register now →
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Download App →
        </button>
      </div>
    </div>

    <div className="relative flex justify-center">
      <img src="https://carding.icu/images/home-dashboard.png" alt="Web dashboard mockup" className="w-80 h-auto rounded-lg shadow-lg"/>
    </div>
  </section>
  </div>

  <div className="bg-gray-200">
  <section className="max-w-6xl mx-auto py-16 px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800">Trusted by 1,000,000+ Users</h2>
      <p className="mt-2 text-lg text-gray-600">
        Hear what our users say about trading gift cards with us
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/FaithN.png" alt="Faith N." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Faith N.</h3>
        </div>
        <p className="text-gray-600">Customer support is always online. I got help at 2 AM when I had a question.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/EmmanuelO.png" alt="Emmanuel O." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Emmanuel O.</h3>
        </div>
        <p className="text-gray-600">The platform is super secure. I've sold cards multiple times, never had an issue.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/GraceA.png" alt="Grace A." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Grace A.</h3>
        </div>
        <p className="text-gray-600">They support all the brands I use — Apple, Google Play, Steam, everything in one place.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/KelvinD.png" alt="Kelvin D." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Kelvin D.</h3>
        </div>
        <p className="text-gray-600">Smooth interface and clear steps. Even my first sale went perfectly.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/ChikaE.png" alt="Chika E." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Chika E.</h3>
        </div>
        <p className="text-gray-600">I love how quick the withdrawals are. My funds hit my bank in minutes!</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/AmaraI.png" alt="Amara I." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Amara I.</h3>
        </div>
        <p className="text-gray-600">Got stuck once and the support team helped instantly. Great service.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/PeterM.png" alt="Peter M." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Peter M.</h3>
        </div>
        <p className="text-gray-600">I feel safe using this platform. Every trade is verified and transparent.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/JoyO.png" alt="Joy O." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Joy O.</h3>
        </div>
        <p className="text-gray-600">Best platform I’ve used so far — fair rates, fast payments, and great support.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/TundeA.png" alt="Tunde A." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Tunde A.</h3>
        </div>
        <p className="text-gray-600">"Really fast! Sold my Steam card and received money in less than 5 minutes.</p>
      </div>

       <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/MichaelO.png" alt="Michael O." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Michael O.</h3>
        </div>
        <p className="text-gray-600">Carding gave me the best rate for my Amazon cards. Got paid in minutes!</p>
       </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/JohnM.png" alt="John M." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">John M.</h3>
        </div>
        <p className="text-gray-600">What I love most is the smooth process — no stress, just upload and cash out.</p>
      </div>

       <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://carding.icu/images/comment/SarahK.png" alt="Sarah K." className="w-12 h-12 rounded-full"/>
          <h3 className="font-semibold text-gray-800">Sarah K.</h3>
        </div>
        <p className="text-gray-600">I feel safe using this platform. Every trade is verified and transparent.</p>
       </div>


    </div>
  </section>
  </div>

  <Footer />

    </div>
    
  );
}