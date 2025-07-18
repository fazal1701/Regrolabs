import Image from "next/image"
import { CheckCircle, Leaf, Zap, Heart, Shield } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Natural Wild Essence",
    description: "Made with premium natural ingredients sourced from the finest botanicals worldwide.",
  },
  {
    icon: Zap,
    title: "Powerful Moisturizing",
    description: "Deep moisturizing formula that penetrates hair follicles for lasting hydration.",
  },
  {
    icon: Heart,
    title: "Comprehensive Care",
    description: "Works on hair, eyebrows, and eyelashes for complete beauty enhancement.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "Thousands of satisfied customers with visible results in just 30 days.",
  },
]

export function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/product-showcase.jpg"
              alt="Wild Growth Hair Oil benefits demonstration"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-bold text-gray-900">50,000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Wild Growth Hair Oil?</h2>
              <p className="text-lg text-gray-600">
                Our scientifically formulated hair oil combines traditional wisdom with modern innovation to deliver
                exceptional results for all hair types.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
