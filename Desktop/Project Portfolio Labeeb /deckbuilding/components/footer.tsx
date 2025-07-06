import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-stone-100 text-stone-800 py-16 border-t-4 border-primary relative overflow-hidden">
      {/* Subtle sand texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-50 to-amber-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center">
              <Image 
                src="/images/logo.jpg" 
                alt="Toronto Deck Co. Logo" 
                width={64} 
                height={64} 
                className="rounded-lg shadow-lg border-2 border-primary bg-white p-1" 
              />
              <span className="ml-3 text-lg font-bold tracking-wide text-primary">
                Toronto Deck Co.
              </span>
            </div>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Premium deck construction and design services in Toronto and GTA
            </p>
            <div className="space-y-3 text-stone-600">
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">Toronto, Ontario</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">(647) 111-1111</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">info@superdecksto.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary text-lg border-b border-primary/20 pb-2">
              Services
            </h3>
            <ul className="space-y-2 text-stone-600">
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Residential Decks
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Commercial Decks
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Pool Decks
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Rooftop Decks
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Pergolas & Gazebos
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Deck Railings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary text-lg border-b border-primary/20 pb-2">
              Materials
            </h3>
            <ul className="space-y-2 text-stone-600">
              <li>
                <Link 
                  href="/materials" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Trex Composite
                </Link>
              </li>
              <li>
                <Link 
                  href="/materials" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  TimberTech
                </Link>
              </li>
              <li>
                <Link 
                  href="/materials" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Azek PVC
                </Link>
              </li>
              <li>
                <Link 
                  href="/materials" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Cedar Wood
                </Link>
              </li>
              <li>
                <Link 
                  href="/materials" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Ipe Hardwood
                </Link>
              </li>
              <li>
                <Link 
                  href="/materials" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Fiberon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary text-lg border-b border-primary/20 pb-2">
              Company
            </h3>
            <ul className="space-y-2 text-stone-600">
              <li>
                <Link 
                  href="/gallery" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/process" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/estimator" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Deck Estimator
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary hover:pl-2 transition-all duration-200 block py-1"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 mt-8 bg-gradient-to-r from-stone-50 to-amber-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-600 text-sm mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} Toronto Deck Co. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="#" 
                className="text-stone-600 hover:text-primary text-sm transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-stone-600 hover:text-primary text-sm transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="text-stone-600 hover:text-primary transition-all duration-200 p-2 rounded-full hover:bg-primary/10"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-stone-600 hover:text-primary transition-all duration-200 p-2 rounded-full hover:bg-primary/10"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
