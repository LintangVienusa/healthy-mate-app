import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        minHeight: 110,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 3,
    },
    title: {
        fontSize: 14,
        color: '#000000',
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
    },
});