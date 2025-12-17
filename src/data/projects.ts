import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "clay-ridge-house",
    title: "Clay Ridge House",
    description:
      "A serene dwelling nestled into the hillside, shaped by natural light and local stone. The interiors oper toward the valley, framing views that shift with the seasons.",
    info: "Residential · Completed · 2024",
    category: "residential",
    status: "completed",
    year: 2024,
    location: "Montana, USA",
    image: {
      src: "/featured-projects/clay-ridge-house.jpg",
      alt: "Clay Ridge House - A hillside dwelling with natural stone exterior",
    },
    featured: true,
  },
  {
    id: "the-woven-loft",
    title: "The Woven Loft",
    description:
      "A converted warehouse reimagined as living gallery. Exposed structure meet warm textiles in a space designed work and quiet retreat.",
    info: "Loft · Completed ·  2023",
    category: "residential",
    status: "completed",
    year: 2023,
    location: "Brooklyn, NY",
    image: {
      src: "/featured-projects/the-woven-loft.jpg",
      alt: "The Woven Loft - Industrial warehouse converted to living space",
    },
    featured: true,
  },
  {
    id: "emberstone-cabin",
    title: "Emberstone Cabin",
    description:
      "A minimal retreat in the forest, where timber, concrete, and glass meet. Designed to disappear into its surroundings while offering shelter and stillness.",
    info: "Cabin · Completed · 2022",
    category: "residential",
    status: "completed",
    year: 2022,
    location: "Austin, Texas",
    image: {
      src: "/featured-projects/fold-house.jpg",
      alt: "Fold House - Angular residential design with dynamic lighting",
    },
    featured: true,
  },
];
