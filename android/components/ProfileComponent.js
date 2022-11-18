import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProfileComponent({navigation}) {
  //component that holds a single quill and its information
  //for repeated use
  return (
    <TouchableOpacity title="Quill" style={styles.button}>
      <Text style={styles.label}>Quill</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '10%',
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
