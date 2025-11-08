"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import croco from "@/public/croco.png"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Image src={croco} alt="Crocodile logo" width={40} height={40} className="object-contain" />
            CROCO BARBERSHOP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#portfolio" className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <a
              href="https://wa.me/1234567890?text=I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover-scale"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="#portfolio"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <a
   href="https://wa.me/212653029096?text=Hi%20Croco%20BarberShop!%20I'd%20like%20to%20book%20an%20appointment."                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
