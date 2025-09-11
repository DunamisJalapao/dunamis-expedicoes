// import { CollapseCard } from '@/components/CollapseCard'
import { CardDetails } from "@/components/CardDetails";
import { Header } from "@/components/Header";
import Footer from "@/components/screens/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { objPacks } from "./aux";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const slugTyped = slug as keyof typeof objPacks;
  return {
    title: objPacks[slugTyped].title,
    description: objPacks[slugTyped].description,
  };
}

const asks = [
  {
    ask: "Qual a melhor época do ano para visitar o Jalapão?",
    answer:
      "O Jalapão é um destino turístico que pode ser visitado em qualquer época do ano. Sendo que, de maio a setembro não costuma chover, é o período mais seco, então nestes períodos as temperaturas são maiores. De outubro a abril chove, porém não costuma ser chuvas longas, a temperatura fica agradável. ",
  },
  {
    ask: "Qual aeroporto mais próximo do Jalapão?",
    answer:
      "O mais próximo do Jalapão é o Aeroporto Brigadeiro Lysias Rodrigues, também conhecido como Aeroporto de Palmas – PMW.",
  },
  {
    ask: "Como são as estradas para o Jalapão?",
    answer:
      "Parte da expedição percorre em estradas asfaltadas e parte em estradas não pavimentadas, o que provoca trepidações durante o percurso. Sabendo que, para chegada nos atrativos não requer grandes percursos de trilhas, os veículos chegam bem próximo.",
  },
  {
    ask: "Compro o aéreo e depois certifico a data da viagem?",
    answer:
      "Não, as datas das viagens são pré-estabelecidas, então antes de comprar sua passagem é necessário a verificação de disponibilidade de data, pois trabalhamos com vagas limitadas.",
  },
  {
    ask: "Qual horário de saída de Palmas?",
    answer:
      "Acontecem por volta das 7 h da manhã no hotel indicado pelo cliente, desta forma sugerimos a chegada com um dia de antecedência em Palmas, e da mesma forma o retorno, pois no último dia chegamos por volta das 19 h, sabendo que, pode aproveitar muitas belezas naturais na capital, como Praça dos Girassóis, Praia da Graciosa, Ilha Canela, Parque Cesamar, entre outros. ",
  },
];

export default function PackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-x-hidden font-work-sans">
      <nav className="w-full -mb-16 sm:-mb-20 lg:-mb-24 z-50 fixed top-2 sm:top-3 lg:top-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <Header />
      </nav>
      <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {children}

        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex flex-col lg:flex-row py-8 sm:py-12 md:py-16 justify-center h-full gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-lemon-milk">
            <div className="flex w-full lg:w-[40%] h-full py-4 sm:py-6 md:py-8 lg:py-0 flex-col gap-4 sm:gap-6 md:gap-8 text-center lg:text-left">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  Simulação de veículo
                </h2>
              </div>
              <div className="w-full text-sm sm:text-base md:text-lg leading-relaxed">
                <p className="mb-3 sm:mb-4">
                  O transporte é realizado em veículo 4x4 com capacidade para 6
                  passageiros e 1 condutor ambiental.
                </p>
                <p>
                  Temos opção de veículo 4x4 exclusivo e privativo, para esta
                  opção consultar Pacote Exclusivo juntamente a agência.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="w-full lg:w-[30rem] h-64 sm:h-80 md:h-96 lg:h-[35rem] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/car.jpeg"
                  alt="Veículo 4x4 para expedições no Jalapão"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={480}
                  height={560}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs sm:text-sm mt-2 font-semibold text-gray-600">
                * Imagem meramente ilustrativa
              </p>
            </div>
          </div>

          <div className="border border-[#0000000e] w-full max-w-4xl my-8 sm:my-12 md:my-16" />

          <div className="flex w-full h-full py-12 sm:py-16 md:py-20 justify-center font-lemon-milk">
            <div className="flex flex-col w-full max-w-4xl justify-center gap-6 sm:gap-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl self-center font-bold">
                O que está incluso?
              </h1>
              <ul className="px-4 sm:px-6 md:px-8 list-decimal list-inside text-base sm:text-lg md:text-xl lg:text-2xl space-y-2 sm:space-y-3">
                <li>Café da manhã, almoço e jantar</li>
                <li>Hospedagem</li>
                <li>
                  Serviço de bordo: água mineral, barra cereal, snacks, etc.
                </li>
                <li>Taxa de visitação dos atrativos do roteiro</li>
                <li>Condutor ambiental credenciado</li>
                <li>Transporte em veículo 4x4</li>
                <li>GoPro para filmagem aquática</li>
              </ul>
            </div>
          </div>

          <div className="border border-[#0000000e] w-full max-w-4xl my-8 sm:my-12 md:my-16" />

          <div className="flex w-full h-full py-12 sm:py-16 md:py-20 justify-center font-lemon-milk">
            <div className="flex flex-col w-full max-w-4xl justify-center gap-6 sm:gap-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl self-center font-bold">
                O que não inclui:
              </h1>
              <ul className="px-4 sm:px-6 md:px-8 list-decimal list-inside text-base sm:text-lg md:text-xl lg:text-2xl space-y-2 sm:space-y-3">
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

        <div className="flex flex-col w-full max-w-4xl gap-4 sm:gap-6 md:gap-8">
          <h1 className="font-lemon-milk text-lg sm:text-xl md:text-2xl lg:text-3xl self-center font-bold">
            Perguntas frequentes
          </h1>
          <div className="flex flex-col w-full">
            {asks.map((ask, index) => (
              <div key={index}>
                <CardDetails>
                  <CardDetails.Wrapper>
                    <CardDetails.Trigger className="w-full">
                      <CardDetails.Title className="text-sm sm:text-base md:text-lg">
                        {ask.ask}
                      </CardDetails.Title>
                    </CardDetails.Trigger>

                    <CardDetails.Content className="w-full">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        {ask.answer}
                      </p>
                    </CardDetails.Content>
                  </CardDetails.Wrapper>
                </CardDetails>
                <div className="border mt-2 mb-2 border-[#0000000e] w-full" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="w-full pt-4 sm:pt-6 md:pt-8">
        <Footer />
      </div>
    </div>
  );
}
