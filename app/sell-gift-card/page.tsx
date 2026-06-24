"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../component/Navbar";

import {
  AmazonCard,
  AppleCard,
  SteamCard,
  XboxCard,
  NikeCard,
} from "../component/GiftCardMockups";

const cards = [
  {
    name: "Amazon",
    rate: "1250",
    component: <AmazonCard />,
  },
  {
    name: "Apple",
    rate: "1200",
    component: <AppleCard />,
  },
  {
    name: "Steam",
    rate: "1180",
    component: <SteamCard />,
  },
  {
    name: "Xbox",
    rate: "1150",
    component: <XboxCard />,
  },
  {
    name: "Nike",
    rate: "1100",
    component: <NikeCard />,
  },
];

export default function Sell() {
  const router = useRouter();

  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [amount, setAmount] = useState("");

  const totalPrice = amount
    ? Number(amount) * Number(selectedCard.rate)
    : 0;

  const goToCheckout = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    router.push(
      `/checkout?card=${selectedCard.name}&amount=${amount}&price=${totalPrice}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* LEFT PANEL */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
          <h2 className="text-2xl font-bold mb-6">
            Gift Cards
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.name}
                onClick={() => setSelectedCard(card)}
                className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                  selectedCard.name === card.name
                    ? "bg-indigo-600 border-indigo-400"
                    : "bg-slate-800 border-slate-700 hover:border-indigo-500"
                }`}
              >
                <h3 className="font-semibold">
                  {card.name}
                </h3>

                <p className="text-green-400">
                  ₦{card.rate}/$
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800">
          <div className="flex justify-center mb-8">
            {selectedCard.component}
          </div>

          <h2 className="text-3xl font-bold mb-2">
            Buy {selectedCard.name} Gift Card
          </h2>

          <p className="text-gray-400 mb-8">
            Secure purchase with instant delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">
                Amount ($)
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Current Rate
              </label>

              <input
                type="text"
                value={`₦${selectedCard.rate}/$`}
                readOnly
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-8 bg-slate-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Total Price
            </p>

            <h2 className="text-5xl font-bold text-green-500 mt-2">
              ₦{totalPrice.toLocaleString()}
            </h2>
          </div>

          <button
            onClick={goToCheckout}
            className="w-full mt-8 bg-green-600 hover:bg-green-700 py-4 rounded-xl text-lg font-semibold transition"
          >
            Continue to Checkout
          </button>
        </div>
      </main>
    </div>
  );
}