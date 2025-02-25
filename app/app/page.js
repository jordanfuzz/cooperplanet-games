import Image from 'next/image'
import planet from '@/media/planet.gif'

export default function Home() {
  return (
    <div className="justify-items-center p-40">
      <main>
        <h1 className="text-3xl">CooperPlanet Games</h1>
        <Image src={planet} alt="planet" className="mx-auto mt-5" />
        <button className="text-xl mx-auto block mt-5 hover:text-success">
          Login
        </button>
      </main>
    </div>
  )
}
