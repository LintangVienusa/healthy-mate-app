import { View, TouchableOpacity, Text } from "react-native";
import styles from "@/styles/workout.styles";

type Props = {
    value: "cardio" | "weight";
    onChange: (v: "cardio" | "weight") => void;
};

export default function WorkoutTypeSwitch({ value, onChange }: Props) {
    return (
        <View style={styles.switchContainer}>
            {["cardio", "weight"].map((type) => (
                <TouchableOpacity
                    key={type}
                    style={[
                        styles.switchButton,
                        value === type && styles.switchActive,
                    ]}
                    onPress={() => onChange(type as "cardio" | "weight")}
                >
                    <Text
                        style={
                            value === type
                                ? styles.switchTextActive
                                : styles.switchTextInactive
                        }
                    >
                        {type === "cardio" ? "Cardio" : "Weight Lifting"}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
