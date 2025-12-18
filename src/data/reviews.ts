import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "review-1",
    clientName: "Elena Vasquez",
    clientRole: "Creative Director",
    clientCompany: "Forma Studio",
    clientImage: {
      src: "/client-reviews/elena-vasquez.jpg",
      alt: "Elena Vasquez portrait",
    },
    quote:
      "Working with Terrene was transformative. They didn't just design a space — they understood how we live, how we breathe. Every corner feels intentional, every detail resonates.",
  },
  {
    id: "review-2",
    clientName: "Marcus Chen",
    clientRole: "Founder",
    clientCompany: "Horizon Ventures",
    clientImage: {
      src: "/client-reviews/marcus-chen.jpg",
      alt: "Marcus Chen portrait",
    },
    quote:
      "The team brought clarity to a complex vision. What emerged was a home that feels rooted, calm, and entirely our own. A rare and grounding experience.",
  },
  {},
];
