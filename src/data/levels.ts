export type Level = {
  id: number;
  title: string;
  description: string;
  color: string;
};

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "Internet Takes & Low-Stakes Reveals",
    description: "Internet takes, preferences, and silly opinions.",
    color: "#12A84D",
  },
  {
    id: 2,
    title: "Values, Judgment & Relationship Mechanics",
    description: "Judgment calls, boundaries, and how you relate.",
    color: "#4B57FF",
  },
  {
    id: 3,
    title: "Personal Reality, Dealbreakers & Future",
    description: "Real talk about you two, dealbreakers, and the future.",
    color: "#FF4A1A",
  },
];
