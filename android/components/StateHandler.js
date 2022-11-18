import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Map from '../components/Map';
import HomeScreen from '../screens/HomeScreen';

export default function StateHandler(props) {
  //useState for quills
  const [quills, setQuills] = useState([
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: 'Test',
      description: 'Test',
    },
  ]);

  //addMarker function
  const addMarker = e => {
    setQuills([
      ...quills,
      {
        coordinate: e.nativeEvent.coordinate,
        title: 'Test',
        description: 'Test',
      },
    ]);
  };

  //clearMarkers function
  const clearMarkers = e => {
    setQuills([]);
  };

  console.log('MAP', Map);
  console.log('HOMESCREEN', HomeScreen);

  return (
    <View style={styles.container}>
      <Map
        quills={quills}
        addMarker={addMarker}
        clearMarkers={clearMarkers}
        setQuills={setQuills}
      />
      <HomeScreen
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
