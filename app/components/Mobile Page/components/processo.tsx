import Image from 'next/image'
import React from 'react'

export default function Processo() {
  return (
    <div className="h-lvh flex flex-col bg-[url('../public/how.png')] relative bg-center bg-cover">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="flex justify-between items-baseline w-full px-8 absolute top-[10%] z-10">
        <Image src={'/losninos.png'} alt={''} width={104} height={21} />
        <Image src={'/brain.png'} alt={''} width={59} height={26} />
      </div>
      <div className="absolute w-full top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 text-left ml-6 z-10">
        <h1 className="text-cream text-4xl font-family-arizona-flare font-medium tracking-[-0.07em]">
          Durante{' '}
          <span className="underline underline-offset-1">três dias</span>,<br />{' '}
          você será guiado <br />
          por um time experiente, <br />
          que une:
        </h1>
        <ul className="font-family-arizona-flare mb-11 text-2xl text-cream space-y-3">
          <li className="gap-2 flex items-center">
            ✓<p className="text-xl tracking-tighter">neurociência</p>
          </li>
          <li className="gap-2 flex items-center">
            ✓<p className="text-xl tracking-tighter">práticas terapêuticas</p>
          </li>
          <li className="gap-2 flex items-center">
            ✓
            <p className="text-xl tracking-tighter">
              sound healing e arte integrativa
            </p>
          </li>
          <li className="gap-2 flex items-center">
            ✓
            <p className="text-xl tracking-tighter">
              integração emocional e corporal
            </p>
          </li>
          <li className="gap-2 flex items-center">
            ✓
            <p className="text-xl tracking-tighter">
              sessões terapêuticas pré e pós experiência
            </p>
          </li>
        </ul>
        <a
          href="#form"
          className="uppercase rounded-sm font-medium text-brown-dark font-family-arizona-flare bg-cream-light text-xl px-2 py-1 w-fit mx-auto"
        >
          ressignificar
        </a>
      </div>
    </div>
  )
}
