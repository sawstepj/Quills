import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Map from '../components/Map';
import HomeScreen from '../screens/HomeScreen';

export default function ClearQuillsHandler(props) {
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

  return (
    //pass state to Map
    <Map quills={quills} />
  );
}
