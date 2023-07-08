import { HTMLAttributes } from "react"
import { CardPacks } from "../CardPacks"

type PacksProps = HTMLAttributes<HTMLDivElement> & {}

const roteirosData = [
  {
    title: 'ROTEIRO 3 DIAS',
    duration: '3 dias e 2 noites',
    foods: 'Alimento incluso',
    hotel: 'Hospedagem inclusa',
    doc: '/roteiro3dias.pdf',
    img: '/pack3.jpg'
  },
  {
    title: 'ROTEIRO 4 DIAS',
    duration: '4 dias e 3 noites',
    foods: 'Alimento incluso',
    hotel: 'Hospedagem inclusa',
    doc: '/roteiro4dias.pdf',
    img: '/pack4.jpg'
  },
  {
    title: 'ROTEIRO 5 DIAS',
    duration: '5 dias e 4 noites',
    foods: 'Alimento incluso',
    hotel: 'Hospedagem inclusa',
    doc: '/roteiro5dias.pdf',
    img: '/pack5.jpg'

  },
]

export default function Packs({ ...rest }: PacksProps) {
  return (
    <div {...rest} className="flex flex-col w-full lg:w-screen h-[80vh] items-center py-10 gap-10">
      <h1 className="mt-5 md:mt-0 mb-5 md:mb-0 text-4xl md:text-5xl text-[#112126ff] uppercase font-bold font-lemon-milk">Pacotes</h1>
      <div className="grid w-[80%] px-14 grid-cols-resposive-fit justify-center gap-10">
        {roteirosData.map(roteiro => (
          <CardPacks {...roteiro} />
        ))}
      </div>
    </div>
  )
}