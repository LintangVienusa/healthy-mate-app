import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
    },
    subtitle: {
        fontSize: 12,
        color: '#000000',
        marginTop: 4,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        gap: 16,
    },
    summary: {
        flex: 1,
        gap: 6,
    },
});