import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="h-lvh flex flex-col bg-[url('../public/img01.png')] bg-center bg-cover">
      <div className="absolute w-full top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 text-center">
        <span className="font-medium text-cream-light tracking-wider text-lg">
          28, 29 e 30 de novembro
        </span>
        <h1 className="text-cream tracking-wide font-family-arizona-flare text-4xl uppercase text-center">
          som, silêncio
          <br /> <span className="font-bold italic">e travessia</span>
        </h1>
        <h2 className="text-cream-light/90 font-light font-family-arizona-sans uppercase text-xs underline underline-offset-1">
          imersão integrativa enteógena
        </h2>
      </div>
      <div className="flex justify-between items-baseline w-full px-8 absolute bottom-[10%]">
        <Image src={'/losninos.png'} alt={''} width={104} height={21} />
        <Image src={'/brain.png'} alt={''} width={59} height={26} />
      </div>
    </div>
  )
}
