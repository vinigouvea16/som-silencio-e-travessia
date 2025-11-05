import { facilitadores } from '@/app/data/facilitadores'
import Image from 'next/image'
import React from 'react'
import Spiral from '../../icons/spiral'

export default function Equipe1() {
  const visionarios = facilitadores.slice(1, 4)

  const renderRole = (role: string) => {
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    return <span dangerouslySetInnerHTML={{ __html: role }} />
  }

  return (
    <div className="flex flex-col items-center py-10 relative">
      {/* Header */}
      <div className="flex w-full font-light justify-between font-family-arizona-flare px-5 mb-12">
        <p className="uppercase text-sm">Som, silêncio e travessia</p>
        <p className="uppercase text-sm">los niños || Brainstorm</p>
      </div>

      {/* Título */}
      <h1 className="text-brown-dark text-center font-family-arizona-sans text-[64px] leading-none font-bold tracking-tighter mb-16">
        Visionários e <br />
        <span className="text-tan italic">facilitadores</span>
      </h1>

      <Spiral
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/5 z-0"
        size={390}
      />

      {/* Grid de 3 colunas com texto no meio */}
      <div className="flex gap-5 items-start relative z-10">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-3 w-[222px]">
          <div className="aspect-square w-[222px] h-[222px] bg-tan flex items-center justify-center">
            <Image
              src={visionarios[0].photoUrl}
              alt={visionarios[0].name}
              width={147}
              height={147}
              className="w-[147px] h-[147px] object-cover"
            />
          </div>
          <h3 className="uppercase font-family-arizona-sans text-xl text-center font-medium tracking-tighter text-brown-dark">
            {visionarios[0].name}
          </h3>
          <p className="font-family-arizona-sans tracking-tighter text-brown-dark text-center">
            {renderRole(visionarios[0].role)}
          </p>
          <p className="font-family-arizona-sans  text-brown-dark/90 font-thin text-justify tracking-tight ">
            {visionarios[0].description}
          </p>
        </div>

        {/* Coluna 2 (com texto no topo) */}
        <div className="flex flex-col gap-3 w-[222px]">
          {/* Texto que fica no topo da coluna do meio */}
          <p className="uppercase text-center font-family-arizona-sans tracking-tight h-[222px] flex items-center justify-center">
            nossa equipe
            <br />
            multidisciplinar
            <br />e integrativa
          </p>

          <div className="aspect-square w-[222px] h-[222px] bg-tan flex items-center  justify-center">
            <Image
              src={visionarios[1].photoUrl}
              alt={visionarios[1].name}
              width={147}
              height={147}
              className="w-[147px] h-[147px] object-cover"
            />
          </div>
          <h3 className="uppercase font-family-arizona-sans text-xl text-center font-medium tracking-tighter text-brown-dark">
            {visionarios[1].name}
          </h3>
          <p className="font-family-arizona-sans tracking-tighter text-center text-brown-dark">
            {renderRole(visionarios[1].role)}
          </p>
          <p className="font-family-arizona-sans  text-brown-dark/90 font-thin text-justify tracking-tight ">
            {visionarios[1].description}
          </p>
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col gap-3 w-[222px]">
          <div className="aspect-square w-[222px] h-[222px] bg-tan flex items-center justify-center">
            <Image
              src={visionarios[2].photoUrl}
              alt={visionarios[2].name}
              width={147}
              height={147}
              className="w-[147px] h-[147px] object-cover"
            />
          </div>
          <h3 className="uppercase font-family-arizona-sans text-center text-lg font-medium tracking-tighter text-brown-dark">
            {visionarios[2].name}
          </h3>
          <p className="font-family-arizona-sans tracking-tighter text-center text-brown-dark">
            {renderRole(visionarios[2].role)}
          </p>
          <p className="font-family-arizona-sans  text-brown-dark/90 font-thin text-justify tracking-tight ">
            {visionarios[2].description}
          </p>
        </div>
      </div>
    </div>
  )
}
