import React from 'react'

export default function Integrar() {
  return (
    <div className="flex flex-col h-lvh items-center bg-[url('../public/integrar.webp')] bg-center bg-cover gap-14 ">
      <div className="mt-16 text-cream mx-8 font-thin gap-5 flex items-center">
        <h1 className="font-medium text-5xl w-1/2 text-right tracking-tight font-family-arizona-flare-compressed">
          <span className="italic">Integrar</span>
          <br />é consolidar{' '}
          <span className="font-bold">
            {/* <br /> */}
            por dentro
          </span>
        </h1>
        <p className="font-medium tracking-tight w-1/2 text-base leading-5 font-family-arizona-flare">
          Som, Silêncio e <span className="italic">Travessia</span>
          <br /> é uma imersão que mescla o conhecimento científico aos sabores
          ancestrais
        </p>
      </div>
      <div className="flex flex-col w-2/3 text-justify gap-2 leading-5 max-w-[260px]">
        <p className="text-cream-light font-family-arizona-flare">
          Uma experiência com enteogenia terapêutica, práticas de expansão de
          consciência, arte, som, escuta e reconexão. Um espaço seguro com
          suporte de uma equipe multidisciplinar para guiar sua experiência com
          presença, direção e integração.
          <br />
          <br />
          Acreditamos que, sem integração, nos afastamos das mudanças que tanto
          buscamos sem entender os porquês.
        </p>
      </div>
    </div>
  )
}
