"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Plus, Minus, Truck, Shield, Clock } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

const product = {
  id: "wild-growth-hair-oil",
  name: "Wild Growth Hair Oil",
  price: 24.99,
  description: "Premium natural hair oil for growth, strengthening, and comprehensive hair care",
  benefits: [
    "Promotes natural hair growth",
    "Strengthens hair from root to tip",
    "Works on hair, eyebrows & eyelashes",
    "100% natural ingredients",
    "Suitable for all hair types",
    "Non-greasy, fast-absorbing formula",
  ],
  rating: 4.8,
  reviews: 1247,
  images: [
    "/images/product-detail.jpg",
    "/images/product-benefits.jpg",
    "/images/product-lifestyle.jpg",
    "/images/product-showcase.jpg",
    "/images/hero-model.jpg",
  ],
}

export function ProductShowcase() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    })
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={`${product.name} - View ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-green-600" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">${product.price}</div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Truck className="h-4 w-4" />
                  <span>Estimated delivery: 2 weeks</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Free shipping on orders over $100 • $5.99 shipping under $100</p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Key Benefits:</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => updateQuantity(-1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
                  <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => updateQuantity(1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                onClick={handleAddToCart}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">30-Day</p>
                <p className="text-xs text-gray-600">Money Back</p>
              </div>
              <div className="text-center">
                <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Fast Shipping</p>
                <p className="text-xs text-gray-600">2 Week Delivery</p>
              </div>
              <div className="text-center">
                <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                <p className="text-xs text-gray-600">Customer Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
