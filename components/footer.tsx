"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🐊 CROCO BARBERSHOP</h3>
            <p className="text-primary-foreground/70">Premium barbering with creative artistic designs.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#portfolio" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/croco_barbershop48?igsh=MXY3MDVkeWtlOXJn&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition flex items-center gap-2"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-primary-foreground/50">© 2025 Croco Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
