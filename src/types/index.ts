export type Attractivie = {
  id: number;
  name: string;
  region: string;
  link: string;
  img: string;
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
};
