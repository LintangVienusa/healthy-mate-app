import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },

    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
    },

    input: {
        backgroundColor: "#F2F2F2",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },

    resultItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#EEE",
    },

    foodName: {
        fontSize: 15,
        fontWeight: "500",
    },

    foodCalories: {
        fontSize: 12,
        color: "#666",
    },

    selectedFood: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 8,
    },

    calories: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 12,
    },

    saveButton: {
        backgroundColor: "#2ecc71",
        padding: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 8,
    },

    saveText: {
        color: "#fff",
        fontWeight: "700",
    },
});