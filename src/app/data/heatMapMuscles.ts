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
  rotate?: string;
}

export const muscles: Muscle[] = [
  {
    id: "chest",
    name: "Peitoral",
    top: "30%",
    left: "36%",
    borderRadius: "50%",
    side: "front",
    width: 40,
    height: 40,
  },
  {
    id: "chest",
    name: "Peitoral",
    top: "30%",
    left: "49%",
    side: "front",
    width: 40,
    height: 40,
  },
  {
    id: "biceps",
    name: "Bíceps",
    top: "33%",
    left: "30%",
    side: "front",
    width: 20,
    height: 50,
  },
  {
    id: "biceps",
    name: "Bíceps",
    top: "33%",
    left: "62%",
    side: "front",
    width: 20,
    height: 50,
  },
  {
    id: "deltoid",
    name: "Deltóide",
    top: "28%",
    left: "60%",
    side: "front",
    rotate: "-40deg",
    width: 20,
    height: 30,
  },
  {
    id: "deltoid",
    name: "Deltóide",
    top: "28%",
    left: "32%",
    side: "front",
    rotate: "40deg",
    width: 20,
    height: 30,
  },
  {
    id: "abs",
    name: "Abdômen",
    top: "37%",
    left: "43%",
    borderRadius: "30%",
    side: "front",
    width: 40,
    height: 60,
  },
  {
    id: "quads",
    name: "Quadríceps",
    top: "51%",
    left: "38%",
    side: "front",
    rotate: "3deg",
    width: 20,
    height: 90,
  },
  {
    id: "quads",
    name: "Quadríceps",
    top: "51%",
    left: "54%",
    side: "front",
    rotate: "3deg",
    width: 20,
    height: 90,
  },
  {
    id: "triceps",
    name: "Tríceps",
    top: "32%",
    left: "34%",
    side: "back",
    rotate: "15deg",
    width: 16,
    height: 40,
  },
  {
    id: "triceps",
    name: "Tríceps",
    top: "32%",
    left: "60%",
    side: "back",
    width: 16,
    height: 40,
    rotate: "-20deg",
  },

  {
    id: "dorsal",
    name: "dorsal",
    top: "27.8%",
    left: "41%",
    side: "back",
    rotate: "-20deg",
    width: 20,
    height: 60,
  },

  {
    id: "dorsal",
    name: "dorsal",
    top: "28%",
    left: "51%",
    side: "back",
    rotate: "20deg",
    width: 20,
    height: 60,
  },

  {
    id: "forearm",
    name: "Antebraço",
    top: "43%",
    left: "64%",
    side: "front",
    rotate: "-11deg",
    width: 20,
    height: 50,
  },

  {
    id: "forearm",
    name: "Antebraço",
    top: "43%",
    left: "28%",
    side: "front",
    rotate: "11deg",
    width: 20,
    height: 50,
  },

  {
    id: "lumbar",
    name: "Lombar",
    top: "37%",
    left: "46.5%",
    side: "back",
    rotate: "90deg",
    width: 20,
    height: 40,
  },

  {
    id: "glutes",
    name: "Glúteos",
    top: "42%",
    left: "40%",
    side: "back",
    rotate: "0 deg",
    width: 31,
    height: 31,
  },

  {
    id: "glutes",
    name: "Glúteos",
    top: "42%",
    left: "49.5%",
    side: "back",
    rotate: "0 deg",
    width: 31,
    height: 31,
  },

  {
    id: "abductors",
    name: "Abdutores",
    top: "55%",
    left: "51%",
    side: "front",
    rotate: "0deg",
    width: 10,
    height: 60,
  },

  {
    id: "abductors",
    name: "Abdutores",
    top: "55%",
    left: "44%",
    side: "front",
    rotate: "0deg",
    width: 10,
    height: 60,
  },

  {
    id: "adductors",
    name: "Adutores",
    top: "53%",
    left: "36%",
    side: "front",
    rotate: "3deg",
    width: 10,
    height: 80,
  },

  {
    id: "adductors",
    name: "Adutores",
    top: "53%",
    left: "60%",
    side: "front",
    rotate: "-3deg",
    width: 10,
    height: 80,
  },

  {
    id: "trapezius",
    name: "Trapézio",
    top: "26%",
    left: "41.5%",
    side: "back",
    rotate: "0deg",
    width: 50,
    height: 20,
  },

  {
    id: "calves",
    name: "Panturrilha",
    top: "62%",
    left: "39.7%",
    side: "back",
    rotate: "-3deg",
    width: 20,
    height: 60,
  },

  {
    id: "calves",
    name: "Panturrilha",
    top: "62%",
    left: "53.5%",
    side: "back",
    rotate: "3deg",
    width: 20,
    height: 60,
  },

  {
    id: "posteriorThigh",
    name: "Isquiotibiais (Posteriores de Coxa)",
    top: "49%",
    left: "52%",
    side: "back",
    rotate: "-1deg",
    width: 22,
    height: 60,
  },

  {
    id: "posteriorThigh",
    name: "Isquiotibiais (Posteriores de Coxa)",
    top: "49%",
    left: "40%",
    side: "back",
    rotate: "1deg",
    width: 22,
    height: 60,
  },
];
