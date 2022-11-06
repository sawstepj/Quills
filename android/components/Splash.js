import React, {useRef, useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Transparent_BG_Quills_Logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '45%',
    height: '100%',
    width: '100%',
    backgroundColor: '#CCFFCC',
  },
  logo: {
    width: 'auto',
    height: 75,
  },
});
