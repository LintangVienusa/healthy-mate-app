import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import WorkoutTypeSwitch from "./WorkoutTypeSwitch";
import WorkoutCard from "./WorkoutCard";
import styles from "@/styles/workout.styles";
import { WorkoutLog, WorkoutType } from "@/src/types/workout"
import { getWorkouts, saveWorkouts } from "@/src/services/workoutStorage";

type WorkoutLog = {
    type: "cardio" | "weight";
    name: string;
    duration: number;
    calories: number;
};

export default function WorkoutForm() {
    const [type, setType] = useState<WorkoutType>("cardio");
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [logs, setLogs] = useState<WorkoutLog[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getWorkouts();
            setLogs(data);
        })();
    }, []);

    const calories =
        type === "cardio"
            ? Number(duration) * 8
            : Number(duration) * 6;

    const handleSave = async () => {
        if (!duration) return;

        let updated: WorkoutLog[];

        if (editingId) {
            updated = logs.map((item) =>
                item.id === editingId
                    ? {
                        ...item,
                        type,
                        name: name || item.name,
                        duration: Number(duration),
                        calories,
                    }
                    : item
            );
        } else {
            updated = [
                {
                    id: Date.now().toString(),
                    type,
                    name: name || (type === "cardio" ? "Cardio" : "Weight Training"),
                    duration: Number(duration),
                    calories,
                    createdAt: Date.now(),
                },
                ...logs,
            ];
        }

        setLogs(updated);
        await saveWorkouts(updated);

        setName("");
        setDuration("");
        setEditingId(null);
    };

    const handleDelete = async (id: string) => {
        const updated = logs.filter((item) => item.id !== id);
        setLogs(updated);
        await saveWorkouts(updated);
    };

    const handleEdit = (item: WorkoutLog) => {
        setType(item.type);
        setName(item.name);
        setDuration(item.duration.toString());
        setEditingId(item.id);
    };

    return (
        <View style={styles.container}>
            {/* SWITCH */}
            <View style={styles.switchContainer}>
                {["cardio", "weight"].map((t) => (
                    <TouchableOpacity
                        key={t}
                        style={[
                            styles.switchButton,
                            type === t && styles.switchActive,
                        ]}
                        onPress={() => setType(t as WorkoutType)}
                    >
                        <Text
                            style={
                                type === t
                                    ? styles.switchTextActive
                                    : styles.switchTextInactive
                            }
                        >
                            {t === "cardio" ? "Cardio" : "Weight"}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                placeholder="Workout name (optional)"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TextInput
                placeholder="Duration (minutes)"
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
                style={styles.input}
            />

            <Text style={styles.calories}>
                🔥 {isNaN(calories) ? 0 : calories} kcal
            </Text>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveText}>
                    {editingId ? "Update Workout" : "Save Workout"}
                </Text>
            </TouchableOpacity>

            {/* LOGS */}
            {logs.map((item) => (
                <View key={item.id} style={styles.card}>
                    <View>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <Text style={styles.cardDetail}>
                            {item.duration} min · {item.type}
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.cardCalories}>
                            -{item.calories} kcal
                        </Text>
                        <TouchableOpacity onPress={() => handleEdit(item)}>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <Text style={styles.delete}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
}
