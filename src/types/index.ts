import { TypedObject } from "sanity";

export type Attractivie = {
  _id: string;
  _createdeAt: Date;
  attractivie: string;
  region: string;
  image: string;
  url: string;
};

export type Photos = {
  _id: string;
  _createdAt: string;
  images: Array<{
    url: string;
    dimensions: { width: number; height: number; aspectRadio: number };
  }>;
};

export type About = {
  _id: string;
  _createdAt: string;
  image: string;
  description: TypedObject;
};
