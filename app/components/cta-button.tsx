'use client'
// import { Button } from '@/components/ui/button'
import WhatsApp from './icons/whatsapp'
// import { useEffect, useState } from 'react'

export default function FloatingWhatsappButton() {
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768)
  //   }

  //   checkMobile()
  //   window.addEventListener('resize', checkMobile)
  //   return () => window.removeEventListener('resize', checkMobile)
  // }, [])

  // if (!isMobile) return null

  return (
    <a
      href="https://wa.me/5541987392252"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-30 right-7 z-20 lg:right-10 lg:bottom-[12%] transition-colors bg-none border-transparent border rounded-full text-background shadow-lg shadow-white/5 p-2"
    >
      {/* <Button variant="whatsapp" size="zp" title="whatsapp button CTA"> */}
      <WhatsApp />
      {/* </Button> */}
    </a>
  )
}
