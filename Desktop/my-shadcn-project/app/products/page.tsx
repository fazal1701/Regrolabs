import { ProductShowcase } from "@/components/product-showcase"
import { Benefits } from "@/components/benefits"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Wild Growth Hair Oil</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium natural hair care solution for stronger, healthier hair growth
          </p>
        </div>
      </div>
      <ProductShowcase />
      <Benefits />
    </div>
  )
}
