import { ScrollView, View } from 'react-native';
import { HomeHeader } from '@/src/components/Header/HomeHeader'
import { CalorieCard } from '@/src/components/CalorieCard/CalorieCard';
import { StatCard } from '@/src/components/StatCard/StatCard';
import { styles } from './styles';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <HomeHeader />
            <CalorieCard />

            <View style={styles.statsRow}>
                <StatCard title="Steps" value="Not Connected" icon="👟" />
                <StatCard title="Exercise" value="0 cal" icon="🔥" />
            </View>
        </ScrollView>
    );
}