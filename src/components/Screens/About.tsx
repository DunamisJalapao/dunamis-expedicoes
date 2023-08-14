import { getAbout } from "@/sanity/sanity-utils";
import { HTMLAttributes } from "react";
import { Fade } from "react-awesome-reveal";

type AboutType = HTMLAttributes<HTMLDivElement> & {}

export default async function AboutScreen({ ...rest }: AboutType) {
  const about = await getAbout();

  return (
    <div {...rest} className="flex flex-col items-center md:justify-center w-full md:w-screen h-full md:h-screen bg-[#f8f8f8] py-9">
      <h1 className="mt-5 md:mt-0 mb-5 md:mb-0 items-center text-4xl md:text-5xl text-[#112126ff] uppercase font-bold font-lemon-milk">Sobre nós</h1>
      <div className="flex mt-0 md:mt-14 px-0 sm:px-14 2xl:px-96 gap-5 md:gap-10 w-full items-center flex-col md:flex-row">
        <div className="flex z-10 w-[20rem] md:w-[50rem] h-[20rem] md:h-[40rem] rounded-[25px] overflow-hidden shadow-[0px_28px_50px_-27px_#d2b597,0px_8px_100px_13px_#00000003] md:shadow-[0px_58px_50px_-27px_#d2b597,0px_8px_100px_13px_#00000003]">
          <Fade className="w-full relative" triggerOnce>
            <img className="object-cover" src={about[0].image} alt="imagem about" />
          </Fade>
        </div>
        <div className="flex z-0 w-[20rem] md:w-[50rem] h-full md:h-[40rem] text-justify md:text-left">
          <Fade direction="left" delay={500} triggerOnce>
            <div className="text-md md:text-xl xl:text-2xl">
              {/* <PortableText value={about[0].description} /> */}
              <p>
                A Dunamis Expedições é uma empresa <strong>tocantinense</strong> que foi criada através da soma do olhar de dois profissionais que enxergaram no turismo, o modo transformador de contemplar a vida e realizar sonhos.

                <br /><br />
                Nossos direcionadores como agência, é atuar de forma ética, oferecer serviços de qualidade, garantir bem estar dos nossos clientes e fazer a diferença no cenário social, pois acreditamos numa sociedade mais humana e solidária.
                <br /><br />


                <strong>Somos a Dunamis Expedições!</strong></p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}