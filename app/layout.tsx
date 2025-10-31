import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const arizonaFlare = localFont({
  src: [
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-Thin-Trial.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-ThinItalic-Trial.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-Light-Trial.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-LightItalic-Trial.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-RegularItalic-Trial.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-MediumItalic-Trial.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare/ABCArizonaFlare-BoldItalic-Trial.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-arizona-flare',
})

const arizonaFlareCompressed = localFont({
  src: [
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-Thin-Trial.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-ThinItalic-Trial.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-Light-Trial.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-LightItalic-Trial.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-RegularItalic-Trial.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-MediumItalic-Trial.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Flare Compressed/ABCArizonaFlareCompressed-BoldItalic-Trial.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-arizona-flare-compressed',
})

const arizonaSans = localFont({
  src: [
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-Thin-Trial.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-ThinItalic-Trial.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-Light-Trial.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-LightItalic-Trial.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-RegularItalic-Trial.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-MediumItalic-Trial.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Arizona/Arizona Sans/ABCArizonaSans-BoldItalic-Trial.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-arizona-sans',
})

export const metadata: Metadata = {
  title: 'Som, Silêncio e Travessia',
  description: 'Imersão Integrativa enteógena | Los Niños + Brainstorm',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${arizonaFlare.variable} ${arizonaFlareCompressed.variable} ${arizonaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
