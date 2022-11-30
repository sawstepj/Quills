import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../global/GlobalContext';

export default function MediaUpload(props) {
  //allow for users to press a button to upload a photo

  return (
    //jsx to for button to upload photo
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.label}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
