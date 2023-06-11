import { Attractivie } from "@/types/Attractivies";
import { createClient, groq } from "next-sanity";

export async function getAttractivies(): Promise<Attractivie[]> {
  const client = createClient({
    projectId: "6ofi8cxt",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type == "attractivies"]{
      _id,
      _createdAt,
      attractivie,
      region,
      "image": photo.asset->url,
    }`
  );
}

// export async function getPhotos(): Promise<Attractivie[]> {
//   const client = createClient({
//     projectId: "6ofi8cxt",
//     dataset: "production",
//     apiVersion: "2023-03-04",
//   });

//   return client.fetch(
//     groq`*[_type == "photos"]{
//       _id,
//       _createdAt,
//       "attractivie",
//       region,
//       "image": image.asset->url,

//     }`
//   );
// }
