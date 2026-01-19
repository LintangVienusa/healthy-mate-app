import { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { styles } from './styles';

interface ProgressRingProps {
    size?: number;
    strokeWidth?: number;
    progress: number; // 0 - 1
    value: number;
    label?: string;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function ProgressRing({
                                 size = 120,
                                 strokeWidth = 12,
                                 progress,
                                 value,
                                 label = 'kcal left',
                             }: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const animatedProgress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedProgress, {
            toValue: progress,
            duration: 800,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const strokeDashoffset = animatedProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [circumference, 0],
    });

    return (
        <View style={{ width: size, height: size }}>
            <Svg width={size} height={size}>
                {/* Background */}
                <Circle
                    stroke="#dadada"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Progress */}
                <AnimatedCircle
                    stroke="#2ecc71"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>

            {/* Center Text */}
            <View style={styles.center}>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
}