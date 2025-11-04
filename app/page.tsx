import DesktopGridLayout from './components/DesktopGridLayout'
import DesktopPage from './components/DesktopPage/components/page'
import MobilePage from './components/MobilePage/page'

export default function Home() {
  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden">
        <MobilePage />
      </div>

      {/* DESKTOP */}
      <DesktopGridLayout>
        <DesktopPage />
      </DesktopGridLayout>
    </>
  )
}
