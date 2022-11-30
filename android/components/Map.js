import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect, useRef, Fragment} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Map(props) {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        quillsArray={props.quills}
        onPress={e => {
          props.addMarker(e);
        }}>
        {props.quills.map(quill => (
          <Marker
            key={quill.coordinate.latitude}
            coordinate={quill.coordinate}
            title={'Quill ' + (props.quills.indexOf(quill) + 1)}
            description={quill.description}
            name={quill.name}
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
