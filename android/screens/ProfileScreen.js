import React from 'react';
import {Text, View, StyleSheet, Div} from 'react-native';
import ProfileComponent from '../components/ProfileComponent';

export default function ProfileScreen(props) {
  //get marker data from HomeScreen
  const markerData = props.route.params.markerData;
  console.log('MARKER DATA==>', markerData);
  return (
    <View style={styles.container}>
      {/* need to use some sort of list formatting for profileComponents */}
      <ProfileComponent />
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
