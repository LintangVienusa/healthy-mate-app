import { View, Text } from 'react-native';
import { styles } from './styles';

interface StatCardProps {
    title: string;
    value: string | number;
    icon?: string;
}

export function StatCard({ title, value, icon }: StatCardProps) {
    return (
        <View style={styles.card}>
            <Text>{icon}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}