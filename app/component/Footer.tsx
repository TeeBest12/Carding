export default function Footer(){
    return(
  <footer className="bg-gray-900 text-gray-300 py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    
      <div className="mb-6 md:mb-0">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-white">CD</div>
          <span className="text-xl font-semibold text-white">Carding</span>
        </div>
        <p className="mt-3 text-gray-400 max-w-sm">
          Your trusted gift card trading platform. Fast, secure & reliable exchange.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="mailto:support@carding.com" className="hover:text-white">support@carding.com</a>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
      © 2026 Carding Platform. All rights reserved.
    </div>
  </footer>
 
)
}