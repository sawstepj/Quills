import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeScreenButtons({props, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Profile"
        style={styles.button}
        onPress={e => {
          navigation.navigate('ProfileScreen', {
            quills: props.quills,
            setQuills: props.setQuills,
            clearMarkers: props.clearMarkers,
          });
        }}>
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Clear"
        onPress={e => {
          props.clearMarkers(e);
        }}
        style={styles.button}>
        <Text style={styles.label}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCFFCC',
    height: '12.5%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    marginBottom: 1,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    marginRight: 200,
    marginLeft: 20,
    marginTop: 3,
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
});
