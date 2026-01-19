import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

interface Props {
    label: string;
    selected: boolean;
    onPress: () => void;
}

export function SelectableChip({ label, selected, onPress }: Props) {
    return (
        <TouchableOpacity
            style={[styles.chip, selected && styles.active]}
            onPress={onPress}
        >
            <Text style={[styles.text, selected && styles.activeText]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    chip: {
        flex: 1,
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#e8f8f0',
        alignItems: 'center',
    },
    active: {
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.textPrimary,
        fontWeight: '600',
    },
    activeText: {
        color: '#fff',
    },
});