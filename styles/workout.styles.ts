import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        gap: 12,
    },
    switchContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 4,
    },
    switchButton: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    switchActive: {
        backgroundColor: "#22c55e",
    },
    switchTextActive: {
        color: "#ffffff",
        fontWeight: "600",
    },
    switchTextInactive: {
        color: "#000000",
        fontWeight: "600",
    },
    input: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 12,
        color: "#000000",
    },
    calories: {
        color: "#22c55e",
        fontWeight: "600",
    },
    saveButton: {
        backgroundColor: "#22c55e",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    saveText: {
        color: "#ffffff",
        fontWeight: "700",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: 14,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 3
    },
    cardTitle: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "600",
    },
    cardDetail: {
        color: "#9ca3af",
        fontSize: 13,
    },
    cardCalories: {
        color: "#ef4444",
        fontWeight: "600",
    },
    delete: {
        color: "#ef4444",
        fontSize: 14,
    },
});
