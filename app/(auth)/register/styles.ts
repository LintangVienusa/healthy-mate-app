import { StyleSheet, TextStyle, ViewStyle, TextInputProps } from 'react-native';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';

interface Styles {
    container: ViewStyle;
    title: TextStyle;
    subtitle: TextStyle;
    sectionTitle: TextStyle;
    input: [ViewStyle, TextInputProps];
    row: ViewStyle;
    button: ViewStyle;
    buttonText: TextStyle;
    back: TextStyle;
    card: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        ...Typography.title,
        textAlign: 'center',
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
    back: {
        textAlign: 'center',
        marginTop: 16,
        color: Colors.textSecondary,
    },
    card: {
        backgroundColor: Colors.card,
        padding: 16,
        borderRadius: 14,
        marginTop: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
});