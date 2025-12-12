type roteiro = {
  title: string;
  imgHome: string;
  description: string;
  days: {
    title: string;
    attractivies: string[];
    photo: string;
  }[];
  optionalActivies: string[];
};

type ObjPacks = {
  "roteiro-3-dias": roteiro;
  "roteiro-4-dias": roteiro;
  "roteiro-5-dias": roteiro;
};

export const objPacks: ObjPacks = {
  "roteiro-3-dias": {
    title: "PACOTE DE 3 DIAS",
    imgHome: "/pack3.webp",
    description: "Roteiro de 3 dias e 2 noites",
    days: [
      {
        title: "1° Dia",
        attractivies: [
          "Comunidade Quilombola",
          "Prainha do Rio Novo",
          "Serra do Espirito Santo (Contemplação e Fotos)",
          "Recando das Dunas",
          "Dunas do Jalapão",
        ],
        photo: "/assets/imgs/photo1.webp",
      },
      {
        title: "2° Dia",
        attractivies: [
          "Fervedouro Buritis",
          "Fervedouro do Ceiça",
          "Cabana de artesanato",
          "Cachoeira do formiga",
          "Fervedouro por enquanto",
          "Experiência com banho norturno em fervedouro",
        ],
        photo: "/assets/imgs/photo2.webp",
      },
      {
        title: "3° Dia",
        attractivies: [
          "Fervedouro Bela Vista",
          "Cachoeira das Araras",
          "Serra da Catedral (Contemplação e fotos)",
        ],
        photo: "/assets/imgs/photo3.webp",
      },
    ],
    optionalActivies: ["Rafting", "Boia Cross", "Trilha ao Nascer do Sol"],
  },
  "roteiro-4-dias": {
    title: "PACOTE DE 4 DIAS",
    imgHome: "/pack4.webp",
    description: "Roteiro de 4 dias e 3 noites",
    days: [
      {
        title: "1° Dia",
        attractivies: ["Pedra Furada", "Lagoa do Japonês"],
        photo: "/assets/imgs/photo4.webp",
      },
      {
        title: "2° Dia",
        attractivies: [
          "Cânion Sussuapara",
          "Comunidade Quilombola",
          "Serra do Espírito Santo (Contemplação e fotos)",
          "Recanto das Dunas",
          "Dunas do Jalapão",
        ],
        photo: "/assets/imgs/photo5.webp",
      },
      {
        title: "3° Dia",
        attractivies: [
          "Fervedouro Buritis",
          "Fervedouro do Ceiça",
          "Cabana de Artesanato ",
          "Cachoeira do Formiga",
          "Fervedouro Por Enquanto",
          "Experiência com banho noturno em fervedouro",
        ],
        photo: "/assets/imgs/photo6.webp",
      },
      {
        title: "4° Dia",
        attractivies: [
          "Fervedouro Bela Vista",
          "Cachoeira das Araras",
          "Serra da Catedral (Contemplação e Fotos)",
        ],
        photo: "/assets/imgs/photo3.webp",
      },
    ],
    optionalActivies: ["Rafting", "Boia Cross", "Trilha ao Nascer do Sol"],
  },
  "roteiro-5-dias": {
    title: "PACOTE DE 5 DIAS",
    imgHome: "/pack5.webp",
    description: "Roteiro de 5 dias e 4 noites",
    days: [
      {
        title: "1° Dia",
        attractivies: ["Pedra Furada", "Lagoa do Japonês"],
        photo: "/assets/imgs/photo7.webp",
      },
      {
        title: "2° Dia",
        attractivies: [
          "Cânion Sussuapara",
          "Comunidade Quilombola",
          "Serra do Espírito Santo (Contemplação e Fotos",
          "Recanto das Dunas",
          "Dunas do Jalapão",
        ],
        photo: "/assets/imgs/photo8.webp",
      },
      {
        title: "3° Dia",
        attractivies: [
          "Fervedouro Buritis",
          "Fervedouro do Ceiça",
          "Cabana de Artesanato",
          "Cachoeira do Formiga",
          "Fervedouro Por Enquanto",
          "Experiência com banho noturno em fervedouro",
        ],
        photo: "/assets/imgs/photo9.webp",
      },
      {
        title: "4° Dia",
        attractivies: [
          "Fervedouro Bela Vista",
          "Cachoeira das Araras",
          "Serra da Catedral (Contemplação e Fotos) ",
        ],
        photo: "/assets/imgs/photo10.webp",
      },
      {
        title: "5° Dia",
        attractivies: [
          "Cachoeira da Roncadeira",
          "Cachoeira Escorrega Macaco",
          "Fazenda Ecológica – Cachoeira das Araras",
        ],
        photo: "/assets/imgs/photo11.webp",
      },
    ],
    optionalActivies: [
      "Rapel",
      "Tirolesa",
      "Rafting",
      "Boia Cross",
      "Trilha ao Nascer do Sol",
    ],
  },
};
