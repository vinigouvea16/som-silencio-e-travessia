import React from 'react'

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
    <div className="flex flex-col relative py-8 min-h-[70vh] justify-center">
      <div className="w-full px-5 flex flex-col gap-14 items-center z-10">
        <h1 className="text-olive-dark text-[44px] font-family-arizona-flare-compressed text-center font-normal tracking-tight leading-8 max-w-60">
          A <span className="italic">travessia</span> acontece
          <br />
          em três camadas:
        </h1>

        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-3 gap-5 w-full max-w-[700px]">
          {/* Linha 1: vazio | Corpo | vazio */}
          <div /> {/* coluna vazia */}
          <div className="text-olive-dark flex flex-col gap-3">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-family-arizona-flare-compressed ">
                ⟁
              </span>
              <h2 className="text-4xl uppercase font-family-arizona-flare-compressed leading-none">
                {camadas[0].titulo}
              </h2>
            </div>
            <p className="text-justify font-family-arizona-sans tracking-tight text-sm">
              {camadas[0].descricao}
            </p>
          </div>
          <div /> {/* coluna vazia */}
          {/* Linha 2: Mente | vazio | Espírito */}
          <div className="text-olive-dark flex flex-col gap-3">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-family-arizona-flare-compressed">
                ⟁
              </span>
              <h2 className="text-4xl uppercase font-family-arizona-flare-compressed leading-none">
                {camadas[1].titulo}
              </h2>
            </div>
            <p className="text-justify font-family-arizona-sans tracking-tight text-sm">
              {camadas[1].descricao}
            </p>
          </div>
          <div /> {/* coluna vazia do meio */}
          <div className="text-olive-dark flex flex-col gap-3">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-family-arizona-flare-compressed">
                ⟁
              </span>
              <h2 className="text-4xl uppercase font-family-arizona-flare-compressed leading-none">
                {camadas[2].titulo}
              </h2>
            </div>
            <p className="text-justify font-family-arizona-sans tracking-tight text-sm">
              {camadas[2].descricao}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
