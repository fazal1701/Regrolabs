"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calculator, ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react"

export default function EstimatorPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [estimatorData, setEstimatorData] = useState({
    length: "",
    width: "",
    height: "standard",
    shape: "rectangular",
    material: "",
    railings: false,
    lighting: false,
    pergola: false,
    seating: false,
    stairs: false,
    totalCost: 0,
    breakdown: {
      base: 0,
      railings: 0,
      lighting: 0,
      pergola: 0,
      seating: 0,
      stairs: 0,
    },
  })

  // Calculate estimate
  useEffect(() => {
    if (estimatorData.length && estimatorData.width && estimatorData.material) {
      const area = Number.parseFloat(estimatorData.length) * Number.parseFloat(estimatorData.width)
      let baseCostPerSqFt = 0

      // Material costs
      switch (estimatorData.material) {
        case "trex":
          baseCostPerSqFt = 33
          break
        case "timbertech":
          baseCostPerSqFt = 30
          break
        case "azek":
          baseCostPerSqFt = 36
          break
        case "fiberon":
          baseCostPerSqFt = 27
          break
        case "cedar":
          baseCostPerSqFt = 23
          break
        case "ipe":
          baseCostPerSqFt = 46
          break
      }

      // Height multiplier
      let heightMultiplier = 1
      switch (estimatorData.height) {
        case "low":
          heightMultiplier = 0.9
          break
        case "high":
          heightMultiplier = 1.3
          break
      }

      // Shape multiplier
      let shapeMultiplier = 1
      if (estimatorData.shape === "curved" || estimatorData.shape === "multi-level") {
        shapeMultiplier = 1.4
      } else if (estimatorData.shape === "octagonal") {
        shapeMultiplier = 1.2
      }

      const baseCost = area * baseCostPerSqFt * heightMultiplier * shapeMultiplier

      // Add-on costs
      const perimeter = (Number.parseFloat(estimatorData.length) + Number.parseFloat(estimatorData.width)) * 2
      const railingsCost = estimatorData.railings ? perimeter * 35 : 0
      const lightingCost = estimatorData.lighting ? 500 : 0
      const pergolaCost = estimatorData.pergola ? 3500 : 0
      const seatingCost = estimatorData.seating ? 1200 : 0
      const stairsCost = estimatorData.stairs ? 800 : 0

      const breakdown = {
        base: baseCost,
        railings: railingsCost,
        lighting: lightingCost,
        pergola: pergolaCost,
        seating: seatingCost,
        stairs: stairsCost,
      }

      const totalCost = Object.values(breakdown).reduce((sum, cost) => sum + cost, 0)

      setEstimatorData((prev) => ({
        ...prev,
        totalCost,
        breakdown,
      }))
    }
  }, [
    estimatorData.length,
    estimatorData.width,
    estimatorData.material,
    estimatorData.height,
    estimatorData.shape,
    estimatorData.railings,
    estimatorData.lighting,
    estimatorData.pergola,
    estimatorData.seating,
    estimatorData.stairs,
  ])

  const materials = [
    {
      id: "trex",
      name: "Trex Composite",
      price: "$28-38/sq ft",
      description: "Premium composite with 25-year warranty",
    },
    {
      id: "timbertech",
      name: "TimberTech Composite",
      price: "$25-35/sq ft",
      description: "Advanced composite technology",
    },
    { id: "azek", name: "Azek PVC", price: "$30-42/sq ft", description: "100% synthetic, lifetime warranty" },
    { id: "fiberon", name: "Fiberon Composite", price: "$22-32/sq ft", description: "Value composite option" },
    { id: "cedar", name: "Red Cedar", price: "$18-28/sq ft", description: "Natural beauty, requires maintenance" },
    { id: "ipe", name: "Ipe Hardwood", price: "$38-55/sq ft", description: "Premium hardwood, 50+ year lifespan" },
  ]

  const addons = [
    {
      id: "railings",
      name: "Deck Railings",
      price: "+$35/linear ft",
      description: "Safety railings with various style options",
    },
    { id: "lighting", name: "LED Lighting", price: "+$500", description: "Ambient and safety lighting system" },
    {
      id: "pergola",
      name: "Pergola Addition",
      price: "+$3,500",
      description: "Shade structure and architectural element",
    },
    {
      id: "seating",
      name: "Built-in Seating",
      price: "+$1,200",
      description: "Custom bench seating integrated into design",
    },
    { id: "stairs", name: "Deck Stairs", price: "+$800", description: "Professional stair construction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-20 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl font-bold mb-6">
              Virtual Deck
              <span className="block text-primary">Estimator</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Get an instant estimate for your dream deck project in just a few steps
            </p>
          </div>
        </div>
      </section>

      {/* Estimator Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-xl bg-white">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-stone-600">Step {currentStep} of 4</span>
                  <span className="text-sm font-medium text-stone-600">
                    {Math.round((currentStep / 4) * 100)}% Complete
                  </span>
                </div>
                <Progress value={(currentStep / 4) * 100} className="h-3" />
              </div>

              {/* Step 1: Deck Specifications */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Deck Specifications</h2>
                    <p className="text-slate-600">Tell us about your deck dimensions and style</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="length" className="text-base font-medium">
                        Length (feet)
                      </Label>
                      <Input
                        id="length"
                        type="number"
                        placeholder="Enter length"
                        value={estimatorData.length}
                        onChange={(e) => setEstimatorData((prev) => ({ ...prev, length: e.target.value }))}
                        className="mt-2 h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width" className="text-base font-medium">
                        Width (feet)
                      </Label>
                      <Input
                        id="width"
                        type="number"
                        placeholder="Enter width"
                        value={estimatorData.width}
                        onChange={(e) => setEstimatorData((prev) => ({ ...prev, width: e.target.value }))}
                        className="mt-2 h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-base font-medium">Deck Height</Label>
                      <Select
                        value={estimatorData.height}
                        onValueChange={(value) => setEstimatorData((prev) => ({ ...prev, height: value }))}
                      >
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select height" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low (0-2ft) - Ground Level</SelectItem>
                          <SelectItem value="standard">Standard (2-4ft) - Typical Height</SelectItem>
                          <SelectItem value="high">High (4ft+) - Elevated Deck</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-base font-medium">Deck Shape</Label>
                      <Select
                        value={estimatorData.shape}
                        onValueChange={(value) => setEstimatorData((prev) => ({ ...prev, shape: value }))}
                      >
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select shape" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rectangular">Rectangular - Standard</SelectItem>
                          <SelectItem value="square">Square - Equal Sides</SelectItem>
                          <SelectItem value="octagonal">Octagonal - 8-Sided</SelectItem>
                          <SelectItem value="curved">Curved - Custom Shape</SelectItem>
                          <SelectItem value="multi-level">Multi-Level - Tiered Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {estimatorData.length && estimatorData.width && (
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-teal-800 font-medium">
                        Deck Area:{" "}
                        {(Number.parseFloat(estimatorData.length) * Number.parseFloat(estimatorData.width)).toFixed(0)}{" "}
                        sq ft
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Material Selection */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Material Selection</h2>
                    <p className="text-slate-600">Choose your preferred decking material</p>
                  </div>

                  <RadioGroup
                    value={estimatorData.material}
                    onValueChange={(value) => setEstimatorData((prev) => ({ ...prev, material: value }))}
                    className="space-y-4"
                  >
                    {materials.map((material) => (
                      <Card key={material.id} className="cursor-pointer hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4 p-4">
                          <RadioGroupItem value={material.id} id={material.id} />
                          <Label htmlFor={material.id} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-lg text-slate-900">{material.name}</div>
                                <div className="text-slate-600 text-sm">{material.description}</div>
                              </div>
                              <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                                {material.price}
                              </Badge>
                            </div>
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 3: Add-ons */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Add-ons & Features</h2>
                    <p className="text-slate-600">Select additional features for your deck</p>
                  </div>

                  <div className="space-y-4">
                    {addons.map((addon) => (
                      <Card key={addon.id} className="hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4 p-4">
                          <Checkbox
                            id={addon.id}
                            checked={estimatorData[addon.id as keyof typeof estimatorData] as boolean}
                            onCheckedChange={(checked) => {
                              setEstimatorData((prev) => ({ ...prev, [addon.id]: checked }))
                            }}
                          />
                          <Label htmlFor={addon.id} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-lg text-slate-900">{addon.name}</div>
                                <div className="text-slate-600 text-sm">{addon.description}</div>
                              </div>
                              <Badge variant="outline" className="border-teal-600 text-teal-600">
                                {addon.price}
                              </Badge>
                            </div>
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Results */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Deck Estimate</h2>
                    <p className="text-slate-600">Here's your personalized deck cost breakdown</p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl text-center">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
                      ${estimatorData.totalCost.toLocaleString()}
                    </div>
                    <div className="text-slate-600 text-lg mb-2">Estimated Total Cost</div>
                    <div className="text-sm text-slate-500">
                      *This is an estimate. Final pricing may vary based on site conditions and specific requirements.
                    </div>
                  </div>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Breakdown</h3>
                    <div className="space-y-3">
                      {Object.entries(estimatorData.breakdown).map(([key, value]) => {
                        if (value === 0) return null
                        const labels = {
                          base: "Base Deck Construction",
                          railings: "Deck Railings",
                          lighting: "LED Lighting System",
                          pergola: "Pergola Addition",
                          seating: "Built-in Seating",
                          stairs: "Deck Stairs",
                        }
                        return (
                          <div
                            key={key}
                            className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                          >
                            <span className="text-slate-700">{labels[key as keyof typeof labels]}</span>
                            <span className="font-semibold text-slate-900">${value.toLocaleString()}</span>
                          </div>
                        )
                      })}
                    </div>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      size="lg"
                      className="bg-[color:var(--primary)] hover:bg-[color:var(--secondary)] text-white border-0"
                      asChild
                    >
                      <Link href="/contact">
                        <Mail className="h-4 w-4 mr-2" />
                        Request Detailed Quote
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-white bg-transparent"
                      asChild
                    >
                      <Link href="tel:647-111-1111">
                        <Phone className="h-4 w-4 mr-2" />
                        Call (647) 111-1111
                      </Link>
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12 pt-8 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="border-slate-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                    disabled={
                      (currentStep === 1 && (!estimatorData.length || !estimatorData.width)) ||
                      (currentStep === 2 && !estimatorData.material)
                    }
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                  >
                    Start Over
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
