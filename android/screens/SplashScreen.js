import React, {useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

export default function SplashScreen({navigation}) {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('HomeScreen');
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Transparent_BG_Quills_Logo.png')}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.shadowProp]}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.label}>Begin</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  button: {
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  logo: {
    width: 'auto',
    height: 75,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  label: {
    fontSize: 30,
    color: '#CCFFCC',
  },
});
