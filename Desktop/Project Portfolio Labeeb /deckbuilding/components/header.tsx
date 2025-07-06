"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Materials", href: "/materials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Process", href: "/process" },
    { name: "Estimator", href: "/estimator" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-green-600">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo.jpg" alt="Toronto Deck Co. Logo" width={88} height={88} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-black hover:text-green-600 transition-colors font-medium ${
                  pathname === item.href ? "text-green-600 underline underline-offset-4" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-black">
              <Phone className="h-4 w-4 text-green-600" />
              <span className="font-medium">(647) 111-1111</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white border-0 shadow-md">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-black hover:text-green-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-white border-green-600">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center">
                  <div className="h-10 w-40 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-sm font-bold text-white">SUPER DECKS TO</span>
                  </div>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-black hover:text-green-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center space-x-2 text-black">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="font-medium">(647) 111-1111</span>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 text-white border-0 w-full">
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
