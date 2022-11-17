import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Map, {ClearQuills} from '../components/Map';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Map ref={this.Map1} />
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
          ClearQuills(e, this.props.children.setQuills);
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
