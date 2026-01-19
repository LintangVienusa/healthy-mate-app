import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors'
import { Typography } from '@/constants/typography';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <TextInput
                placeholder="Username"
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/register/step1')}>
                <Text style={styles.link}>Create new account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        ...Typography.title,
        textAlign: 'center',
        marginBottom: 4,
    },
    subtitle: {
        ...Typography.body,
        textAlign: 'center',
        color: Colors.textSecondary,
        marginBottom: 24,
    },
    sectionTitle: {
        ...Typography.subtitle,
        marginTop: 16,
    },
    input: {
        backgroundColor: Colors.card,
        borderRadius: 12,
        padding: 14,
        marginTop: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 8,
    },
    chip: {
        flex: 1,
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#e8f8f0',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 14,
        marginTop: 24,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
    },
    link: {
        marginTop: 16,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: '600',
    },
});