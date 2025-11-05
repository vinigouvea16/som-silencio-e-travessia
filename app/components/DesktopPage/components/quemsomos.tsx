import Image from 'next/image'
import React from 'react'

export default function QuemSomos() {
  return (
    <div className="min-h-[80vh] my-7 flex flex-col items-center bg-cream">
      <div className="flex flex-col my-auto items-center">
        <span className="text-brown-dark font-thin tracking-widest font-family-arizona-flare text-xl uppercase">
          som, silêncio e travessia
        </span>
        <div className="flex flex-col relative items-center bg-white w-[304px] h-[304px]">
          <Image
            src={'/quemsomos.webp'}
            alt={
              'imagem de uma folha de bananeira flutuando sobre a água de uma lagoa'
            }
            width={134}
            height={134}
            className="object-cover my-auto w-[167px] h-[167px]"
          />
          <h1 className="text-brown-dark font-family-arizona-sans text-nowrap text-6xl font-bold tracking-[-0.07em] -bottom-6 absolute">
            Quem somos
          </h1>
        </div>
        <p className="text-brown-dark mt-12 font-light mx-14 text-xl text-justify font-family-arizona-sans max-w-[304px] ">
          Uma <span className="font-bold">equipe multidisciplinar</span> de
          facilitadores que oferece um programa integrativo de{' '}
          <span className="font-bold">desenvolvimento</span> e{' '}
          <span className="font-bold">transformação humana</span> através de{' '}
          <span className="font-bold">experiências enteógenas assistidas.</span>
        </p>
      </div>
    </div>
  )
}
