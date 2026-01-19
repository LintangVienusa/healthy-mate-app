import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        height: 64,
    },
    floatingWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    floatingButton: {
        top: -20,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#2ecc71',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
});
