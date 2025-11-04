import React from 'react'

export default function Estudo() {
  return (
    <div className="flex flex-col h-lvh items-center bg-[url('../public/psilo.JPG')] bg-center bg-cover gap-14">
      <div className="mt-16 text-cream-light font-family-arizona-sans mx-auto font-thin w-4/5 text-base tracking-tight uppercase text-justify gap-4 flex flex-col">
        <p className="">
          um estudo publicado na prestigiada{' '}
          <span className="italic">revista Psychopharmacology (2006),</span> e
          republicado por diversas pesquisas nos anos seguintes, revelou que
          mais de <span className="font-bold">60% dos participantes</span> que{' '}
          <span className="font-bold">
            vivenciaram a psilocibina em ambiente controlado
          </span>{' '}
          classificaram a experiência como{' '}
          <span className="font-bold">
            uma das mais significativas de toda a vida
          </span>{' '}
          - comparável ao nascimento de um filho ou à perda de um ente querido.
        </p>
        <p className="font-bold">
          entre eles, 30% a 40%, afirmaram ter vivido a{' '}
          <span className="underline">
            experiência mais significativa de todas.
          </span>
        </p>
      </div>
      <a
        href="#form"
        className="uppercase rounded-sm font-medium text-brown-dark bg-cream-light text-lg tracking-tighter px-2 py-1"
      >
        resignificar e me inscrever
      </a>
    </div>
  )
}
