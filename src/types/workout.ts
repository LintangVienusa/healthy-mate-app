export type WorkoutType = "cardio" | "weight";

export interface WorkoutLog {
    id: string;
    type: WorkoutType;
    name: string;
    duration: number; // minutes
    calories: number;
    createdAt: number;
}