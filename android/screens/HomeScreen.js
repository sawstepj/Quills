import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Map from '../components/Map';
import HomeScreenButtons from '../components/HomeScreenButtons';

export default function HomeScreen(props) {
  console.log('quills', props.quills);

  return (
    <View style={styles.container}>
      <Map
        quills={props.quills}
        addMarker={props.addMarker}
        clearMarkers={props.clearMarkers}
        setQuills={props.setQuills}
      />
      <HomeScreenButtons
        quills={props.quills}
        setQuills={props.setQuills}
        clearMarkers={props.clearMarkers}
        navigation={props.navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCFFCC',
    height: '100%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    marginRight: 200,
    marginLeft: 20,
    marginTop: 5,
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
});
