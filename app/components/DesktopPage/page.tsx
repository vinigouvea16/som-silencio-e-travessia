import DesktopGridLayout from '../DesktopGridLayout'
import Convite from './components/convite'
import Equipe1 from './components/equipe1'
import Equipe2 from './components/equipe2'
import Equipe3 from './components/equipe3'
import Exp from './components/experiencia'
import Form from './components/form'
import DesktopHero from './components/hero'
import Local from './components/local'
import Processo from './components/processo'
import QuemSomos from './components/quemsomos'
import Camadas from './components/travessia'

export default function DesktopPage() {
  return (
    <>
      <DesktopGridLayout>
        <DesktopHero />
        <Exp />
        <Convite />
        <QuemSomos />
        <Equipe1 />
        <Equipe2 />
        <Equipe3 />
        <Local />
        <Processo />
        <Camadas />
        <Form />
      </DesktopGridLayout>
    </>
  )
}
