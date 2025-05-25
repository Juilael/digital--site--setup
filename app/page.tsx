import CreditCardForm from "@/components/credit-card-form"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Secure Payment</h1>
        <CreditCardForm />
      </div>
    </main>
  )
}
