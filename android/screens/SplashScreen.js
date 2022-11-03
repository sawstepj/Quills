import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';




class SplashScreen = () => {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('android\assets\Transparent_BG_Quills_Logo.png')}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
});