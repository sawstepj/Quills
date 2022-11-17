import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Map from '../components/Map';
import ClearQuillsHandler from '../components/ClearQuillsHandler';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Profile"
        style={styles.button}
        onPress={e => {
          this.props.navigation.navigate('ProfileScreen');
        }}>
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Clear"
        onPress={e => {
          ClearQuillsHandler();
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
