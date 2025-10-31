import Image from 'next/image'
import React from 'react'

export default function QuemSomos() {
  return (
    <div className="h-svh flex flex-col bg-tan">
      <div className="flex flex-col my-auto items-center max-h-[60vh]">
        <span className="text-brown-dark font-light tracking-wider font-family-arizona-flare text-xl uppercase">
          som, silêncio e travessia
        </span>
        <div className="flex flex-col relative items-center bg-cream w-[290px] h-[290px] mx-auto">
          <Image
            src={'/quemsomos.png'}
            alt={
              'imagem de uma folha de bananeira flutuando sobre a água de uma lagoa'
            }
            width={134}
            height={134}
            className="object-bottom-left object-none my-auto w-40 h-40"
          />
          <h1 className="text-brown-dark font-family-arizona-flare text-nowrap text-5xl font-bold tracking-[-0.07em] -bottom-5 absolute uppercase">
            Quem somos
          </h1>
        </div>
        <p className="text-brown-dark mt-12 font-light mx-14 text-lg text-justify font-family-arizona-sans ">
          Uma <span className="font-bold">equipe multidisciplinar</span> de
          facilitadores que oferece um programa integrativo de{' '}
          <span className="font-bold">desenvolvimento</span> e{' '}
          <span className="font-bold">transformação humana</span> através de{' '}
          <span className="font-bold">
            experiências .............. assistidas
          </span>
        </p>
      </div>
    </div>
  )
}
