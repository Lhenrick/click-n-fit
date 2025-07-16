// /data/muscles.ts

export interface Muscle {
  id: string; // Machine-readable key
  name: string; // Display name
  top: string;
  left: string;
  borderRadius?: string;
  side: "front" | "back";
  width: number;
  height: number;
}

export const muscles: Muscle[] = [
  {
    id: "chest",
    name: "Peitoral",
    top: "22%",
    left: "37%",
    borderRadius: "50%",
    side: "front",
    width: 100,
    height: 100,
  },
  {
    id: "chest",
    name: "Peitoral",
    top: "22%",
    left: "50%",
    side: "front",
    width: 100,
    height: 100,
  },
  {
    id: "biceps",
    name: "Bíceps",
    top: "28%",
    left: "31%",
    side: "front",
    width: 50,
    height: 120,
  },
  {
    id: "biceps",
    name: "Bíceps",
    top: "28%",
    left: "62%",
    side: "front",
    width: 50,
    height: 120,
  },
  {
    id: "trapezius",
    name: "Trapézio",
    top: "20%",
    left: "61%",
    side: "front",
    width: 60,
    height: 70,
  },
  {
    id: "shoulders",
    name: "Deltóide",
    top: "20%",
    left: "31%",
    side: "front",
    width: 60,
    height: 70,
  },
  {
    id: "abs",
    name: "Abdômen",
    top: "31.5%",
    left: "43.7%",
    borderRadius: "30%",
    side: "front",
    width: 100,
    height: 180,
  },
  {
    id: "quads",
    name: "Quadríceps",
    top: "53%",
    left: "36%",
    side: "front",
    width: 100,
    height: 300,
  },
  {
    id: "quads",
    name: "Quadríceps",
    top: "53%",
    left: "52%",
    side: "front",
    width: 100,
    height: 300,
  },
  {
    id: "triceps",
    name: "Tríceps",
    top: "25%",
    left: "34%",
    side: "back",
    width: 50,
    height: 100,
  },
  {
    id: "triceps",
    name: "Tríceps",
    top: "25%",
    left: "60%",
    side: "back",
    width: 50,
    height: 100,
  },
];
