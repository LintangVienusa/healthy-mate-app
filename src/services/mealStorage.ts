import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealLog } from "@/src/types/meal";

const STORAGE_KEY = "MEAL_LOGS";

export async function getMeals(): Promise<MealLog[]> {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

export async function saveMeals(meals: MealLog[]) {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(meals));
}