const about = {
  name: "about",
  title: "Seção - Sobre Nós",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Imagem",
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
    {
      name: "description",
      title: "Descrição do Sobre Nós",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export { about };
