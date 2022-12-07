import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProfileComponent(props, navigation) {
  return (
    <View style={styles.container}>
      {props.quills.map((quill, index) => {
        return (
          <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            quills={quill}
            key={index}
            navigation={props.navigation}
            onPress={() => {
              props.navigation.navigate('QuillScreen', {
                quill: quill,
                index: index,
              });
            }}>
            <Text style={styles.label}>{index + 1}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    // height: '100%',
    width: 300,
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
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
