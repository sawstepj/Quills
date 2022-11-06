import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/Transparent_BG_Quills_Logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#00FF80',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
