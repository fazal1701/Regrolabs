"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Lightbulb,
  Home,
  TreePine,
  Waves,
  Fence,
  Sun,
  Handshake,
  BarcodeIcon as Blueprint,
  HammerIcon,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Palette,
  Calculator,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function DeckConstructionWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [estimatorStep, setEstimatorStep] = useState(1)
  const [estimatorData, setEstimatorData] = useState({
    length: "",
    width: "",
    height: "",
    material: "",
    addons: [] as string[],
    totalCost: 0,
  })
  const [activeFilter, setActiveFilter] = useState("All Projects")

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Calculate estimate
  useEffect(() => {
    if (estimatorData.length && estimatorData.width && estimatorData.material) {
      const area = Number.parseFloat(estimatorData.length) * Number.parseFloat(estimatorData.width)
      let baseCost = 0

      switch (estimatorData.material) {
        case "composite":
          baseCost = area * 30
          break
        case "cedar":
          baseCost = area * 23
          break
        case "pressure-treated":
          baseCost = area * 16
          break
      }

      let addonCost = 0
      estimatorData.addons.forEach((addon) => {
        switch (addon) {
          case "railings":
            addonCost += (Number.parseFloat(estimatorData.length) + Number.parseFloat(estimatorData.width)) * 2 * 30
            break
          case "lighting":
            addonCost += 450
            break
          case "pergola":
            addonCost += 3000
            break
          case "seating":
            addonCost += 1000
            break
        }
      })

      setEstimatorData((prev) => ({ ...prev, totalCost: baseCost + addonCost }))
    }
  }, [estimatorData.length, estimatorData.width, estimatorData.material, estimatorData.addons])

  const testimonials = [
    {
      name: "Mike Johnson, Mississauga",
      rating: 5,
      quote:
        "Super Decks Toronto built our composite deck perfectly. Professional team, quality work, completed on time.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Chen, Toronto",
      rating: 5,
      quote: "Excellent service from design to completion. Our new cedar deck is beautiful and exactly what we wanted.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Smith, Brampton",
      rating: 5,
      quote: "Great experience with pergola installation. Fair pricing, skilled workers, and fantastic results.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const services = [
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Composite Decking",
      description: "Premium Trex, TimberTech, and Fiberon composite materials for low-maintenance, long-lasting decks.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Wood Decking",
      description: "Beautiful cedar, Ipe, and pressure-treated lumber options for traditional natural wood aesthetics.",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Pergolas & Gazebos",
      description: "Custom-designed outdoor structures with professional installation for enhanced outdoor living.",
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Pool & Hot Tub Decks",
      description: "Waterproof materials and specialized construction for pool and spa deck installations.",
    },
    {
      icon: <Fence className="h-8 w-8" />,
      title: "Deck Railings",
      description: "Glass, cable, and wire railing options for safety and style with modern design elements.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Deck Lighting",
      description: "LED ambient and security lighting options to extend your deck enjoyment into the evening.",
    },
  ]

  const materials = [
    {
      title: "Composite Decking",
      brands: "Trex, TimberTech, Fiberon",
      description: "Low maintenance, fade resistant, 25-year warranty",
      price: "$25-35/sq ft",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cedar Wood",
      brands: "Premium Western Red Cedar",
      description: "Natural beauty, aromatic, eco-friendly",
      price: "$18-28/sq ft",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ipe Wood",
      brands: "Brazilian Hardwood",
      description: "Premium hardwood, 50+ year lifespan, fire resistant",
      price: "$35-50/sq ft",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Pressure Treated",
      brands: "Southern Yellow Pine",
      description: "Budget-friendly, versatile, reliable",
      price: "$12-20/sq ft",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Free consultation and site assessment",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Custom deck design and permit drawings",
      icon: <Blueprint className="h-6 w-6" />,
    },
    {
      number: 3,
      title: "Material Selection",
      description: "Choose from premium decking materials",
      icon: <TreePine className="h-6 w-6" />,
    },
    {
      number: 4,
      title: "Construction",
      description: "Professional installation by licensed team",
      icon: <HammerIcon className="h-6 w-6" />,
    },
    {
      number: 5,
      title: "Quality Control",
      description: "Thorough inspection and finishing",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: 6,
      title: "Warranty",
      description: "Complete project with 5-year warranty",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
  ]

  const galleryProjects = [
    {
      title: "Modern Composite Deck",
      material: "Composite",
      location: "Toronto",
      size: "400 sq ft",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cedar Pool Deck",
      material: "Cedar",
      location: "Mississauga",
      size: "600 sq ft",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Multi-Level Deck",
      material: "Composite",
      location: "Brampton",
      size: "800 sq ft",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Pergola & Deck Combo",
      material: "Cedar",
      location: "Vaughan",
      size: "500 sq ft",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Ipe Hardwood Deck",
      material: "Ipe",
      location: "Toronto",
      size: "350 sq ft",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Rooftop Deck",
      material: "Composite",
      location: "Toronto",
      size: "300 sq ft",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const serviceAreas = [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Burlington",
    "Milton",
    "Ajax",
    "Pickering",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-32 border-b border-primary/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Craft Your Perfect
              <span className="block text-primary">Outdoor Space</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your backyard into a stunning outdoor sanctuary with our premium deck construction and design expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white border-0 text-lg px-10 py-4 shadow-md"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                asChild
              >
                <Link href="/estimator">Get Instant Quote</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Decks Built" },
                { number: "15+", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "30+", label: "Material Options" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-stone-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Explore Our Services</h2>
            <p className="text-xl text-stone-600">Discover what makes us Toronto's premier deck builders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <HammerIcon className="h-12 w-12 text-primary" />,
                title: "Our Services",
                description: "From residential to commercial, we build decks that last",
                href: "/services",
                color: "from-primary to-amber-100",
              },
              {
                icon: <Palette className="h-12 w-12 text-primary" />,
                title: "Premium Materials",
                description: "Choose from the finest composite and wood options",
                href: "/materials",
                color: "from-amber-100 to-primary",
              },
              {
                icon: <Calculator className="h-12 w-12 text-primary" />,
                title: "Deck Estimator",
                description: "Get an instant quote for your dream deck project",
                href: "/estimator",
                color: "from-primary to-amber-100",
              },
              {
                icon: <Users className="h-12 w-12 text-stone-400" />,
                title: "Our Process",
                description: "Learn about our proven construction methodology",
                href: "/process",
                color: "from-amber-100 to-primary",
              },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-stone-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-stone-600 mb-6">{item.description}</CardDescription>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-amber-600 hover:bg-amber-100 group-hover:translate-x-1 transition-transform"
                    asChild
                  >
                    <Link href={item.href}>
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Recent Projects</h2>
            <p className="text-xl text-stone-600">See our latest deck construction masterpieces</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Modern Composite Oasis",
                location: "Toronto",
                image: "/images/modernoasis.jpg",
              },
              {
                title: "Cedar Pool Deck Paradise",
                location: "Mississauga",
                image: "/images/cedarpooldeckparadise.jpg",
              },
              {
                title: "Multi-Level Entertainment Hub",
                location: "Vaughan",
                image: "/images/Multi-level-entertainment-deck.jpg",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
                    <p className="text-white">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              asChild
            >
              <Link href="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50 text-stone-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Deck?</h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-0 text-lg px-8 py-3"
              asChild
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="tel:647-111-1111">Call (647) 111-1111</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
