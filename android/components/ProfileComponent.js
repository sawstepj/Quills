import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProfileComponent(props, navigation) {
  //modular component for profile screen
  //returns one quill
  return (
    <View>
      {props.quills.map((quill, index) => {
        return (
          <TouchableOpacity
            style={styles.button}
            quills={quill}
            key={index}
            navigation={props.navigation}>
            <Text style={styles.label}>{quill.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
});
