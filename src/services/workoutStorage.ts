import AsyncStorage from "@react-native-async-storage/async-storage";
import { WorkoutLog } from "@/src/types/workout";

const KEY = "workout_logs";

export async function getWorkouts(): Promise<WorkoutLog[]> {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}

export async function saveWorkouts(data: WorkoutLog[]) {
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
}