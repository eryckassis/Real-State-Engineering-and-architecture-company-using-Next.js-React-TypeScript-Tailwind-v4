import type { ImageData } from "./common";

// tipos de espaço disponiveis.

export type SpaceType = "interior" | "exterior" | "mixed";

// aqui representa um espaço no portfólio.

export interface Space {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: SpaceType;
  area: string;
  year: number;
  location: string;
  image: ImageData;
  gallery?: ImageData[];
}
