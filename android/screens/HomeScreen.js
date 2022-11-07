import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Map from '../components/Map';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Map />
        <TouchableOpacity
          title="Profile"
          style={styles.button}
          onPress={this.onPress}>
          <Text style={styles.label}>Profile</Text>
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
    marginBottom: 30,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    marginRight: 200,
    marginLeft: 20,
    marginTop: 30,
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
});
