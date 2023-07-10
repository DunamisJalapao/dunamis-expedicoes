import { CollapseCard } from '@/components/CollapseCard'
import { Header } from '@/components/Header'
import Footer from '@/components/Screens/Footer'

export const metadata = {
  title: 'Dunamis Expedições',
  description: 'A sua agência de turismo',
}

const asks = [
  {
    ask: 'Qual a melhor época do ano para visitar o Jalapão?',
    answer: 'O Jalapão é um destino turístico que pode ser visitado em qualquer época do ano. Sendo que, de maio a setembro não costuma chover, é o período mais seco, então nestes períodos as temperaturas são maiores. De outubro a abril chove, porém não costuma ser chuvas longas, a temperatura fica agradável. '
  },
  {
    ask: 'Qual aeroporto mais próximo do Jalapão?',
    answer: 'O mais próximo do Jalapão é o Aeroporto Brigadeiro Lysias Rodrigues, também conhecido como Aeroporto de Palmas – PMW.'
  },
  {
    ask: 'Como são as estradas para o Jalapão?',
    answer: 'Parte da expedição percorre em estradas asfaltadas e parte em estradas não pavimentadas, o que provoca trepidações durante o percurso. Sabendo que, para chegada nos atrativos não requer grandes percursos de trilhas, os veículos chegam bem próximo.'
  },
  {
    ask: 'Compro o aéreo e depois certifico a data da viagem?',
    answer: 'Não, as datas das viagens são pré-estabelecidas, então antes de comprar sua passagem é necessário a verificação de disponibilidade de data, pois trabalhamos com vagas limitadas.'
  },
  {
    ask: 'Qual horário de saída de Palmas?',
    answer: 'Acontecem por volta das 7 h da manhã no hotel indicado pelo cliente, desta forma sugerimos a chegada com um dia de antecedência em Palmas, e da mesma forma o retorno, pois no último dia chegamos por volta das 19 h, sabendo que, pode aproveitar muitas belezas naturais na capital, como Praça dos Girassóis, Praia da Graciosa, Ilha Canela, Parque Cesamar, entre outros. '
  },
]

export default function PackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <nav className="w-full -mb-[5rem] z-50 fixed top-3  px-[20px] 2xl:px-[220px]">
        <Header />
      </nav>
      <main className="flex flex-col items-center">

        {children}

        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex py-10 justify-center h-full gap-10 font-lemon-milk">
            <div className="flex w-[30%] h-[25rem] flex-col gap-6 ">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl">Simulação de veículo</h2>
              </div>
              <div>
                <p>O transporte é realizado em veículo 4x4 com capacidade para 6 passageiros e 1 condutor ambiental. </p>
                <br />
                <p>Temos opção de veículo 4x4 exclusivo e privativo, para esta opção consultar Pacote Exclusivo juntamente a agência.</p>
              </div>
            </div>
            <div className={`w-[30rem] h-[35rem] overflow-hidden rounded-2xl`}>
              <img className="object-cover rounded-2xl" src="/car.png" alt="..." />
            </div>
          </div>

          <div className="border border-[#0000000e] w-[60%]" />

          <div className="flex w-full h-full py-20 justify-center font-lemon-milk">
            <div className="flex flex-col w-[60%] justify-center gap-8">
              <h1 className="text-4xl">O que está incluso?</h1>
              <ul className="px-4 list-decimal list-inside text-2xl">
                <li>
                  Café da manhã, almoço e jantar
                </li>
                <li>
                  Hospedagem
                </li>
                <li>Serviço de bordo: água mineral, barra cereal, snacks, etc.</li>
                <li>Taxa de visitação dos atrativos do roteiro</li>
                <li>Condutor ambiental credenciado</li>
                <li>Transporte em veículo 4x4</li>
                <li>GoPro para filmagem aquática</li>
              </ul>
            </div>
          </div>

          <div className="border border-[#0000000e] w-[60%]" />


          <div className="flex w-full h-full py-20 justify-center font-lemon-milk">
            <div className="flex flex-col w-[60%] justify-center gap-8">
              <h1 className="text-4xl">O que não inclui:</h1>
              <ul className="px-4 list-decimal list-inside text-2xl">
                <li>Passagens aéreas</li>
                <li>Passeios opcionais</li>
                <li>Hospedagem e refeições em Palmas - TO</li>
                <li>Bebidas</li>
                <li>Despesas de caráter pessoal</li>
                <li>Itens que não estiver no item incluso</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[60%] gap-5">
          <h1 className="font-lemon-milk text-3xl">Perguntas frequentes</h1>
          <div className="flex flex-col w-full">
            {asks.map(ask => (
              <>
                <CollapseCard.Root
                  title={ask.ask}
                  content={ask.answer}
                />
                <div className="border mt-2 mb-2 border-[#0000000e] w-[full]" />
              </>
            ))}
          </div>
        </div>
      </main>
      <div className='w-full pt-5'>
        <Footer />
      </div>
    </div>
  )
}
