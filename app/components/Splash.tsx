import React from 'react'
import { Image, View } from 'react-native'

const Splash = () => {
  return (
    <View className='flex-1 bg-white'>
      <Image
        className='mt-10'
        source={require('../../assets/splash-img/Ellipse1.png')}
      />
      <View className='flex-1 justify-center items-center'>
        <Image
          source={require('../../assets/splash-img/Logo.png')}
        />
      </View>
      <Image
        className='absolute bottom-0 right-0'
        source={require('../../assets/splash-img/Ellipse2.png')}
      />
    </View>
  )
}

export default Splash