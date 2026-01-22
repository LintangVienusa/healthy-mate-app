import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/workout.styles";

type Props = {
    item: {
        type: "cardio" | "weight";
        name: string;
        duration: number;
        calories: number;
    };
    onDelete: () => void;
};

export default function WorkoutCard({ item, onDelete }: Props) {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDetail}>
                    {item.type.toUpperCase()} • {item.duration} min
                </Text>
                <Text style={styles.cardCalories}>
                    -{item.calories} kcal
                </Text>
            </View>

            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}
