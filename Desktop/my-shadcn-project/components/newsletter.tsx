"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get 15% Off Your First Order</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, hair care tips, and be the first to know about new
            products.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white border-0 h-12"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-green-100 mt-3">
                No spam, unsubscribe at any time. By subscribing, you agree to our privacy policy.
              </p>
            </form>
          ) : (
            <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-2">Thank you for subscribing!</h3>
              <p className="text-green-100">Check your email for your 15% discount code.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
