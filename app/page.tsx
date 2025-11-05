import DesktopPage from './components/DesktopPage/page'
import MobilePage from './components/MobilePage/page'

export default function Home() {
  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden">
        <MobilePage />
      </div>

      {/* DESKTOP */}
      <DesktopPage />
    </>
  )
}
