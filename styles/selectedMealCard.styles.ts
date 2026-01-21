import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    calories: {
        fontWeight: "700",
    },
    saveButton: {
        backgroundColor: "#2ecc71",
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: "center",
    },
    saveText: {
        color: "#FFF",
        fontWeight: "600",
    },
});