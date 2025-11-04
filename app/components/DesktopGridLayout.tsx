// components/DesktopGridLayout.tsx
import type { ReactNode } from 'react'
import { Children } from 'react'

export default function DesktopGridLayout({
  children,
}: { children: ReactNode }) {
  const childrenArray = Children.toArray(children)

  return (
    <div className="hidden lg:flex lg:flex-col min-h-screen bg-cream">
      {/* Borda superior com espaçamento */}
      <div className="flex h-[10vh] border-b border-dashed border-black/20">
        <div className="flex-1 border-l border-dashed border-black/20" />
        <div className="w-[747px] border-x border-dashed border-black/20" />
        <div className="flex-1 border-r border-dashed border-black/20" />
      </div>

      {/* Conteúdo central com divisórias */}
      <div className="flex flex-1 flex-col">
        {childrenArray.map((child, index) => (
          <div key={index}>
            {/* Linha divisória antes de cada item (exceto o primeiro) */}
            {index > 0 && (
              <div className="w-full border-t border-dashed border-black/20" />
            )}

            {/* Conteúdo do componente */}
            <div className="flex">
              <div className="flex-1 border-l border-dashed border-black/20" />
              <div className="w-[747px] border-x border-dashed border-black/20">
                {child}
              </div>
              <div className="flex-1 border-r border-dashed border-black/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Borda inferior com espaçamento */}
      <div className="flex h-[10vh] border-t border-dashed border-black/20">
        <div className="flex-1 border-l border-dashed border-black/20" />
        <div className="w-[747px] border-x border-dashed border-black/20" />
        <div className="flex-1 border-r border-dashed border-black/20" />
      </div>
    </div>
  )
}
