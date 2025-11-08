"use client"

import Image from "next/image"
import machine from "@/public/machine.svg"
import { CrocodileSmall, CrocodileMedium, CrocodileLarge } from "./crocodile-decoration"

const services = [
  {
    title: "Classic Haircuts",
    description: "Timeless precision cuts that deliver clean fades, sharp edges, and a flawless finish every time",
  },
  {
    title: "Modern Haircuts",
    description: "Trendy cuts tailored to your personality — fresh styles, smooth fades, and bold creativity",
  },
  {
    title: "Haircut with Lines",
    description: "Clean, sharp lines and creative patterns for a bold, standout look",
  },
  {
    title: "All Styles",
    description: "From classic to contemporary, we master every look with precision and confidence",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden croco-texture">
      <div className="absolute top-10 right-10">
        <CrocodileMedium />
      </div>
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Croco BarberShop Services</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Comprehensive barbering services tailored to bring out your best look
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <div key={index} className="bg-background rounded-lg p-8 text-center hover-scale group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                    <Image src={machine} alt="Haircut machine icon" width={32} height={32} className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
