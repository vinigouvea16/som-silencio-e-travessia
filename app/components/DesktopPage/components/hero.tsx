export default function DesktopHero() {
  return (
    <div className="my-4 min-h-[80vh] relative flex flex-col">
      <div className="flex flex-col items-center absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 gap-1">
        <span className="font-bold text-olive-dark tracking-tighter text-2xl">
          28, 29 e 30 de novembro
        </span>
        <h1 className="text-brown-dark tracking-wide font-family-arizona-flare text-5xl uppercase text-center">
          som, silêncio
          <br /> <span className="font-bold italic">e travessia</span>
        </h1>
        <h2 className="text-brown-medium font-light font-family-arizona-sans uppercase text-sm underline underline-offset-1">
          imersão integrativa enteógena
        </h2>
      </div>
      <div className="flex justify-between items-baseline w-full px-20 absolute bottom-[10%]">
        <span className="text-brown-dark font-light font-family-arizona-flare uppercase text-xl">
          los ninõs
        </span>
        <span className="text-brown-dark font-light font-family-arizona-flare uppercase text-xl">
          Brain
        </span>
      </div>
    </div>
  )
}
