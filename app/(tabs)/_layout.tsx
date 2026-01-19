import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import {FloatingLogButton} from "@/src/components/Navigation/FloatingLogButton";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#000000',
                }}
            />

            <Tabs.Screen
                name="log"
                options={{
                    tabBarButton: (props) => <FloatingLogButton {...props} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#000000',
                }}
            />
        </Tabs>
    );
}
