import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Home, Building2, Layers, Waves, TreePine, Fence, Sun, Shield, Lightbulb, Hammer, Wrench } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Decks",
      description: "Custom home deck construction tailored to your lifestyle and space",
      features: ["Custom Design", "Premium Materials", "Professional Installation"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Decks",
      description: "Durable commercial deck solutions for restaurants, hotels, and businesses",
      features: ["Heavy-Duty Construction", "Code Compliance", "Maintenance Plans"],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Multi-Level Decks",
      description: "Complex multi-tiered deck systems that maximize your outdoor space",
      features: ["Structural Engineering", "Seamless Integration", "Safety Railings"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Pool Decks / Hot Tub Decks",
      description: "Waterproof deck solutions designed for pool and spa environments",
      features: ["Water-Resistant Materials", "Slip-Resistant Surface", "Drainage Systems"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Rooftop Decks / Green Decks",
      description: "Urban rooftop and eco-friendly green deck installations",
      features: ["Structural Assessment", "Waterproofing", "Plant Integration"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Fence className="h-8 w-8" />,
      title: "Deck Railings",
      description: "Safety and style with premium railing systems and designs",
      features: ["Glass Panels", "Cable Systems", "Custom Designs"],
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Pergolas / Gazebos",
      description: "Elegant shade structures and outdoor room additions",
      features: ["Custom Carpentry", "Weather Protection", "Integrated Lighting"],
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Custom Fences / Screens",
      description: "Privacy solutions and decorative screening for your deck area",
      features: ["Privacy Panels", "Wind Screens", "Decorative Elements"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Outdoor Deck Lighting",
      description: "Professional lighting design to extend your deck's usability",
      features: ["LED Systems", "Smart Controls", "Ambient Lighting"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Deck Foundation Piers / Screw Piles",
      description: "Solid foundation systems for long-lasting deck stability",
      features: ["Engineered Foundations", "Soil Analysis", "Structural Support"],
      color: "from-gray-500 to-gray-600",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Deck Joists Protection",
      description: "Advanced protection systems to extend your deck's lifespan",
      features: ["Moisture Barriers", "Ventilation Systems", "Protective Coatings"],
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Deck
              <span className="block text-primary">Construction Services</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              From residential patios to commercial installations, we deliver exceptional deck solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">{service.description}</CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create something perfect for your space.
          </p>
          <Button size="lg" className="bg-black text-white text-lg px-8 py-3 border border-black" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
