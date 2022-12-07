import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreenButtons(props) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.undoButton}>
        <Icon
          name="undo"
          size={50}
          onPress={e => {
            props.setQuills(props.quills.slice(0, -1));
          }}
        />
      </View>
      <View style={styles.profileButton}>
        <Icon
          name="user"
          size={50}
          // style={styles.shadowProp}
          onPress={e => {
            props.navigation.navigate('ProfileScreen');
          }}
        />
      </View>
      <View style={styles.clearButton}>
        <Icon
          name="trash"
          size={50}
          onPress={e => {
            props.clearMarkers(e);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '-10%',
    height: '15%',
    backgroundColor: '#CCFFCC',
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#EC729C',
    borderBottomWidth: 3,
    marginTop: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  clearButton: {
    marginTop: 12,
    marginLeft: '25%',
  },
  undoButton: {
    marginTop: 12,
    marginLeft: '10%',
  },
  profileButton: {
    marginTop: 12,
    marginLeft: '24%',
    alignItems: 'center',
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
