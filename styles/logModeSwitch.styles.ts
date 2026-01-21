import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#F1F1F1",
        borderRadius: 14,
        padding: 4,
        marginVertical: 16,
    },

    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    activeButton: {
        backgroundColor: "#4CAF50",
    },

    text: {
        fontSize: 14,
        fontWeight: "600",
        color: "#666",
    },

    activeText: {
        color: "#FFF",
    },
});
