import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeScreenButtons(props) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.profileButton}>
        <TouchableOpacity
          title="Profile"
          style={[styles.button, styles.shadowProp]}
          onPress={e => {
            props.navigation.navigate('ProfileScreen');
          }}>
          <Text style={styles.label}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.clearButton}>
        <TouchableOpacity
          title="Clear"
          onPress={e => {
            props.clearMarkers(e);
          }}
          style={[styles.button, styles.shadowProp]}>
          <Text style={styles.label}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCFFCC',
    height: '12.5%',
    flexDirection: 'row',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#EC729C',
    borderBottomWidth: 0,
    marginTop: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  button: {
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 7.5,
  },
  profileButton: {
    width: '45%',
  },
  clearButton: {
    marginLeft: '10%',
    width: '45%',
  },
  label: {
    fontSize: 30,
    color: '#C',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
