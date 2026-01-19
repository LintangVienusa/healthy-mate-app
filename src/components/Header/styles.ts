import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffffff',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
    },
    appName: {
        fontSize: 12,
        color: '#000000',
        fontWeight: '500',
    },
    greeting: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
    },
});
