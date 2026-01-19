import { Stack } from 'expo-router';
import { RegisterProvider } from '@/src/context/RegisterContext';

export default function RegisterLayout() {
    return (
        <RegisterProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </RegisterProvider>
    );
}