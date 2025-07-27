export interface MuscleExerciseGroup {
  category: string;
  exercises: string[];
}

export interface MuscleData {
  name: string;
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
  dorsal: {
    name: "Dorsal",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Remada Curvada com Pegada Pronada",
          "Remada Curvada com Pegada Supinada",
          "Remada Cavalinho",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Remada Serrote Unilateral",
          "Remada com Halteres com Peito Apoiado no Banco",
          "Remada Renegada",
          "Pullover com Halter",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Puxada Frontal com Pegada Aberta",
          "Puxada Frontal com Pegada Fechada",
          "Puxada Frontal com Pegada Supinada",
          "Puxada Frontal com Pegada Neutra",
          "Remada Sentada na Polia com Triângulo",
          "Remada Sentada na Polia com Barra Reta",
          "Remada na Máquina Articulada",
          "Remada Baixa no Cross com Corda",
          "Remada Baixa no Cross com Barra",
          "Face Pull",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Barra Fixa com Pegada Pronada",
          "Barra Fixa com Pegada Supinada",
          "Barra Fixa com Pegada Neutra",
          "Remada Invertida na Barra Baixa",
          "Remada Invertida no TRX",
          "Arquear do Superman",
          "Extensão Lombar Banco Romano",
          "Extensão Lombar no Chão",
        ],
      },
    ],
  },
  deltoid: {
    name: "Deltóide",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Desenvolvimento Militar em Pé",
          "Desenvolvimento Sentado com Barra (pela frente)",
          "Desenvolvimento por Trás da Nuca",
          "Remada Alta com Barra (pegada mais fechada)",
          "Remada Alta com Barra (pegada mais aberta)",
          "Landmine Press",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Desenvolvimento com Halteres Sentado",
          "Desenvolvimento com Halteres em Pé",
          "Elevação Lateral",
          "Elevação Frontal com Halteres (pegada pronada)",
          "Elevação Frontal com Halteres (pegada neutra)",
          "Elevação Curvado (Crucifixo Invertido)",
          "Arnold Press Remada Alta com Halteres",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Desenvolvimento na Máquina (Smith ou Articulada)",
          "Elevação Lateral na Polia (unilateral)",
          "Elevação Lateral na Máquina",
          "Elevação Frontal na Polia com Barra",
          "Elevação Frontal na Polia com Corda",
          "Crucifixo Invertido na Máquina (Peck Deck Invertido)",
          "Face Pull com Corda",
          "Remada Alta na Polia com Barra",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Flexão Pike",
          "Flexão Hindu",
          "Prancha com Elevação Lateral",
          "Flexão Pseudo",
          "Prancha (Pseudo Planche Push-up)",
        ],
      },
    ],
  },
  trapezius: {
    name: "Trapézio",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Encolhimento com Barra pela Frente",
          "Encolhimento com Barra por Trás",
          "Remada Alta com Barra",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Encolhimento com Halteres",
          "Remada Alta com Halteres",
          "Caminhada do Fazendeiro (Farmer's Walk)",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Encolhimento no Smith Machine",
          "Encolhimento na Polia Baixa com Barra",
          "Face Pull com Corda",
          "Crucifixo Invertido na Máquina (Peck Deck Invertido)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Remada Invertida (foco no trapézio médio e inferior)",
          "Retração Escapular na Barra Fixa (Scapular Pull-ups)",
          "Flexão com Retração Escapular (Scapular Push-ups)",
        ],
      },
    ],
  },
  biceps: {
    name: "Bíceps",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Rosca Direta com Barra Reta",
          "Rosca Direta com Barra W",
          "Rosca Direta com Pegada Aberta",
          "Rosca Direta com Pegada Fechada",
          "Rosca Inversa com Barra",
          "Rosca Scott com Barra W",
          "Rosca Drag com Barra",
          "Rosca 21 com Barra",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Rosca Alternada em Pé (com supinação)",
          "Rosca Martelo",
          "Rosca Martelo Cruzada (Cross Body)",
          "Rosca Concentrada Sentado",
          "Rosca Inclinada no Banco com Halteres",
          "Rosca Scott Unilateral com Halter",
          "Zottman Curl",
          "Rosca Spider (com peito apoiado no banco inclinado)",
          "Rosca Martelo no Banco Inclinado",
          "Rosca Alternada tipo 'arraste' (Drag Curl com halteres)",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Rosca na Polia Baixa com Barra Reta",
          "Rosca na Polia Baixa com Barra W",
          "Rosca na Polia Baixa com Corda",
          "Rosca Martelo na Polia com Corda",
          "Rosca Unilateral na Polia",
          "Rosca Scott na Máquina",
          "Rosca Drag na Polia",
          "Rosca na Polia Alta (simulando duplo bíceps)",
          "Rosca por Trás do Corpo na Polia",
          "Rosca Inversa na Polia com Corda",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Barra Fixa com Pegada Supinada (Chin-up)",
          "Barra Fixa com Pegada Supinada e Fechada",
          "Remada Invertida com Pegada Supinada",
          "Rosca com Anéis de Ginástica (Ring Curls)",
          "Rosca com Fitas de Suspensão (TRX)",
          "Rosca Corporal com Barra Baixa",
          "Chin-up Excêntrico (foco na fase negativa)",
        ],
      },
    ],
  },
  triceps: {
    name: "Tríceps",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Supino Fechado",
          "Tríceps Testa com Barra Reta (Skull Crusher)",
          "Tríceps Testa com Barra W",
          "Extensão de Tríceps Sentado com Barra",
          "JM Press",
          "Supino no Chão com Pegada Fechada (Floor Press)",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Tríceps Testa com Halteres (pegada neutra)",
          "Tríceps Coice Unilateral",
          "Tríceps Coice com os dois braços (apoiado no banco)",
          "Extensão de Tríceps Sentado com um Halter (Overhead Extension)",
          "Extensão de Tríceps Deitado com Halteres",
          "Tríceps Francês Unilateral com Halter",
          "Tate Press",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Tríceps na Polia Alta com Barra Reta",
          "Tríceps na Polia Alta com Corda",
          "Tríceps na Polia Alta com Barra V",
          "Tríceps na Polia Alta com Pegada Inversa",
          "Extensão Unilateral na Polia Alta",
          "Tríceps Francês na Polia Baixa com Corda",
          "Coice na Polia Baixa (unilateral)",
          "Extensão de Tríceps na Máquina (Mergulho na Máquina)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Mergulho nas Paralelas (Dips)",
          "Mergulho no Banco (Bench Dips)",
          "Flexão Fechada (Diamond Push-up)",
          "Flexão Esfinge (Sphinx Push-up)",
          "Flexão Tigre (Tiger Bend Push-up)",
          "Mergulho em Anéis de Ginástica (Ring Dips)",
        ],
      },
    ],
  },

  forearm: {
    name: "Antebraço",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Rosca de Punho com Barra (palmas para cima)",
          "Rosca de Punho com Barra (palmas para baixo)",
          "Rosca Inversa com Barra",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Rosca de Punho com halter (palmas para cima)",
          "Rosca de Punho com halter (palmas para baixo)",
          "Rosca Martelo",
          "Rosca Zottman",
          "Caminhada do Fazendeiro (Farmer's Walk)",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Rosca de Punho na Polia Baixa",
          "Rosca de Pulso (Wrist Roller)",
          "Pinça de Mão (Hand Gripper)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Suspensão na barra Fixa (Dead Hang)",
          "Flexão na Ponta dos Dedos",
          "Rastejar do Urso (Bear Crawl)",
        ],
      },
    ],
  },

  abs: {
    name: "Abdômen",
    groups: [
      {
        category: "Exercícios com Barra e Anilhas",
        exercises: [
          "Abdominal com Rolo (usando barra)",
          "Giro com barra (Landmine Twist)",
          "Abdominal Supra com Anilha no Peito",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Giro Russo com Halter",
          "Flexão Lateral de Tronco com Halter",
          "Abdominal com Halter (Weighted Crunch)",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Abdominal na Polia Alta (Cable Crunch)",
          "Elevação de Pernas Paralelas (Captain's Chair)",
          "Abdominal na Máquina (Ab Crunch Machine)",
          "Rotação de Tronco na Polia (Woodchoppers)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Abdominal Supra (Crunch)",
          "Abdominal Infra (Elevação de Pernas Deitado)",
          "Abdominal Remador",
          "Abdominal Bicicleta",
          "Prancha Frontal",
          "Prancha Lateral",
          "Escalador (Mountain Climber)",
          "Toque no Calcanhar (Heel Taps)",
          "V-Up",
        ],
      },
    ],
  },

  lumbar: {
    name: "Lombar",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Good Morning",
          "Levantamento Terra Romeno",
          "Levantamento Terra",
          "Stiff",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: ["Good Morning com Halteres", "Stiff com Halteres"],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Extensão Lombar em Banco de 45 Graus (com ou sem anilha)",
          "Hiperextensão Reversa",
          "Extensão Lombar na Máquina",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Superman",
          "Ponte de Glúteos Perdigueiro (Bird-Dog)",
          "Ponte Isométrica Reversa (Reverse Plank)",
        ],
      },
    ],
  },

  quads: {
    name: "Quadríceps",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Agachamento Livre (Costas)",
          "Agachamento Frontal",
          "Agachamento Zercher",
          "Agachamento Búlgaro com Barra",
          "Afundo com Barra",
          "Agachamento Sumô com Barra",
          "Passada com Barra (Walking Lunge)",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Agachamento Taça (Goblet Squat)",
          "Agachamento Búlgaro com Halteres",
          "Afundo com Halteres",
          "Afundo Lateral com Halter",
          "Agachamento Sumô com Halter",
          "Step-Up com Halteres no Banco",
          "Afundo com Rotação",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Leg Press 45°",
          "Leg Press Horizontal",
          "Cadeira Extensora",
          "Agachamento Hack",
          "Agachamento no Smith",
          "Afundo no Smith",
          "Sissy Squat na Máquina",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Agachamento Livre (sem peso)",
          "Afundo (sem peso)",
          "Agachamento Isométrico na Parede (Wall Sit)",
          "Agachamento Pistola (Pistol Squat)",
          "Agachamento com Salto",
          "Afundo com Salto",
          "Sissy Squat (sem máquina)",
        ],
      },
    ],
  },

  posteriorThigh: {
    name: "Posteriores de Coxa",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Levantamento Terra Romeno",
          "Levantamento Terra",
          "Stiff",
          "Good Morning",
          "Levantamento Terra Sumô",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Stiff com Halteres",
          "Levantamento Terra Romeno Unilateral com Halter",
          "Elevação Pélvica com Halter no Quadril",
          "Kettlebell Swing",
          "Stiff Unilateral com Halter",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Cadeira Flexora",
          "Mesa Flexora",
          "Flexora em Pé (unilateral)",
          "Stiff na Polia Baixa com Barra ou Corda",
          "Glute-Ham Raise (GHR) na máquina específica",
          "Hiperextensão Reversa",
          "Puxada na Polia entre as Pernas (Cable Pull-Through)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Elevação Pélvica (Ponte de Glúteos)",
          "Flexão Nórdica (Nordic Hamstring Curl)",
          "Ponte de Glúteos Unilateral",
          "Ponte de Glúteos com Pés Elevados",
          "Deslizamento de Calcanhar (Heel Slides)",
          "Razor Curl",
        ],
      },
    ],
  },

  glutes: {
    name: "Glúteos",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Elevação Pélvica (Hip Thrust)",
          "Agachamento Profundo",
          "Levantamento Terra Sumô",
          "Good Morning",
          "Afundo com Barra",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Agachamento Búlgaro",
          "Agachamento Sumô com Halter",
          "Afundo com Halteres",
          "Step-Up com Halteres",
          "Stiff Unilateral com Halter",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Cadeira Abdutora",
          "Glúteo na Polia (Coice)",
          "Leg Press com Pés Altos na Plataforma",
          "Agachamento Hack com Pés Altos",
          "Máquina de Glúteo (Glute Machine)",
          "Puxada na Polia entre as Pernas (Cable Pull-Through)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Elevação Pélvica no Chão",
          "Ponte de Glúteos Unilateral",
          "Frog Pump",
          "Abdução de Quadril Deitado (Clamshell)",
          "Hidrante (Fire Hydrant)",
          "Chute de Burro (Donkey Kicks)",
        ],
      },
    ],
  },

  abductors: {
    name: "Abdutores",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Agachamento Sumô com Barra",
          "Agachamento Lateral com Barra",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: ["Agachamento Sumô com Halter", "Afundo Lateral com Halter"],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Cadeira Abdutora",
          "Abdução de Quadril na Polia Baixa (Cable Hip Abduction)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Abdução de Quadril Deitado (Clamshell)",
          "Hidrante (Fire Hydrant)",
          "Abdução de Quadril em Pé",
          "Caminhada Lateral com Banda Elástica",
          "Ponte de Glúteos com Abdução (com banda elástica)",
        ],
      },
    ],
  },

  adductors: {
    name: "Adutores",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: ["Agachamento Sumô com Barra", "Agachamento com Pés Juntos"],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Agachamento Sumô com Halter",
          "Agachamento Taça (Goblet Squat) com Pés Juntos",
          "Afundo Lateral",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Cadeira Adutora",
          "Adução de Quadril na Polia Baixa (Cable Hip Adduction)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Agachamento Cossaco (Cossack Squat)",
          "Adução de Quadril Deitado (Side-Lying Adduction)",
          "Ponte de Glúteos com Bola entre os Joelhos",
          "Prancha Lateral com Adução da Perna de Baixo",
        ],
      },
    ],
  },

  calves: {
    name: "Panturrilhas",
    groups: [
      {
        category: "Exercícios com Barra",
        exercises: [
          "Elevação de Panturrilha em Pé com Barra nas Costas",
          "Elevação de Panturrilha Sentado com Barra nos Joelhos",
        ],
      },
      {
        category: "Exercícios com Halteres",
        exercises: [
          "Elevação de Panturrilha com Halteres",
          "Elevação de Panturrilha Unilateral com Halter",
          "Elevação de Panturrilha Sentado com Halter no Joelho",
        ],
      },
      {
        category: "Exercícios em Máquinas e Cabos",
        exercises: [
          "Panturrilha em Pé na Máquina (Standing Calf Raise Machine)",
          "Panturrilha Sentado na Máquina",
          "Panturrilha no Leg Press",
          "Panturrilha no Smith Machine",
          "Panturrilha na Máquina de Burrinho (Donkey Calf Raises)",
        ],
      },
      {
        category: "Exercícios com o Peso do Corpo (Calistenia)",
        exercises: [
          "Elevação de Panturrilha no Chão",
          "Elevação de Panturrilha em Degrau",
          "Elevação de Panturrilha Unilateral",
          "Saltos de Panturrilha (Calf Jumps)",
        ],
      },
    ],
  },
};
