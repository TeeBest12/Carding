export function AmazonCard() {
  return (
    <div className="w-full max-w-md h-56 rounded-3xl bg-black text-white p-8 relative overflow-hidden">
      <h2 className="text-5xl font-bold">amazon</h2>
      <p className="absolute bottom-8 left-8 text-3xl font-bold">$100</p>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-500 rounded-full" />
    </div>
  );
}

export function AppleCard() {
  return (
    <div className="w-full max-w-md h-56 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 text-black p-8">
      <div className="text-7xl text-center mt-6"></div>
      <p className="text-3xl font-bold mt-8">$100</p>
    </div>
  );
}

export function SteamCard() {
  return (
    <div className="w-full max-w-md h-56 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8">
      <h2 className="text-5xl font-bold">STEAM</h2>
      <p className="text-3xl font-bold mt-16">$100</p>
    </div>
  );
}

export function XboxCard() {
  return (
    <div className="w-full max-w-md h-56 rounded-3xl bg-gradient-to-br from-green-900 to-green-500 text-white p-8">
      <h2 className="text-5xl font-bold">XBOX</h2>
      <p className="text-3xl font-bold mt-16">$100</p>
    </div>
  );
}

export function NikeCard() {
  return (
    <div className="w-full max-w-md h-56 rounded-3xl bg-black text-white p-8">
      <div className="text-7xl text-center">✓</div>
      <p className="text-3xl font-bold mt-10">$100</p>
    </div>
  );
}