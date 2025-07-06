import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, X, Star } from "lucide-react"

export default function MaterialsPage() {
  const materials = [
    {
      title: "Trex Composite Decking",
      subtitle: "Premium Composite Collection",
      price: "$28-38/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Industry-leading composite decking with superior durability and style",
      pros: [
        "25-year fade & stain warranty",
        "Scratch & mold resistant",
        "Low maintenance",
        "Eco-friendly recycled materials",
        "Wide color selection",
      ],
      cons: ["Higher upfront cost", "Can get hot in direct sun"],
      bestFor: "Homeowners wanting premium, low-maintenance decking",
      rating: 5,
    },
    {
      title: "TimberTech Composite Decking",
      subtitle: "Advanced Composite Technology",
      price: "$25-35/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-performance composite with realistic wood grain textures",
      pros: [
        "30-year limited warranty",
        "Capped polymer technology",
        "Fade & stain resistant",
        "Splinter-free surface",
        "Easy installation",
      ],
      cons: ["Premium pricing", "Limited availability"],
      bestFor: "Those seeking authentic wood appearance without maintenance",
      rating: 5,
    },
    {
      title: "Azek PVC Decking",
      subtitle: "100% Synthetic PVC",
      price: "$30-42/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium PVC decking that won't rot, warp, or splinter",
      pros: [
        "Lifetime limited warranty",
        "Completely waterproof",
        "Stain & scratch resistant",
        "Cool surface technology",
        "Paintable surface",
      ],
      cons: ["Highest cost option", "Can expand/contract"],
      bestFor: "Extreme weather conditions and high-moisture areas",
      rating: 4,
    },
    {
      title: "Fiberon Composite Decking",
      subtitle: "Good Life Collection",
      price: "$22-32/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Value-oriented composite with excellent performance",
      pros: [
        "25-year warranty",
        "PermaTech cap technology",
        "Slip-resistant surface",
        "Consistent color",
        "Good value proposition",
      ],
      cons: ["Fewer color options", "Less premium feel"],
      bestFor: "Budget-conscious buyers wanting composite benefits",
      rating: 4,
    },
    {
      title: "Zuri PVC Decking",
      subtitle: "Premium PVC Collection",
      price: "$32-45/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Luxury PVC decking with authentic hardwood appearance",
      pros: [
        "25-year warranty",
        "Realistic wood grain",
        "Stain & fade resistant",
        "Low thermal expansion",
        "Premium aesthetics",
      ],
      cons: ["Very high cost", "Limited color range"],
      bestFor: "Luxury installations requiring premium aesthetics",
      rating: 4,
    },
    {
      title: "Red Cedar Decking",
      subtitle: "Western Red Cedar",
      price: "$18-28/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Beautiful natural wood with natural weather resistance",
      pros: [
        "Natural beauty & aroma",
        "Naturally rot resistant",
        "Easy to work with",
        "Renewable resource",
        "Can be stained/painted",
      ],
      cons: ["Requires regular maintenance", "Can warp or split", "Color fades over time"],
      bestFor: "Traditional wood lovers willing to maintain",
      rating: 4,
    },
    {
      title: "Ipe Wood Decking",
      subtitle: "Brazilian Hardwood",
      price: "$38-55/sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Ultra-premium hardwood with exceptional durability",
      pros: [
        "50+ year lifespan",
        "Naturally fire resistant",
        "Extremely dense & durable",
        "Beautiful rich color",
        "Insect resistant",
      ],
      cons: ["Very expensive", "Difficult to work with", "Requires pre-drilling", "Limited sustainability"],
      bestFor: "Premium installations requiring maximum durability",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white text-[color:var(--foreground)] py-20 border-b border-[color:var(--border)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Choosing The Perfect
              <span className="block text-[color:var(--primary)]">Decking Material</span>
            </h1>
            <p className="text-xl text-[color:var(--muted-foreground)] mb-8">
              Compare premium decking options and find the perfect material for your project
            </p>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-[color:var(--secondary)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${material.image}')` }}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">{material.price}</Badge>
                  </div>
                  <div className="absolute top-4 left-4 flex">
                    {[...Array(material.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{material.title}</CardTitle>
                  <CardDescription className="text-teal-600 font-medium">{material.subtitle}</CardDescription>
                  <p className="text-slate-600">{material.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {material.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                        <X className="h-4 w-4 mr-1" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {material.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <X className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Best For:</h4>
                    <p className="text-sm text-slate-600">{material.bestFor}</p>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0"
                    asChild
                  >
                    <Link href="/contact">Get Quote for This Material</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Comparison CTA */}
      <section className="py-20 bg-[color:var(--primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Not Sure Which Material to Choose?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can help you select the perfect decking material based on your budget, lifestyle, and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-neutral-800 text-lg px-8 py-3 border border-black"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              className="bg-black text-white text-lg px-8 py-3 border border-black"
              asChild
            >
              <Link href="/estimator">Use Deck Estimator</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
