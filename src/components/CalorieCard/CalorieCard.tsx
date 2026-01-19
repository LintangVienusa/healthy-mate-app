import { View, Text } from 'react-native';
import { styles } from './styles';
import { ProgressRing } from '@/src/components/ProgressRing/ProgressRing';

export function CalorieCard() {
    const targetCalories = 2200;
    const consumedCalories = 1350;

    const progress = consumedCalories / targetCalories;
    const caloriesLeft = targetCalories - consumedCalories;

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Daily Calories</Text>
            <Text style={styles.subtitle}>Remaining today</Text>

            <View style={styles.content}>
                <ProgressRing
                    progress={progress}
                    value={caloriesLeft}
                    label="kcal left"
                />

                <View style={styles.summary}>
                    <Text>Target: {targetCalories} kcal</Text>
                    <Text>Burned: {consumedCalories} kcal</Text>
                </View>
            </View>
        </View>
    );
}