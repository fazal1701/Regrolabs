import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Leaf, Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Wild Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over three decades, Wild Growth Hair Oil has been the trusted choice for individuals seeking natural,
              effective hair care solutions. Our premium formulation combines time-tested ingredients with modern
              science to deliver exceptional results.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">30+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Wild Growth Hair Oil was born from a simple yet powerful vision: to create a natural hair care
                  solution that truly works. Founded by hair care enthusiasts who understood the struggles of
                  maintaining healthy hair, our journey began with extensive research into traditional remedies and
                  natural ingredients.
                </p>
                <p>
                  After years of development and testing, we perfected our unique formula that combines the wisdom of
                  ancient hair care practices with modern scientific understanding. Our commitment to quality and
                  effectiveness has made Wild Growth a household name trusted by families worldwide.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our core values: natural ingredients, proven
                  results, and customer satisfaction. Every bottle of Wild Growth Hair Oil represents our dedication to
                  helping you achieve the healthy, beautiful hair you deserve.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/product-lifestyle.jpg"
                alt="Wild Growth Hair Oil lifestyle"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-bold text-gray-900">Award Winning</p>
                    <p className="text-sm text-gray-600">Formula</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing natural, effective hair care solutions that empower confidence and promote
              healthy hair growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Excellence</h3>
                <p className="text-gray-600">
                  We believe in the power of nature. Our formulations use only the finest natural ingredients, carefully
                  selected for their proven benefits to hair health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every batch undergoes rigorous testing to ensure consistency, purity, and effectiveness. We never
                  compromise on quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're dedicated to providing exceptional products and outstanding
                  customer service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/product-benefits.jpg"
                alt="Wild Growth Hair Oil benefits"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Wild Growth?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Hair Growth Formula</h3>
                    <p className="text-gray-600">
                      Our unique blend of natural oils and nutrients has been scientifically formulated to stimulate
                      hair follicles and promote healthy growth from root to tip.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Purpose Application</h3>
                    <p className="text-gray-600">
                      Not just for hair! Wild Growth works effectively on eyebrows and eyelashes, providing
                      comprehensive beauty enhancement in one product.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Suitable for All Hair Types</h3>
                    <p className="text-gray-600">
                      Whether you have curly, straight, thick, or fine hair, our formula is gentle yet effective for all
                      hair types and textures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast-Acting Results</h3>
                    <p className="text-gray-600">
                      Most customers notice improvements in hair strength and texture within 2-4 weeks of consistent
                      use, with significant growth visible in 6-8 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Premium Natural Ingredients</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our carefully selected blend of natural oils and nutrients work synergistically to nourish, strengthen,
              and promote healthy hair growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Jojoba Oil</h3>
                <p className="text-sm text-gray-600">Moisturizes and strengthens hair follicles</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Coconut Oil</h3>
                <p className="text-sm text-gray-600">Penetrates deeply to nourish and protect</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Olive Oil</h3>
                <p className="text-sm text-gray-600">Rich in vitamins and antioxidants</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Vitamin E</h3>
                <p className="text-sm text-gray-600">Promotes circulation and hair growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How to Use Wild Growth Hair Oil</h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to maximize the benefits of your Wild Growth Hair Oil treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply</h3>
                <p className="text-gray-600">
                  Apply a small amount to clean, damp hair, focusing on the scalp and roots. Massage gently with
                  fingertips.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Massage</h3>
                <p className="text-gray-600">
                  Gently massage the oil into your scalp for 2-3 minutes to stimulate blood circulation and promote
                  absorption.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Style</h3>
                <p className="text-gray-600">
                  Style as usual. For best results, use 2-3 times per week. Can be left in overnight for intensive
                  treatment.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
                  <p className="text-gray-600">
                    For maximum effectiveness, apply Wild Growth Hair Oil to slightly damp hair before bedtime and wash
                    out in the morning. This allows the nutrients to penetrate deeply while you sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              We're so confident in the effectiveness of Wild Growth Hair Oil that we offer a full 30-day money-back
              guarantee. If you're not completely satisfied with your results, simply return the product for a full
              refund - no questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">✓</div>
                <p className="text-green-100">30-Day Trial Period</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">✓</div>
                <p className="text-green-100">Full Money-Back</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">✓</div>
                <p className="text-green-100">No Questions Asked</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
