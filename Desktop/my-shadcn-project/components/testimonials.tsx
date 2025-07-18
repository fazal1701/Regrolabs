import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    text: "I've been using Wild Growth Hair Oil for 3 months and the results are incredible! My hair is stronger, shinier, and growing faster than ever.",
  },
  {
    name: "Maria Rodriguez",
    location: "Los Angeles, CA",
    rating: 5,
    text: "This product is a game-changer! Not only did it help my hair grow, but it also made my eyebrows fuller. I can't recommend it enough.",
  },
  {
    name: "Ashley Chen",
    location: "Chicago, IL",
    rating: 5,
    text: "After trying countless products, Wild Growth finally delivered results. My hair feels healthier and looks amazing. Worth every penny!",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their hair with Wild Growth Hair Oil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-green-600" />

                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.text}"</p>

                  <div className="pt-4 border-t text-center">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
