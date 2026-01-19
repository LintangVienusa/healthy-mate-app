import { createContext, useContext, useState, ReactNode, useMemo } from 'react';

type Goal = 'muscle_gain' | 'lose_weight';
type Gender = 'male' | 'female';
type ActivityLevel =
    | 'sedentary'
    | 'light'
    | 'moderate'
    | 'active'
    | 'very_active';

interface RegisterData {
    username: string;
    password: string;
    goal?: Goal;
    gender?: Gender;
    height?: number;
    weight?: number;
    activityLevel?: ActivityLevel;
}

interface RegisterContextType {
    data: RegisterData;
    update: (values: Partial<RegisterData>) => void;
    bmr: number;
    tdee: number;
}

const RegisterContext = createContext<RegisterContextType | null>(null);
const activityMultiplier: Record<ActivityLevel, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
};

export function RegisterProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<RegisterData>({
        username: '',
        password: '',
    });

    const update = (values: Partial<RegisterData>) => {
        setData(prev => ({ ...prev, ...values }));
    };

    // BMR CALC (Mifflin-St Jeor)
    const bmr = useMemo(() => {
        if (!data.gender || !data.height || !data.weight) return 0;

        return data.gender === 'male'
            ? 10 * data.weight + 6.25 * data.height + 5
            : 10 * data.weight + 6.25 * data.height - 161;
    }, [data]);

    // TDEE (activity default = sedentary 1.2)
    const tdee = useMemo(() => {
        if (!bmr || !data.activityLevel) return 0;

        let base = bmr * activityMultiplier[data.activityLevel];

        if (data.goal === 'muscle_gain') base += 300;
        if (data.goal === 'lose_weight') base -= 300;

        return Math.round(base);
    }, [bmr, data.goal, data.activityLevel]);

    return (
        <RegisterContext.Provider value={{ data, update, bmr: Math.round(bmr), tdee }}>
            {children}
        </RegisterContext.Provider>
    );
}

export function useRegister() {
    const ctx = useContext(RegisterContext);
    if (!ctx) throw new Error('useRegister must be used inside RegisterProvider');
    return ctx;
}