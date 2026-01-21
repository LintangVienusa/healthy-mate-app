import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/logModeSwitch.styles";

type LogMode = "meal" | "workout";

interface LogModeSwitchProps {
    mode: LogMode;
    onChange: (mode: LogMode) => void;
}

export function LogModeSwitch({ mode, onChange }: LogModeSwitchProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    mode === "meal" && styles.activeButton,
                ]}
                onPress={() => onChange("meal")}
                activeOpacity={0.8}
            >
                <Text
                    style={[
                        styles.text,
                        mode === "meal" && styles.activeText,
                    ]}
                >
                    🍽 Meal
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    mode === "workout" && styles.activeButton,
                ]}
                onPress={() => onChange("workout")}
                activeOpacity={0.8}
            >
                <Text
                    style={[
                        styles.text,
                        mode === "workout" && styles.activeText,
                    ]}
                >
                    🏃 Workout
                </Text>
            </TouchableOpacity>
        </View>
    );
}
