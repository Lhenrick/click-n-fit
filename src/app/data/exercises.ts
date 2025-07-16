// /data/exercises.ts

export interface MuscleExerciseGroup {
  category: string;
  exercises: string[];
}

export interface MuscleData {
  name: string; // display name
  groups: MuscleExerciseGroup[];
}

export const muscleExercises: Record<string, MuscleData> = {
  chest: {
    name: "Peitoral",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Supino Reto",
          "Supino Inclinado",
          "Supino Declinado",
          "Supino Fechado",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Supino Reto com Halteres",
          "Supino Inclinado com Halteres",
          "Crucifixo Reto",
          "Crucifixo Inclinado",
          "Pullover",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Peck Deck (Voador ou Fly Machine)",
          "Supino na Máquina",
          "Crossover (Polia)",
          "Polia Alta",
          "Polia Média",
          "Polia Baixa",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Flexão de Braço",
          "Flexão Inclinada (mãos em um banco)",
          "Flexão Declinada (pés em um banco)",
          "Mergulho nas Paralelas",
        ],
      },
    ],
  },

  // Add more using this format
  dorsal: {
    name: "Dorsal",
    groups: [
      {
        category: "Exemplos",
        exercises: ["Puxada frente", "Remada baixa"],
      },
    ],
  },

  posteriorThigh: {
    name: "Posteriores de Coxa",
    groups: [
      {
        category: "Máquina",
        exercises: ["Mesa flexora", "Stiff"],
      },
    ],
  },
};
