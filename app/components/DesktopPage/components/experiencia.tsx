import Image from 'next/image'
import React from 'react'

export default function Exp() {
  return (
    <div className="flex flex-col items-center bg-cream my-12 min-h-[80vh]">
      <div className="flex flex-col my-auto items-center">
        <span className="text-brown-dark font-thin tracking-widest font-family-arizona-flare text-xl uppercase">
          som, silêncio e travessia
        </span>
        <div className="flex flex-col relative items-center bg-tan w-[304px] h-[304px]">
          <Image
            src={'/exp.webp'}
            alt={
              'imagem de uma folha de bananeira flutuando sobre a água de uma lagoa'
            }
            width={134}
            height={134}
            className="object-cover my-auto w-[167px] h-[167px]"
          />
          <h1 className="text-brown-dark font-family-arizona-sans text-nowrap text-6xl font-bold tracking-[-0.07em] -bottom-6 absolute">
            A experiência
          </h1>
        </div>
        <div className="flex flex-col gap-2 mt-12 max-w-[306px] tracking-tighter">
          <p className="text-brown-dark font-light text-justify font-family-arizona-sans">
            Preparamos para você uma vivência rara e transformadora: um espaço
            entre o som e o silêncio, onde sua presença se expande, a ciência
            encontra o simbólico e o corpo pode, enfim,{' '}
            <span className="font-bold">escutar o que sente.</span>
          </p>
          <p className="text-brown-dark font-family-arizona-sans text-justify font-light">
            Nesta imersão, você vai descobrir nossa proposta, as medicinas que
            nos guiam, as experiências que compõem essa jornada e as pessoas
            inspiradoras que estarão ao seu lado.
          </p>
        </div>
        <span className="uppercase  text-olive tracking-tight font-family-arizona-flare underline my-11">
          um convite ao mergulho, um campo de travessia
        </span>

        <a
          href="#form1"
          className="uppercase rounded-sm font-medium text-brown-dark bg-tan text-xl tracking-tighter px-2 py-1"
        >
          quero expandir
        </a>
      </div>
    </div>
  )
}
