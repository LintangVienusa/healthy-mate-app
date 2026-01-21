import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/mealLogCard.styles";

type Props = {
    item: {
        name: string;
        grams: number;
        calories: number;
    };
    onEdit: () => void;
    onDelete: () => void;
};

export default function MealLogCard({ item, onEdit, onDelete }: Props) {
    return (
        <View style={styles.card}>
            {/* INFO */}
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.detail}>{item.grams} g</Text>
                <Text style={styles.calories}>{item.calories} kcal</Text>
            </View>

            {/* ACTION */}
            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Text style={styles.delete}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
