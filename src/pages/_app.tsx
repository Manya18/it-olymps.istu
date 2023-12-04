import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Montserrat, Nunito, Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ['cyrillic'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
