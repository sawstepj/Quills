import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  </View>
);

const widthProportion = '100%';
const heightProportion = '75%';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: heightProportion,
    width: widthProportion,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'red',
    backgroundColor: '#CCFFCC',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
