import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ScreenContainer({ children, style }: ViewProps) {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                {
                    flex: 1,
                    paddingTop: insets.top + 16,
                    paddingHorizontal: 16,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}
