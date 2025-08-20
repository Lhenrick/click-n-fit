// src/app/data/premadePlans.ts

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
}

export interface WorkoutDay {
  day: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  goal: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationWeeks: number;
  frequencyPerWeek: number;
  split: string;
  days: WorkoutDay[];
}

export interface SavedWorkoutPlan extends WorkoutPlan {
  createdAt: string;
  completed: boolean;
  plan: Record<"A" | "B" | "C", { muscles: string[]; exercises: string[] }>;
}

export const preMadeWorkoutPlans: WorkoutPlan[] = [
  {
    id: "beginner-full-body",
    name: "Beginner Full Body",
    goal: "General Fitness",
    level: "Beginner",
    durationWeeks: 4,
    frequencyPerWeek: 3,
    split: "Full Body",
    days: [
      {
        day: "Day 1",
        exercises: [
          { name: "Bodyweight Squats", sets: 3, reps: "12-15" },
          { name: "Push-Ups", sets: 3, reps: "8-12" },
          { name: "Bent Over Dumbbell Rows", sets: 3, reps: "10" },
        ],
      },
      {
        day: "Day 2",
        exercises: [
          { name: "Walking Lunges", sets: 3, reps: "12 each leg" },
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12" },
          { name: "Plank", sets: 3, reps: "30s" },
        ],
      },
      {
        day: "Day 3",
        exercises: [
          { name: "Deadlifts", sets: 3, reps: "8-10" },
          { name: "Pull-Ups (assisted if needed)", sets: 3, reps: "6-8" },
          { name: "Russian Twists", sets: 3, reps: "20" },
        ],
      },
    ],
  },
  {
    id: "fat-burn-express",
    name: "Fat Burn Express",
    goal: "Fat Loss",
    level: "Intermediate",
    durationWeeks: 6,
    frequencyPerWeek: 5,
    split: "Upper/Lower + Cardio",
    days: [
      {
        day: "Day 1 - Upper + HIIT",
        exercises: [
          { name: "Push-Ups", sets: 3, reps: "12-15" },
          { name: "Bent Over Rows", sets: 3, reps: "10" },
          { name: "Mountain Climbers", sets: 3, reps: "30s" },
        ],
      },
      {
        day: "Day 2 - Lower + Core",
        exercises: [
          { name: "Squats", sets: 3, reps: "12-15" },
          { name: "Lunges", sets: 3, reps: "12 each leg" },
          { name: "Leg Raises", sets: 3, reps: "15" },
        ],
      },
      {
        day: "Day 3 - Cardio",
        exercises: [
          { name: "Running (Outdoor or Treadmill)", sets: 1, reps: "30 min" },
        ],
      },
      {
        day: "Day 4 - Upper + Abs",
        exercises: [
          { name: "Incline Push-Ups", sets: 3, reps: "15" },
          { name: "Dumbbell Rows", sets: 3, reps: "10" },
          { name: "Bicycle Crunches", sets: 3, reps: "20" },
        ],
      },
      {
        day: "Day 5 - Lower + HIIT",
        exercises: [
          { name: "Jump Squats", sets: 3, reps: "10" },
          { name: "Step-Ups", sets: 3, reps: "12 each leg" },
          { name: "Burpees", sets: 3, reps: "12" },
        ],
      },
    ],
  },
  {
    id: "hypertrophy-ppl",
    name: "Hypertrophy PPL",
    goal: "Muscle Growth",
    level: "Advanced",
    durationWeeks: 8,
    frequencyPerWeek: 6,
    split: "Push/Pull/Legs",
    days: [
      {
        day: "Day 1 - Push",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "8-10" },
          { name: "Shoulder Press", sets: 4, reps: "10" },
          { name: "Tricep Dips", sets: 3, reps: "12" },
        ],
      },
      {
        day: "Day 2 - Pull",
        exercises: [
          { name: "Deadlifts", sets: 4, reps: "6-8" },
          { name: "Barbell Rows", sets: 3, reps: "10" },
          { name: "Hammer Curls", sets: 3, reps: "12" },
        ],
      },
      {
        day: "Day 3 - Legs",
        exercises: [
          { name: "Back Squats", sets: 4, reps: "10" },
          { name: "Leg Press", sets: 3, reps: "12" },
          { name: "Calf Raises", sets: 3, reps: "15" },
        ],
      },
    ],
  },
];
