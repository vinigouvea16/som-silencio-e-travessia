import React from 'react'

export default function Local() {
  return (
    <div className="flex flex-col h-lvh justify-between items-center bg-[url('../public/local.JPG')] bg-center bg-cover gap-14 ">
      <div className="mt-14 text-cream flex items-center flex-col gap-5">
        <h1 className="font-regular text-4xl max-w-[260px] text-center uppercase tracking-tighter font-family-arizona-flare">
          Tudo isso acontecerá em um lugar especial
        </h1>
        <div className="flex flex-col w-2/3 text-justify gap-2 tracking-tight leading-5 font-light ">
          <p className="text-cream-light font-family-arizona-sans">
            O{' '}
            <span className="underline underline-offset-1">
              Instituto Terra do Sol
            </span>
            , em Itatiba/SP. Um lugar de natureza, arquitetura integrada e
            atmosfera ancorada para o nosso mergulho. Cercado por mata nativa e
            silêncio vivo, o espaço foi criado como um centro de práticas
            integrativas e saberes ancestrais xamânicos.
          </p>
        </div>
      </div>
      <div className="mb-28">
        <p className="uppercase text-sm text-cream-light leading-5 max-w-[247px] text-justify">
          <span className="underline underline-offset-1">incluso:</span>{' '}
          hospedagem, alimentação, experiências e sessões terapêuticas.
        </p>
      </div>
    </div>
  )
}
