"use client"

import Image from "next/image"
import { CrocodileSmall, CrocodileMedium } from "./crocodile-decoration"

const works = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8472.JPG-k28uqSMtDQ0A0ocDoR5OUb53OayxHT.jpeg",
    title: "Precision Fade",
    description: "Classic fade with clean lines",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8556.JPG-ox8PSnn6OtCDCMKajnv9F90JpuROLw.jpeg",
    title: "Textured Taper",
    description: "Modern textured top with sharp taper",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8627.JPG-6999u8jNbPuXGGApDaAjZF0Y6AUXsi.jpeg",
    title: "Artistic Design",
    description: "Lightning bolt design carving",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8638.JPG-n1d18DUR8tpxa65CgnSvR8p2jEhpCY.jpeg",
    title: "Studio Session",
    description: "Behind the scenes at our shop",
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8565.PNG-ykoMNUrlJreBRcKGJ4Og4NOtXZplmh.jpeg",
    title: "Curved Lines",
    description: "Smooth curved design work",
  },
  {
    id: 6,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8580.JPG-fIqRqc7bfFKsDpEEOpF2R94QiDYwAI.jpeg",
    title: "Outdoor Showcase",
    description: "Perfect finish in natural light",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
     
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Work Speaks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every cut is a masterpiece. See what our clients are saying with their fresh looks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{work.title}</h3>
                <p className="text-primary-foreground/80">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
