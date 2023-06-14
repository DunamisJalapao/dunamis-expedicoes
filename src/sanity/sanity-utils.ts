import { About, Attractivie, Photos } from "@/types";
import { createClient, groq } from "next-sanity";
import config from "../../sanity.config";

export async function getAttractivies(): Promise<Attractivie[]> {
  return createClient(config).fetch(
    groq`*[_type == "attractivies"]{
      _id,
      _createdAt,
      attractivie,
      region,
      "image": photo.asset->url,
      url,
    }`
  );
}

export async function getPhotos(isSliced = true): Promise<Photos[]> {
  let slicedValue = "[0...10]";
  return createClient(config).fetch(
    groq`*[_type == "photos"]${isSliced ? slicedValue : ""}{
      _id,
      _createdAt,
      "images": images[]{
        "url": asset->url,
        "dimensions": asset->metadata.dimensions,
      },
    }`
  );
}

export async function getAbout(): Promise<About[]> {
  return createClient(config).fetch(
    groq`*[_type == "about"]{
      _id,
      _createdAt,
      "image": image.asset->url,
      description,
    }`
  );
}
