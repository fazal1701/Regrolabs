"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Upload, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    material: "",
    budget: "",
    timeline: "",
    description: "",
    agreeToContact: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-20 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Contact Us
              <span className="block text-primary">Get Your Free Quote</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Ready to start your deck project? Let's discuss your vision and create something amazing together
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-stone-800">Get In Touch</CardTitle>
                    <CardDescription>Ready to transform your outdoor space?</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Phone</h3>
                        <p className="text-stone-600">(647) 111-1111</p>
                        <p className="text-sm text-stone-500">Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Email</h3>
                        <p className="text-stone-600">info@superdecksto.com</p>
                        <p className="text-sm text-stone-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Service Area</h3>
                        <p className="text-stone-600">Toronto & GTA</p>
                        <p className="text-sm text-stone-500">Serving all of Greater Toronto Area</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Business Hours</h3>
                        <p className="text-stone-600">Mon-Fri: 8AM-6PM</p>
                        <p className="text-stone-600">Sat: 9AM-4PM</p>
                        <p className="text-stone-600">Sun: By appointment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-stone-100 mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-stone-800 mb-2">Quick Response Guarantee</h3>
                    <p className="text-stone-600 text-sm">
                      We respond to all inquiries within 24 hours and offer free consultations for all deck projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-800">Request Your Free Deck Quote</CardTitle>
                  <CardDescription>Tell us about your project and we'll provide a detailed estimate</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-base font-medium">
                          City
                        </Label>
                        <Select
                          value={formData.city}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, city: value }))}
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="toronto">Toronto</SelectItem>
                            <SelectItem value="mississauga">Mississauga</SelectItem>
                            <SelectItem value="brampton">Brampton</SelectItem>
                            <SelectItem value="vaughan">Vaughan</SelectItem>
                            <SelectItem value="markham">Markham</SelectItem>
                            <SelectItem value="richmond-hill">Richmond Hill</SelectItem>
                            <SelectItem value="other">Other GTA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="project-type" className="text-base font-medium">
                          Project Type
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-deck">New Deck Construction</SelectItem>
                            <SelectItem value="deck-replacement">Deck Replacement</SelectItem>
                            <SelectItem value="deck-repair">Deck Repair</SelectItem>
                            <SelectItem value="pergola">Pergola Addition</SelectItem>
                            <SelectItem value="railing">Railing Installation</SelectItem>
                            <SelectItem value="multi-level">Multi-Level Deck</SelectItem>
                            <SelectItem value="pool-deck">Pool/Hot Tub Deck</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="material" className="text-base font-medium">
                          Preferred Material
                        </Label>
                        <Select
                          value={formData.material}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, material: value }))}
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select material preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="composite">Composite (Low Maintenance)</SelectItem>
                            <SelectItem value="cedar">Cedar Wood (Natural)</SelectItem>
                            <SelectItem value="ipe">Ipe Hardwood (Premium)</SelectItem>
                            <SelectItem value="pvc">PVC (Synthetic)</SelectItem>
                            <SelectItem value="no-preference">No Preference (Need Advice)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="budget" className="text-base font-medium">
                          Budget Range
                        </Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                            <SelectItem value="20k-35k">$20,000 - $35,000</SelectItem>
                            <SelectItem value="35k-50k">$35,000 - $50,000</SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline" className="text-base font-medium">
                          Timeline
                        </Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-2-months">1-2 months</SelectItem>
                            <SelectItem value="3-4-months">3-4 months</SelectItem>
                            <SelectItem value="spring">Next Spring</SelectItem>
                            <SelectItem value="summer">Next Summer</SelectItem>
                            <SelectItem value="planning">Just Planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <Label htmlFor="description" className="text-base font-medium">
                        Project Description
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Tell us about your deck project, including size, features, and any specific requirements..."
                        value={formData.description}
                        onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label className="text-base font-medium">Upload Inspiration Photos (Optional)</Label>
                      <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto text-slate-400 mb-2" />
                        <p className="text-slate-600">Drag and drop files here or click to browse</p>
                        <p className="text-sm text-slate-500 mt-1">JPG, PNG, PDF up to 10MB each</p>
                      </div>
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agree"
                        checked={formData.agreeToContact}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, agreeToContact: checked as boolean }))
                        }
                      />
                      <Label htmlFor="agree" className="text-sm text-slate-600 leading-relaxed">
                        I agree to be contacted about my deck project via phone, email, or text message. I understand
                        that this is not a commitment to purchase.
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[color:var(--primary)] hover:bg-[color:var(--secondary)] text-white border-0 text-lg py-4"
                      disabled={!formData.agreeToContact}
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
