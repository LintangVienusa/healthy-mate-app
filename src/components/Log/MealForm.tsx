import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { searchFood } from "@/src/services/foodApi";
import { FoodItem } from "@/src/types/food";
import { MealLog } from "@/src/types/meal";
import { styles } from "@/styles/mealForm.styles";
import { SelectedMealCard } from "@/src/components/Log/SelectedMealCard";
import  MealLogCard  from "@/src/components/Log/MealLogCard";
import { getMeals, saveMeals } from "@/src/services/mealStorage";

export function MealForm() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<FoodItem[]>([]);
    const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
    const [grams, setGrams] = useState("100");
    const [logs, setLogs] = useState<MealLog[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        const delay = setTimeout(async () => {
            const data = await searchFood(query);
            setResults(data);
        }, 400);

        return () => clearTimeout(delay);
    }, [query]);

    useEffect(() => {
        (async () => {
            const data = await getMeals();
            setLogs(data);
        })();
    }, []);

    const totalCalories = selectedFood
        ? (parseInt(grams || "0") / 100) * selectedFood.calories
        : 0;

    const handleSave = async () => {
        if (!selectedFood) return;

        let updatedLogs: MealLog[];

        if (editingId) {
            updatedLogs = logs.map((item) =>
                item.id === editingId
                    ? {
                        ...item,
                        grams: Number(grams),
                        calories: Math.round(totalCalories),
                    }
                    : item
            );
        } else {
            updatedLogs = [
                {
                    id: Date.now().toString(),
                    name: selectedFood.name,
                    grams: Number(grams),
                    calories: Math.round(totalCalories),
                    createdAt: Date.now(),
                },
                ...logs,
            ];
        }

        setLogs(updatedLogs);
        await saveMeals(updatedLogs);

        setSelectedFood(null);
        setEditingId(null);
        setQuery("");
    };

    const handleDelete = async (id: string) => {
        const updated = logs.filter((item) => item.id !== id);
        setLogs(updated);
        await saveMeals(updated);
    };

    const handleEdit = (item: MealLog) => {
        setSelectedFood({
            id: item.id,
            name: item.name,
            calories: Math.round((item.calories / item.grams) * 100),
            unit: "100g",
        });
        setGrams(item.grams.toString());
        setEditingId(item.id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Input Meal</Text>

            <TextInput
                placeholder="Search Meal..."
                value={query}
                onChangeText={setQuery}
                style={styles.input}
            />

            {query.length > 0 && !selectedFood && (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.resultItem}
                            onPress={() => setSelectedFood(item)}
                        >
                            <Text style={styles.foodName}>{item.name}</Text>
                            <Text style={styles.foodCalories}>
                                {item.calories} kcal / {item.unit}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            {selectedFood && (
                <SelectedMealCard
                    food={selectedFood}
                    grams={Number(grams)}
                    calories={totalCalories}
                    onSave={handleSave}
                />
            )}

            {logs.map((item) => (
                <MealLogCard
                    key={item.id}
                    item={item}
                    onEdit={() => handleEdit(item)}
                    onDelete={() => handleDelete(item.id)}
                />
            ))}
        </View>
    );
}