import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Map from '../components/Map';
import HomeScreenButtons from '../components/HomeScreenButtons';
import {UserContext} from '../global/GlobalContext';

export default function HomeScreen(props) {
  //grab the quills array and the setQuills function from the global context
  const {quills, setQuills, addMarker, clearMarkers} = useContext(UserContext);
  console.log('quills', quills);
  return (
    <View style={styles.container}>
      <Map
        quills={quills}
        addMarker={addMarker}
        clearMarkers={clearMarkers}
        setQuills={setQuills}
      />
      <HomeScreenButtons
        quills={quills}
        setQuills={setQuills}
        clearMarkers={clearMarkers}
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
  label: {
    fontSize: 30,
    color: 'white',
  },
});
