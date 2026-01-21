import { View, ViewProps } from "react-native";
import { styles } from "./card.styles";

export function Card({ children, style }: ViewProps) {
    return <View style={[styles.card, style]}>{children}</View>;
}