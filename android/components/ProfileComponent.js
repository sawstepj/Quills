import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Map, {ClearQuills} from '../components/Map';

export default function ProfileComponent({navigation}) {
  //component that holds a single quill and its information
  //for repeated use
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Quill"
        style={styles.button}
        onPress={e => {
          navigation.navigate('HomeScreen');
        }}>
        <Text style={styles.label}>Quill</Text>
      </TouchableOpacity>
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
