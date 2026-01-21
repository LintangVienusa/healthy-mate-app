import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 3,
    },
    info: {
        flex: 1,
        gap: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000000",
    },
    detail: {
        fontSize: 14,
        color: "#9ca3af",
    },
    calories: {
        fontSize: 14,
        color: "#22c55e",
        fontWeight: "500",
    },
    actions: {
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    edit: {
        color: "#3b82f6",
        fontSize: 14,
    },
    delete: {
        color: "#ef4444",
        fontSize: 14,
    },
});