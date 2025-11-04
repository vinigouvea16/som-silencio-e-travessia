import React from 'react'

// Dados das camadas
const camadas = [
  {
    id: 1,
    titulo: 'Corpo',
    descricao:
      'É o primeiro a chegar. É por ele que o sentir se manifesta. Trabalharemos a presença física, a liberação emocional e o  enraizamento através da respiração, da água, do som e do movimento.',
  },
  {
    id: 2,
    titulo: 'Mente',
    descricao:
      'Ela observa, interpreta, analisa, compara. Mas também silencia, expande, integra. Guiamos a mente a sair do ruído e entrar em estado de clareza com práticas de foco, arte, escuta e neurociência aplicada.',
  },
  {
    id: 3,
    titulo: 'Espírito',
    descricao:
      'Aquilo que não se vê, mas faz o mistério encontrar sentido e o simbólico ganhar linguagem. Através da dualidade do som e silêncio, firmados pela força do círculo e das medicinas, abrimos espaço para a intuição e para a verdade sobre o nosso interior.',
  },
]

export default function Camadas() {
  return (
    <div className="min-h-lvh flex flex-col bg-[url('../public/triangle.webp')] bg-center bg-cover relative">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="w-full px-8 py-20 flex flex-col gap-14 items-center z-10">
        <h1 className="text-cream text-4xl font-family-arizona-flare-compressed text-center font-normal tracking-tight leading-8 max-w-60">
          A <span className="italic">travessia</span> acontece
          <br />
          em três camadas:
        </h1>

        {/* 3 camadas */}
        <div className="flex flex-col gap-14 w-full max-w-[280px]">
          {camadas.map(camada => (
            <div key={camada.id} className="text-cream flex flex-col">
              {/* Header: Símbolo + Título */}
              <div className="flex items-baseline mx-auto gap-1">
                <span className="text-4xl font-family-arizona-flare-compressed ">
                  ⟁
                </span>
                <h2 className="text-4xl uppercase font-family-arizona-flare-compressed leading-none">
                  {camada.titulo}
                </h2>
              </div>

              {/* Descrição */}
              <p className="text-justify font-family-arizona-sans mt-2 ml-1 tracking-tight">
                {camada.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
