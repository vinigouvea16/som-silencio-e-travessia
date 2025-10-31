import React from 'react'

export default function Convite() {
  return (
    <div className="flex flex-col h-lvh items-center bg-[url('../public/img02.png')] bg-center bg-cover gap-4">
      <h1 className="mt-32 text-cream font-family-arizona-flare mx-auto font-bold text-5xl tracking-tighter">
        Para quem é
        <br />
        essa imersão?
      </h1>
      <p className="text-justify text-cream max-w-[220px] font-light font-family-arizona-sans text-base">
        Para{' '}
        <span className="underline underline-offset-1 font-bold">
          buscadores de si,
        </span>{' '}
        para quem deseja trabalhar questões emocionais profundas, para quem está
        pronto escutar o corpo, silenciar a mente e ampliar a percepção com
        suporte, ciência e ancestralidade.
      </p>
    </div>
  )
}
