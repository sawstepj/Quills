import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../android/assets/Transparent_BG_Quills_Logo.png')}
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
