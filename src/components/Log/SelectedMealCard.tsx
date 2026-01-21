import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "@/src/components/CardUI/Card";
import { styles } from "@/styles/selectedMealCard.styles";
import { FoodItem } from "@/src/types/food";

interface Props {
    food: FoodItem;
    grams: number;
    calories: number;
    onSave: () => void;
}

export function SelectedMealCard({
                                     food,
                                     grams,
                                     calories,
                                     onSave,
                                 }: Props) {
    return (
        <Card>
            <Text style={styles.title}>{food.name}</Text>

            <View style={styles.row}>
                <Text>{grams} g</Text>
                <Text style={styles.calories}>{Math.round(calories)} kcal</Text>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                <Text style={styles.saveText}>Save Meal</Text>
            </TouchableOpacity>
        </Card>
    );
}