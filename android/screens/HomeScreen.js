import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Map, {ClearQuills} from '../components/Map';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    console.log('current', Map.setQuills);
    return (
      <View style={styles.container}>
        <Map />
        <TouchableOpacity
          title="Profile"
          style={styles.button}
          onPress={this.onPress}>
          <Text style={styles.label}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Clear"
          onPress={e => {
            console.log(ClearQuills(e, Map.setQuills));
          }}
          style={styles.button}>
          <Text style={styles.label}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
