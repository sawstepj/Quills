import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Map() {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  //get initial location

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

  // Add a marker to the map
  const addMarker = e => {
    setQuills([
      ...quills,
      {
        coordinate: {
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        onPress={e => {
          addMarker(e);
        }}>
        {quills.map(quill => (
          <Marker
            key={quill.coordinate.latitude}
            coordinate={quill.coordinate}
            title={quill.title}
            description={quill.description}
            //add marker to array
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '82.5%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
