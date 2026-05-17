import { Link } from 'expo-router'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 items-center justify-center">
        <Link href="/SplashScreen">
          <Text>Go to Splash Screen</Text>
        </Link>
        <Link href="/OnBoardingScreen">
          <Text>Go to On Boarding Screen</Text>
        </Link>
      </View>
      <StatusBar barStyle={"light-content"} />
    </SafeAreaView>
  )
}

export default Index