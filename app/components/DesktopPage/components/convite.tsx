import Image from 'next/image'
import React from 'react'

export default function Convite() {
  return (
    <div className="flex flex-col items-center gap-4 my-12 min-h-[80vh]">
      <h1 className=" text-brown-dark font-family-arizona-flare mx-auto font-bold text-5xl tracking-tighter">
        Para quem é
        <br />
        essa imersão?
      </h1>
      <p className="text-justify text-brown-dark max-w-[263px] font-light font-family-arizona-sans text-base">
        Para{' '}
        <span className="underline underline-offset-2 font-bold">
          buscadores de si,
        </span>{' '}
        para quem deseja trabalhar questões emocionais profundas, para quem está
        pronto escutar o corpo, silenciar a mente e ampliar a percepção com
        suporte, ciência e ancestralidade.
      </p>
      <Image
        src={'/img02.webp'}
        alt={''}
        width={263}
        height={478}
        className="w-[263px] h-[478px] object-cover object-center"
      />
    </div>
  )
}
