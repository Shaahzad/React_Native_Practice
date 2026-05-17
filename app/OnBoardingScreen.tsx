import { router } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = () => {
  return (
    <Onboarding
      onSkip={() => router.replace('/Login')}
      onDone={() => router.replace('/Login')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/react-logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/react-logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/react-logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/react-logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})