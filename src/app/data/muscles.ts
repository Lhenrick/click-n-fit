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
    id: "deltoid",
    name: "Deltóide",
    top: "19%",
    left: "61%",
    side: "front",
    rotate: "-40deg",
    width: 58,
    height: 100,
  },
  {
    id: "deltoid",
    name: "Deltóide",
    top: "19%",
    left: "31%",
    side: "front",
    rotate: "40deg",
    width: 58,
    height: 100,
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
    top: "51%",
    left: "38%",
    side: "front",
    rotate: "3deg",
    width: 60,
    height: 300,
  },
  {
    id: "quads",
    name: "Quadríceps",
    top: "51%",
    left: "54%",
    side: "front",
    rotate: "3deg",
    width: 60,
    height: 300,
  },
  {
    id: "triceps",
    name: "Tríceps",
    top: "25%",
    left: "33%",
    side: "back",
    rotate: "15deg",
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
    rotate: "-20deg",
  },

  {
    id: "dorsal",
    name: "dorsal",
    top: "19.5%",
    left: "40%",
    side: "back",
    rotate: "-30deg",
    width: 60,
    height: 150,
  },

  {
    id: "dorsal",
    name: "dorsal",
    top: "19.5%",
    left: "52%",
    side: "back",
    rotate: "30deg",
    width: 60,
    height: 150,
  },

  {
    id: "forearm",
    name: "Antebraço",
    top: "40%",
    left: "65%",
    side: "front",
    rotate: "-11deg",
    width: 55,
    height: 150,
  },

  {
    id: "forearm",
    name: "Antebraço",
    top: "40%",
    left: "27%",
    side: "front",
    rotate: "11deg",
    width: 55,
    height: 150,
  },

  {
    id: "lumbar",
    name: "Lombar",
    top: "30%",
    left: "46.5%",
    side: "back",
    rotate: "90deg",
    width: 55,
    height: 125,
  },

  {
    id: "glutes",
    name: "Glúteos",
    top: "38%",
    left: "40%",
    side: "back",
    rotate: "0 deg",
    width: 80,
    height: 115,
  },

  {
    id: "glutes",
    name: "Glúteos",
    top: "38%",
    left: "49.5%",
    side: "back",
    rotate: "0 deg",
    width: 80,
    height: 115,
  },

  {
    id: "abductors",
    name: "Abdutores",
    top: "53%",
    left: "61%",
    side: "front",
    rotate: "0deg",
    width: 25,
    height: 250,
  },

  {
    id: "abductors",
    name: "Abdutores",
    top: "53%",
    left: "35.5%",
    side: "front",
    rotate: "0deg",
    width: 25,
    height: 250,
  },

  {
    id: "adductors",
    name: "Adutores",
    top: "57%",
    left: "45%",
    side: "front",
    rotate: "3deg",
    width: 25,
    height: 250,
  },

  {
    id: "adductors",
    name: "Adutores",
    top: "57%",
    left: "51.2%",
    side: "front",
    rotate: "-3deg",
    width: 25,
    height: 250,
  },

  {
    id: "trapezius",
    name: "Trapézio",
    top: "14%",
    left: "43.5%",
    side: "back",
    rotate: "-3deg",
    width: 100,
    height: 120,
  },

  {
    id: "calves",
    name: "Panturrilha",
    top: "68%",
    left: "39.5%",
    side: "back",
    rotate: "-3deg",
    width: 52,
    height: 160,
  },

  {
    id: "calves",
    name: "Panturrilha",
    top: "68%",
    left: "53.7%",
    side: "back",
    rotate: "-3deg",
    width: 52,
    height: 160,
  },

  {
    id: "posteriorThigh",
    name: "Isquiotibiais (Posteriores de Coxa)",
    top: "49%",
    left: "52%",
    side: "back",
    rotate: "-1deg",
    width: 70,
    height: 170,
  },

  {
    id: "posteriorThigh",
    name: "Isquiotibiais (Posteriores de Coxa)",
    top: "49%",
    left: "39%",
    side: "back",
    rotate: "1deg",
    width: 70,
    height: 170,
  },
];
