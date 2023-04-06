
import { Inter } from 'next/font/google'
import App from './Home'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="font-poppins">
        <App/>
      </div>
      </>
    )
}
