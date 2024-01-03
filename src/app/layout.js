import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Css from "@/provider/Css"
import { Inter } from 'next/font/google'



export const metadata = {
  title: 'Interio | Home.',
  description: 'Interio transformed our bland apartment into a stunning and functional sanctuary.',
}

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (

    <html lang="en" className={inter.className}>
      <Css>
      <body>
      <div className="mobile">
      <div>
            <h1>Only Desktop.</h1>
            <p>This site don't have responsive version.</p>
            </div>
      </div>
      <div className="desktop">
        <Header/>
        {children}
        <Footer/>
      </div>
      </body>
      </Css>
    </html>
  )
}
