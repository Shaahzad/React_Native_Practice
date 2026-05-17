import { StyleSheet, Text, View } from 'react-native'
import Svg, { Rect, Path, Line } from "react-native-svg";

const Logo = () => {
  return (
    <Svg viewBox="0 0 100 100" width={300} height={300}>
      {/* <Rect width="30" height="30" rx="24" fill="#4F46E5" /> */}

      <Path
        d="M32,25 C32,22.8 33.8,21 36,21 L64,21 C66.2,21 68,22.8 68,25 L68,75 C68,77.2 66.2,79 64,79 L36,79 C33.8,79 32,77.2 32,75 Z"
        fill="#FFFFFF"
      />

      <Path
        d="M36,21 L64,21 C66.2,21 68,22.8 68,25 L68,32 L32,32 L32,25 C32,22.8 33.8,21 36,21 Z"
        fill="#6366F1"
      />

      <Line
        x1="42"
        y1="42"
        x2="58"
        y2="42"
        stroke="#9CA3AF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <Line
        x1="42"
        y1="52"
        x2="54"
        y2="52"
        stroke="#9CA3AF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <Path
        d="M42,64 L48,64 L62,50 C63,49 63,47 62,46 L60,44 C59,43 57,43 56,44 L42,58 Z"
        fill="#10B981"
      />
    </Svg>
  );
};


const SplashScreen = () => {
    return (
        <View className='flex-1 justify-center items-center gap-0 bg-[#0F0F10]'>
            <Logo/>
            <Text className='text-[#FFFFFF] -mt-12 text-[16px]'>Notes App</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})