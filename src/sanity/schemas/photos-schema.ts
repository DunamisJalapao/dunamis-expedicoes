const photos = {
  name: "photos",
  title: "Galeria de fotos",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array", // supports drag'n'drop of multiple files
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export { photos };
