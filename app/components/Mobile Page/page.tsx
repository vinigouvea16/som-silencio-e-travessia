import Convite from './components/convite'
import Equipe from './components/equipe'
import Local2 from './components/espaco'
import Estudo from './components/estudo'
import Exp from './components/experiencia'
import Form from './components/form'
import Hero from './components/hero'
import Integrar from './components/integrar'
import Local from './components/local'
import Processo from './components/processo'
import QuemSomos from './components/quemsomos'
import Camadas from './components/travessia'

export default function MobilePage() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden bg-black">
        <Hero />
        <Exp />
        <Convite />
        <Estudo />
        <Integrar />
        <QuemSomos />
        <Equipe />
        <Local />
        <Local2 />
        <Processo />
        <Camadas />
        <Form />
      </div>
    </>
  )
}
