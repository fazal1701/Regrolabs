import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  MessageSquare,
  PenTool,
  Calculator,
  FileText,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function ProcessPage() {
  const processSteps = [
    {
      number: 1,
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Consultation",
      duration: "1-2 hours",
      description: "We start with a comprehensive consultation to understand your vision, needs, and budget",
      details: [
        "Site assessment and measurements",
        "Discussion of design preferences",
        "Budget and timeline planning",
        "Material recommendations",
        "Initial concept sketches",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      icon: <PenTool className="h-8 w-8" />,
      title: "Deck Design and Material Choices",
      duration: "3-5 days",
      description: "Our designers create detailed plans and help you select the perfect materials",
      details: [
        "3D design renderings",
        "Material samples and selection",
        "Structural engineering plans",
        "Color and finish options",
        "Accessory recommendations",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      number: 3,
      icon: <Calculator className="h-8 w-8" />,
      title: "Deck Construction Estimate",
      duration: "1-2 days",
      description: "Detailed cost breakdown with transparent pricing for all aspects of your project",
      details: [
        "Itemized material costs",
        "Labor and installation fees",
        "Permit and inspection costs",
        "Timeline and milestones",
        "Payment schedule options",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      number: 4,
      icon: <FileText className="h-8 w-8" />,
      title: "Proposal and Contract",
      duration: "2-3 days",
      description: "Formal proposal with detailed contract terms and project specifications",
      details: [
        "Comprehensive project scope",
        "Material specifications",
        "Construction timeline",
        "Terms and conditions",
        "Change order procedures",
      ],
      color: "from-rose-500 to-rose-600",
    },
    {
      number: 5,
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Project Warranty",
      duration: "Ongoing",
      description: "Comprehensive warranty coverage for materials and workmanship",
      details: [
        "Workmanship guarantee",
        "Material warranty transfer",
        "Annual maintenance reminders",
        "Priority service calls",
        "Documentation and certificates",
      ],
      color: "from-amber-500 to-amber-600",
    },
    {
      number: 6,
      icon: <FileCheck className="h-8 w-8" />,
      title: "Deck Building Permit",
      duration: "1-3 weeks",
      description: "We handle all permit applications and inspections for code compliance",
      details: [
        "Permit application submission",
        "Building code compliance",
        "Inspection scheduling",
        "Municipal approvals",
        "Final occupancy permits",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-20 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Proven
              <span className="block text-primary">Construction Process</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              From initial consultation to final inspection, we guide you through every step
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-slate-300 to-slate-200 hidden md:block"></div>
                )}

                <Card className="mb-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <Badge variant="outline" className="text-slate-600">
                            Step {step.number}
                          </Badge>
                          <Badge className="bg-slate-100 text-slate-600">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-slate-900 mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-slate-600 text-lg">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="ml-22">
                      <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 bg-[color:var(--secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[color:var(--foreground)] mb-4">Why Our Process Works</h2>
            <p className="text-xl text-[color:var(--muted-foreground)]">Proven methodology that delivers exceptional results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Transparent Communication",
                description: "Regular updates and clear communication throughout every phase",
                icon: "💬",
              },
              {
                title: "Quality Assurance",
                description: "Multiple checkpoints ensure the highest standards are maintained",
                icon: "✅",
              },
              {
                title: "On-Time Delivery",
                description: "Structured timeline management keeps your project on schedule",
                icon: "⏰",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-slate-50">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-slate-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[color:var(--primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Deck Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's begin with a consultation to discuss your vision and start the process
          </p>
          <Button size="lg" className="bg-white text-[color:var(--primary)] hover:bg-[color:var(--secondary)] text-lg px-8 py-3 border border-[color:var(--primary)]" asChild>
            <Link href="/contact">
              Schedule Consultation <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
