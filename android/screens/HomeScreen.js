import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Map from '../components/Map';
import HomeScreenButtons from '../components/HomeScreenButtons';
import {UserContext} from '../global/GlobalContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen(props) {
  //grab the quills array and the setQuills function from the global context
  const {quills, setQuills, addMarker, clearMarkers} = useContext(UserContext);

  console.log('quills', quills);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>QUILLS</Text>
      </View>
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
    height: '100%',
    backgroundColor: '#CCFFCC',
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
  headerContainer: {
    // flex: 1,
    height: '7.5%',
    backgroundColor: '#EC729C',
  },
  header: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginTop: '2.5%',
  },
});
