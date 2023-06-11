const attractivie = {
  name: "attractivies",
  title: "Atrativos Visitados",
  type: "document",
  fields: [
    {
      name: "attractivie",
      title: "Nome do atrativo",
      type: "string",
    },
    {
      name: "region",
      title: "Região",
      type: "string",
    },
    {
      name: "photo",
      title: "Imagem do Atrativo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Texto Alternativo",
          type: "string",
        },
      ],
    },
  ],
};

export { attractivie };
