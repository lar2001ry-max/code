import Image from "next/image"
import croco from "@/public/croco.png"

export function CrocodileSmall() {
  return (
    <Image
      src={croco}
      alt="Crocodile"
      width={100}
      height={60}
      className="w-32 h-20 object-contain"
      priority
    />
  )
}

export function CrocodileMedium() {
  return (
    <Image
      src={croco}
      alt="Crocodile"
      width={150}
      height={90}
      className="w-48 h-32 object-contain"
      priority
    />
  )
}

export function CrocodileLarge() {
  return (
    <Image
      src={croco}
      alt="Crocodile"
      width={200}
      height={100}
      className="w-64 h-40 object-contain"
      priority
    />
  )
}