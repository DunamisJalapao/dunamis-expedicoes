const photos = {
  name: "photos",
  title: "Galeria de fotos",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array", // supports drag'n'drop of multiple files
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
};

export { photos };
