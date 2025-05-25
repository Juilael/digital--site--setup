"use client"

import { Chip, Visa, Mastercard, Amex, Discover, DefaultCard } from "./card-icons"

interface CreditCardProps {
  cardNumber: string
  cardholderName: string
  expiryMonth: string
  expiryYear: string
  cvv: string
  cardType: "visa" | "mastercard" | "amex" | "discover" | "unknown"
  isFlipped: boolean
}

export default function CreditCard({
  cardNumber,
  cardholderName,
  expiryMonth,
  expiryYear,
  cvv,
  cardType,
  isFlipped,
}: CreditCardProps) {
  const formattedCardNumber = cardNumber || "•••• •••• •••• ••••"
  const formattedName = cardholderName || "YOUR NAME"
  const formattedExpiry = expiryMonth && expiryYear ? `${expiryMonth}/${expiryYear}` : "MM/YY"

  const CardIcon = () => {
    switch (cardType) {
      case "visa":
        return <Visa className="h-10 w-16" />
      case "mastercard":
        return <Mastercard className="h-10 w-16" />
      case "amex":
        return <Amex className="h-10 w-16" />
      case "discover":
        return <Discover className="h-10 w-16" />
      default:
        return <DefaultCard className="h-10 w-16" />
    }
  }

  return (
    <div className="perspective-1000 w-full max-w-[420px] h-[250px] relative">
      <div
        className={`w-full h-full relative preserve-3d transition-all duration-500 ${isFlipped ? "rotate-y-180" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start">
            <Chip className="h-10 w-10" />
            <CardIcon />
          </div>

          <div className="mt-6">
            <p className="font-mono text-xl tracking-wider">{formattedCardNumber}</p>
          </div>

          <div className="mt-6 flex justify-between">
            <div>
              <p className="text-xs text-gray-300">Card Holder</p>
              <p className="font-medium uppercase tracking-wide">{formattedName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-300">Expires</p>
              <p className="font-medium">{formattedExpiry}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-12 bg-gray-900 mt-5" />

          <div className="px-6 mt-5">
            <div className="bg-gray-200 h-10 flex items-center justify-end px-3">
              <p className="text-gray-800 font-mono">{cvv || "•••"}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <CardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
