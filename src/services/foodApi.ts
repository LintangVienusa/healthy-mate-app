import { FoodItem } from "@/src/types/food";

export async function searchFood(query: string): Promise<FoodItem[]> {
    if (!query) return [];

    // MOCK DATA
    return [
        {
            id: "1",
            name: "Nasi Putih",
            calories: 130,
            unit: "100g",
        },
        {
            id: "2",
            name: "Ayam Dada Rebus",
            calories: 165,
            unit: "100g",
        },
    ];
}