import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dunamis Expedições - Melhor agência do Jalapão",
    short_name: "Dunamis Expedições",
    description:
      "A melhor agência de turismo do Jalapão. Pacotes de 3, 4 e 5 dias com hospedagem, alimentação e transporte inclusos.",
    start_url: "/",
    display: "standalone",
    background_color: "#112126",
    theme_color: "#FF5A00",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
