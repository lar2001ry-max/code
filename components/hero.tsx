"use client"

import Image from "next/image"
import croco from "@/public/croco.png"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden croco-texture">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src={croco}
          alt="Crocodile background"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">Welcome to Croco BarberShop</h1>
          <p className="text-xl md:text-2xl text-primary mb-8 max-w-2xl mx-auto text-balance">
            Where Precision Meets Artistic Design - Premium Cuts with Creative Flair
          </p>
          <a
            href="https://wa.me/212653029096?text=Hi%20Croco%20BarberShop!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover-scale"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
