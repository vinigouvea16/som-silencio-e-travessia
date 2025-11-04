'use client'

import { type Facilitador, facilitadores } from '@/app/data/facilitadores'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import useEmblaCarousel from 'embla-carousel-react'
import { Shell } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useCallback } from 'react'

export default function Equipe() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedFacilitador, setSelectedFacilitador] =
    useState<Facilitador | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const openDrawer = (facilitador: Facilitador) => {
    setSelectedFacilitador(facilitador)
    setDrawerOpen(true)
  }

  // Função para renderizar texto com HTML (para negrito)
  const renderRole = (role: string) => {
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    return <span dangerouslySetInnerHTML={{ __html: role }} />
  }

  return (
    <div className="bg-cream flex flex-col pb-8">
      <div className="flex flex-col w-full font-light gap-3 font-family-arizona-flare px-3 my-12">
        <p className="uppercase ml-auto text-sm">los niños || Brainstorm</p>
        <p className="uppercase mr-auto text-sm">Som, silêncio e travessia</p>
      </div>

      {/* Seção com carrousel */}
      <div className="flex flex-col mx-3 items-center relative">
        {/* Shell no fundo */}
        <Shell
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-black/5 z-0"
          size={400}
          strokeWidth={1}
        />

        {/* Textos */}
        <div className="relative z-10 ">
          <h1 className="text-brown-dark text-center font-family-arizona-sans text-5xl font-bold tracking-tighter">
            Visionários e <br />{' '}
            <span className="text-tan italic">facilitadores</span>
          </h1>
          <p className="uppercase text-center font-family-arizona-sans w-3/4 mx-auto tracking-tight mt-6">
            nossa equipe multidisciplinar e integrativa
          </p>
        </div>

        {/* Carrousel */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {facilitadores.map(facilitador => (
              <div
                key={facilitador.id}
                className="flex-[0_0_100%] min-w-0 flex flex-col items-center"
              >
                {/* Card com foto */}
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <div
                  className="m-10 bg-tan w-[70vw] flex flex-col cursor-pointer overflow-hidden group"
                  onClick={() => openDrawer(facilitador)}
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={facilitador.photoUrl}
                      alt={facilitador.name}
                      fill
                      className="object-cover p-10 pb-6"
                    />
                  </div>

                  {/* Texto fixo logo abaixo da imagem */}
                  <div className="mb-4 flex justify-center">
                    <span className="text-sm uppercase font-family-arizona-sans text-brown-dark">
                      Ver história
                    </span>
                  </div>
                </div>

                {/* Nome e formação */}
                <div className="text-center flex flex-col -mt-5 gap-2">
                  <h3 className="text-brown-dark uppercase font-family-arizona-sans text-2xl font-medium tracking-tighter">
                    {facilitador.name}
                  </h3>
                  <p className="text-brown-dark/80 font-family-arizona-sans text-base w-3/4 mx-auto">
                    {renderRole(facilitador.role)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="flex gap-2 mt-4">
          {facilitadores.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-brown-dark/50 w-6' : 'bg-tan/50'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Resto do conteúdo */}
      <div className="flex flex-col items-center space-y-8 mt-6">
        <p className="text-5xl font-family-arizona-sans tracking-tighter text-tan font-light text-center">
          Música, <br />
          arte, <br />
          medicina, <br />
          <span className="italic">espiritualidade</span>
        </p>
        <a
          href="#form"
          className="uppercase w-fit rounded-sm font-medium text-brown-dark font-family-arizona-sans bg-cream-light text-xl px-2 py-1"
        >
          inscrição + informações
        </a>
        <div className="px-2 py-1 bg-black rounded-full">
          <span className="text-sm uppercase text-cream-light font-family-arizona-sans">
            imersão integrativa enteógena
          </span>
        </div>
      </div>

      <span className="uppercase my-3 text-brown-dark mx-auto font-light font-arizona-flare">
        brainstorm + los niños
      </span>

      {/* Drawer com história do facilitador */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="bg-cream border-tan">
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-tan font-family-arizona-flare tracking-tighter uppercase text-2xl font-medium">
              {selectedFacilitador?.name}
            </DrawerTitle>
            <DrawerDescription className="text-brown-dark/80 leading-0 tracking-[0.2em] font-bold text-xl font-family-arizona-sans">
              . . . . . . . . .
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-8 max-h-[60vh] overflow-y-auto">
            <p className="text-brown-dark font-light font-family-arizona-sans leading-relaxed max-w-[280px] text-justify mx-auto">
              {selectedFacilitador?.description}
            </p>
          </div>
          {/* <DrawerClose className="absolute top-4 right-4 text-brown-dark">
            ✕
          </DrawerClose> */}
        </DrawerContent>
      </Drawer>
    </div>
  )
}
