import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '@/constants/colors';

export default function Home() {
    const calorieTarget = 2200;
    const calorieIntake = 1450;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Progress.Circle
                size={180}
                progress={calorieIntake / calorieTarget}
                showsText
                thickness={12}
                color={Colors.primary}
            />

            <Text style={{ marginTop: 16 }}>
                {calorieIntake} / {calorieTarget} kcal
            </Text>
        </View>
    );
}