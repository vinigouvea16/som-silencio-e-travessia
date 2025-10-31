import Image from 'next/image'
import React from 'react'

export default function Exp() {
  return (
    <div className="h-lvh flex flex-col bg-cream">
      <div className="flex flex-col my-auto items-center max-h-[80vh]">
        <span className="text-brown-dark font-thin tracking-wide font-family-arizona-flare text-lg uppercase">
          som, silêncio e travessia
        </span>
        <div className="flex flex-col relative items-center bg-tan w-[235px] h-[235px] mx-auto">
          <Image
            src={'/exp.png'}
            alt={
              'imagem de uma folha de bananeira flutuando sobre a água de uma lagoa'
            }
            width={134}
            height={134}
            className="object-cover my-auto w-[134px] h-[134px]"
          />
          <h1 className="text-brown-dark font-family-arizona-sans text-nowrap text-5xl font-bold tracking-[-0.07em] -bottom-5 absolute">
            A experiência
          </h1>
        </div>
        <div className="flex flex-col px-11 gap-2 mt-12">
          <p className="text-brown-dark font-light text-justify font-family-arizona-sans tracking-[-0.04em]">
            Preparamos para você uma vivência rara e transformadora: um espaço
            entre o som e o silêncio, onde sua presença se expande, a ciência
            encontra o simbólico e o corpo pode, enfim,{' '}
            <span className="font-bold">escutar o que sente.</span>
          </p>
          <p className="text-brown-dark font-family-arizona-sans text-justify font-light tracking-[-0.04em]">
            Nesta imersão, você vai descobrir nossa proposta, as medicinas que
            nos guiam, as experiências que compõem essa jornada e as pessoas
            inspiradoras que estarão ao seu lado.
          </p>
        </div>
        <span className="uppercase text-sm text-olive tracking-tight font-family-arizona-flare underline my-11">
          um convite ao mergulho, um campo de travessia
        </span>

        <a
          href="#form"
          className="uppercase rounded-sm font-medium text-brown-dark bg-tan text-xl tracking-tighter px-2 py-1"
        >
          quero expandir
        </a>
      </div>
    </div>
  )
}
