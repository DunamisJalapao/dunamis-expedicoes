import { objPacks } from "@/app/packs/[slug]/aux";

type StructuredDataProps = {
  type?: "home" | "pack";
  packSlug?: "roteiro-3-dias" | "roteiro-4-dias" | "roteiro-5-dias";
};

export function StructuredData({ type = "home", packSlug }: StructuredDataProps) {
  const baseUrl = "https://dunamisexpedicoes.com.br";

  // LocalBusiness Schema
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${baseUrl}#organization`,
    name: "Dunamis Expedições",
    description:
      "A melhor agência de turismo do Jalapão. Pacotes de 3, 4 e 5 dias com hospedagem, alimentação e transporte inclusos.",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo-white.webp`,
    image: `${baseUrl}/home1.webp`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "TO",
      addressLocality: "Palmas",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-63-92437-096",
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
    sameAs: [
      "https://www.instagram.com/dunamis_expedicoes/",
      "https://www.tiktok.com/@dunamis_expedicoes",
      "https://www.youtube.com/@dunamis_expedicoes",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Tocantins",
    },
  };

  // TourPackage Schema (para páginas de roteiro)
  const getTourPackage = () => {
    if (!packSlug || !objPacks[packSlug]) return null;

    const pack = objPacks[packSlug];
    const days = pack.days.length;
    const nights = days - 1;

    return {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: pack.title,
      description: `${pack.description}. ${pack.days.map((d) => d.title).join(", ")}.`,
      image: `${baseUrl}${pack.imgHome}`,
      url: `${baseUrl}/packs/${packSlug}`,
      provider: {
        "@type": "TravelAgency",
        name: "Dunamis Expedições",
        url: baseUrl,
      },
      itinerary: {
        "@type": "ItemList",
        numberOfItems: days,
        itemListElement: pack.days.map((day, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: day.title,
          description: day.attractivies.join(", "),
          image: `${baseUrl}${day.photo}`,
        })),
      },
      duration: `P${days}D`,
      tourBookingPage: `${baseUrl}/packs/${packSlug}`,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "BRL",
        url: `${baseUrl}/packs/${packSlug}`,
      },
    };
  };

  const schemas: Array<Record<string, unknown>> = [localBusiness];
  const tourPackage = type === "pack" ? getTourPackage() : null;
  if (tourPackage) schemas.push(tourPackage);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

