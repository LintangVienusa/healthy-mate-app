import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useRegister } from '@/src/context/RegisterContext';
import { styles } from './styles';

export default function RegisterStep1() {
    const router = useRouter();
    const { data, update } = useRegister();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            <TextInput
                placeholder="Username"
                value={data.username}
                onChangeText={v => update({ username: v })}
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                value={data.password}
                onChangeText={v => update({ password: v })}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/register/step2')}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}