import React from 'react'

export default function Processo() {
  return (
    <div className="flex flex-col bg-center bg-cover items-center justify-center min-h-[80vh] my-7 space-y-10">
      <div className="w-full flex flex-col gap-6 text-left ml-6 z-10 max-w-[400px]">
        <h1 className="text-brown-dark text-4xl font-family-arizona-flare font-medium tracking-[-0.07em]">
          Durante{' '}
          <span className="underline underline-offset-1">três dias</span>,<br />{' '}
          você será guiado <br />
          por um time experiente, <br />
          que une:
        </h1>
        <ul className="font-family-arizona-flare mb-11 text-2xl text-brown-dark space-y-3">
          <li className="gap-2 flex items-center font-bold italic">
            ✓
            <p className="text-xl tracking-tighter font-normal not-italic">
              neurociência
            </p>
          </li>
          <li className="gap-2 flex items-center font-bold italic">
            ✓
            <p className="text-xl tracking-tighter font-normal not-italic">
              práticas terapêuticas
            </p>
          </li>
          <li className="gap-2 flex items-center font-bold italic">
            ✓
            <p className="text-xl tracking-tighter font-normal not-italic">
              sound healing e arte integrativa
            </p>
          </li>
          <li className="gap-2 flex items-center font-bold italic">
            ✓
            <p className="text-xl tracking-tighter font-normal not-italic">
              integração emocional e corporal
            </p>
          </li>
          <li className="gap-2 flex items-center font-bold italic">
            ✓
            <p className="text-xl tracking-tighter font-normal not-italic">
              sessões terapêuticas pré e pós experiência
            </p>
          </li>
        </ul>
      </div>
      <a
        href="#form1"
        className="uppercase rounded-sm font-medium text-cream-light font-family-arizona-flare bg-brown-dark text-xl px-2 py-1 w-fit"
      >
        inscrição
      </a>
    </div>
  )
}
