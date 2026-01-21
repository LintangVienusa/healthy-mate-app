import { View, Text } from "react-native";
import { useState } from "react";
import { LogModeSwitch } from "@/src/components/Log/LogModeSwitch";
import { MealForm } from "@/src/components/Log/MealForm";

export default function LogScreen() {
    const [mode, setMode] = useState<"meal" | "workout">("meal");

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: "700" }}>
                Log Activity
            </Text>

            <LogModeSwitch mode={mode} onChange={setMode} />

            {mode === "meal" && <MealForm />}

        </View>
    );
}