import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function FloatingLogButton(props: BottomTabBarButtonProps) {
    const { onPress } = props;

    return (
        <Pressable
            onPress={onPress}
            style={{
                top: -20,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: "#4CAF50",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 6,
                }}
            >
                <Ionicons name="add" size={28} color="#fff" />
            </View>
        </Pressable>
    );
}
