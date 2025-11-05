import Image from 'next/image'
import React from 'react'

export default function Local2() {
  return (
    <div className="h-lvh flex flex-col bg-[url('../public/local2.webp')] bg-center bg-cover items-center justify-between py-32">
      <div className=" flex flex-col gap-2 text-center items-center">
        <span className="font-medium bg-[#363E25] px-1 rounded-sm w-fit text-cream-light tracking-wider text-xl">
          28, 29 e 30 de novembro
        </span>
        <h1 className="text-cream tracking-wide font-family-arizona-flare text-4xl uppercase text-center">
          som, silêncio
          <br /> <span className="font-bold italic">e travessia</span>
        </h1>
      </div>
      <a
        href="#form"
        className="uppercase rounded-sm font-medium text-brown-dark bg-cream-light text-xl tracking-tight px-2 py-1 font-family-arizona-flare"
      >
        Pedir mais informações
      </a>
    </div>
  )
}
