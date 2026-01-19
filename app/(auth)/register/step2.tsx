import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRegister } from '@/src/context/RegisterContext';
import { SelectableChip } from '@/src/components/SelectableChip';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export default function RegisterStep2() {
    const { data, update, bmr, tdee } = useRegister();
    const router = useRouter();

    const finish = async () => {
        await AsyncStorage.setItem('user_profile', JSON.stringify({
            ...data,
            bmr,
            tdee,
        }));

        router.replace('/home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Body Information</Text>

            <Text style={styles.sectionTitle}>Goal</Text>
            <View style={styles.row}>
                <SelectableChip
                    label="Muscle Gain"
                    selected={data.goal === 'muscle_gain'}
                    onPress={() => update({ goal: 'muscle_gain' })}
                />
                <SelectableChip
                    label="Lose Weight"
                    selected={data.goal === 'lose_weight'}
                    onPress={() => update({ goal: 'lose_weight' })}
                />
            </View>

            <Text style={styles.sectionTitle}>Gender</Text>
            <View style={styles.row}>
                <SelectableChip
                    label="Male"
                    selected={data.gender === 'male'}
                    onPress={() => update({ gender: 'male' })}
                />
                <SelectableChip
                    label="Female"
                    selected={data.gender === 'female'}
                    onPress={() => update({ gender: 'female' })}
                />
            </View>

            <Text style={styles.sectionTitle}>Activity Level</Text>
            <View style={styles.row}>
                <SelectableChip
                    label="Sedentary"
                    selected={data.activityLevel === 'sedentary'}
                    onPress={() => update({ activityLevel: 'sedentary' })}
                />
                <SelectableChip
                    label="Light"
                    selected={data.activityLevel === 'light'}
                    onPress={() => update({ activityLevel: 'light' })}
                />
                <SelectableChip
                    label="Moderate"
                    selected={data.activityLevel === 'moderate'}
                    onPress={() => update({ activityLevel: 'moderate' })}
                />
            </View>

            <TextInput
                placeholder="Height (cm)"
                keyboardType="numeric"
                onChangeText={v => update({ height: Number(v) })}
                style={styles.input}
            />

            <TextInput
                placeholder="Weight (kg)"
                keyboardType="numeric"
                onChangeText={v => update({ weight: Number(v) })}
                style={styles.input}
            />

            {bmr > 0 && (
                <View style={styles.card}>
                    <Text>BMR: {bmr} kcal</Text>
                    <Text>TDEE: {tdee} kcal</Text>
                </View>
            )}

            <TouchableOpacity style={styles.button} onPress={finish}>
                <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}