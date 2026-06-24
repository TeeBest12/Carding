"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const params = useSearchParams();

  const card = params.get("card");
  const amount = params.get("amount");
  const price = Number(params.get("price") || 0);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    fullName: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!formData.email || !formData.fullName) {
      alert("Please complete all fields");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      tx_ref: `GIFTCARD-${Date.now()}`,
      amount: price,
      currency: "NGN",

      redirect_url: `${window.location.origin}/success`,

      customer: {
        email: formData.email,
        phonenumber: formData.phoneNumber,
        name: formData.fullName,
      },

      customizations: {
        title: "Gift Card Purchase",
        description: `${card} Gift Card - $${amount}`,
      },
    };

    try {
      const response = await fetch("/api/flutterwave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.status === "success" && data.data?.link) {
        window.location.href = data.data.link;
      } else {
        alert("Payment initialization failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="bg-slate-900 rounded-3xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <div className="space-y-3 mb-8">
          <div className="flex justify-between">
            <span>Gift Card</span>
            <span>{card}</span>
          </div>

          <div className="flex justify-between">
            <span>Amount</span>
            <span>${amount}</span>
          </div>

          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-green-500 font-bold">
              ₦{price.toLocaleString()}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4"
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl font-semibold"
          >
            {isSubmitting
              ? "Initializing Payment..."
              : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}