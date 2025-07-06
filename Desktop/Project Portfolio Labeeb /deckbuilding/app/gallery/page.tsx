"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, MapPin, Ruler } from "lucide-react"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const filters = [
    "All Projects",
    "Composite Decks",
    "Wood Decks",
    "Pool Decks",
    "Multi-Level",
    "Pergolas",
    "Rooftop Decks",
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Composite Oasis",
      category: "Composite Decks",
      material: "Trex Composite",
      location: "Toronto",
      size: "450 sq ft",
      image: "/images/modernoasis.jpg",
      description: "Sleek composite deck with integrated lighting and glass railings",
    },
    {
      id: 2,
      title: "Cedar Pool Paradise",
      category: "Pool Decks",
      material: "Western Red Cedar",
      location: "Mississauga",
      size: "680 sq ft",
      image: "/images/cedarpooldeckparadise.jpg",
      description: "Natural cedar pool deck with built-in seating and pergola",
    },
    {
      id: 3,
      title: "Multi-Level Entertainment Hub",
      category: "Multi-Level",
      material: "TimberTech Composite",
      location: "Vaughan",
      size: "850 sq ft",
      image: "/images/Multi-level-entertainment-deck.jpg",
      description: "Two-tier deck system with dining and lounge areas",
    },
    {
      id: 4,
      title: "Rooftop Urban Retreat",
      category: "Rooftop Decks",
      material: "Azek PVC",
      location: "Toronto",
      size: "320 sq ft",
      image: "/images/Rooftop-urban-retreat.jpg",
      description: "City rooftop deck with wind screens and planters",
    },
    {
      id: 5,
      title: "Ipe Hardwood Luxury",
      category: "Wood Decks",
      material: "Ipe Hardwood",
      location: "Richmond Hill",
      size: "520 sq ft",
      image: "/images/IpeHardwoodFlooring.jpg",
      description: "Premium Ipe deck with custom cable railings",
    },
    {
      id: 6,
      title: "Pergola Garden Deck",
      category: "Pergolas",
      material: "Cedar & Composite",
      location: "Markham",
      size: "600 sq ft",
      image: "/images/pergolagardendeck.jpg",
      description: "Composite deck with cedar pergola and climbing plants",
    },
    {
      id: 7,
      title: "Spa Deck Sanctuary",
      category: "Pool Decks",
      material: "Fiberon Composite",
      location: "Brampton",
      size: "380 sq ft",
      image: "/images/spadecksanctuary.jpg",
      description: "Hot tub deck with privacy screens and ambient lighting",
    },
    {
      id: 8,
      title: "Contemporary Composite",
      category: "Composite Decks",
      material: "Trex Transcend",
      location: "Oakville",
      size: "720 sq ft",
      image: "/images/contemporycompositedeck.jpg",
      description: "Large composite deck with built-in planters and seating",
    },
    {
      id: 9,
      title: "Curved Cedar Masterpiece",
      category: "Wood Decks",
      material: "Western Red Cedar",
      location: "Burlington",
      size: "640 sq ft",
      image: "/images/curvedcedardeck.jpg",
      description: "Custom curved cedar deck with artistic railing design",
    },
  ]

  const filteredProjects =
    activeFilter === "All Projects" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Deck Design Gallery
              <span className="block text-primary">Past Construction Realizations</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Look at our past deck construction projects for ideas and deck designs to help plan your project
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-white border-0"
                    : "border-primary text-primary hover:bg-amber-50 bg-transparent"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-500">
                      <Ruler className="h-4 w-4 mr-2 text-teal-600" />
                      <span className="font-medium text-slate-700">{project.material}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                      <span>
                        {project.location} • {project.size}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Inspired by What You See?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create something unique for your space. Every project is custom-designed to match your vision and
            lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0"
              asChild
            >
              <a href="/contact">Start Your Project</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              asChild
            >
              <a href="/estimator">Get Estimate</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
