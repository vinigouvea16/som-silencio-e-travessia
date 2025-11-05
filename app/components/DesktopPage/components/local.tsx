import Image from 'next/image'
import React from 'react'

const localImages = [
  { id: 1, url: '/local/1.webp', alt: 'Instituto Terra do Sol - Vista 1' },
  { id: 2, url: '/local/2.webp', alt: 'Instituto Terra do Sol - Vista 2' },
  { id: 3, url: '/local/3.webp', alt: 'Instituto Terra do Sol - Vista 3' },
  { id: 4, url: '/local/4.webp', alt: 'Instituto Terra do Sol - Vista 4' },
  { id: 5, url: '/local/5.webp', alt: 'Instituto Terra do Sol - Vista 5' },
  { id: 6, url: '/local/6.webp', alt: 'Instituto Terra do Sol - Vista 6' },
  { id: 7, url: '/local/7.webp', alt: 'Instituto Terra do Sol - Vista 7' },
  { id: 8, url: '/local/8.webp', alt: 'Instituto Terra do Sol - Vista 8' },
  { id: 9, url: '/local/9.webp', alt: 'Instituto Terra do Sol - Vista 9' },
]

export default function Local() {
  return (
    <div className="flex flex-col justify-between items-center mb-14 gap-12">
      <div className="mt-5 text-olive-dark flex items-center flex-col gap-5">
        <h1 className="font-regular text-4xl max-w-[270px] text-center uppercase tracking-tighter font-family-arizona-flare">
          Tudo isso acontecerá em um lugar especial
        </h1>
        <div className="flex flex-col max-w-[290px] text-justify gap-2 tracking-tighter leading-5 font-light">
          <p className="font-family-arizona-sans">
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

      <div className="grid grid-cols-3 gap-0 max-w-[614px]">
        {localImages.map(image => (
          <Image
            key={image.id}
            src={image.url}
            alt={image.alt}
            width={205}
            height={240}
            className="object-cover aspect-square w-full h-full object-center "
          />
        ))}
      </div>

      <p className="uppercase text-olive-dark tracking-tighter leading-4 font-medium max-w-[290px] text-justify">
        <span className="underline underline-offset-1">incluso:</span>{' '}
        hospedagem, alimentação, experiências e sessões terapêuticas.
      </p>
    </div>
  )
}
