"use client";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSearchParams, useRouter } from "next/navigation";

export default function Checkout() {
  const params = useSearchParams();
  const router = useRouter();

  const card = params.get("card");
  const amount = params.get("amount");
  const price = Number(params.get("price") || 0);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: price,
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",
    customer: {
      email: "customer@email.com",
      name: "Customer",
    },
    customizations: {
      title: "Gift Card Purchase",
      description: `Purchase of ${card} Gift Card`,
      logo: "",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="bg-slate-900 rounded-3xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <div className="space-y-4">
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
            <span className="font-bold text-green-500">
              ₦{price.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);

                closePaymentModal();

                router.push("/success");
              },

              onClose: () => {},
            });
          }}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 py-4 rounded-xl font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}