import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

export function HomeHeader() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.wrapper, { paddingTop: insets.top + 8 }]}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image
                        source={{ uri: 'https://robohash.org/4CU.png?set=set1'}}
                        style={styles.avatar}
                    />

                    <View>
                        <Text style={styles.appName}>HealthyMate</Text>
                        <Text style={styles.greeting}>Hi, Lintang 👋</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
