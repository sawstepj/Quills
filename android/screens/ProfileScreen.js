import React, {useContext} from 'react';
import {Text, View, StyleSheet, Div, TouchableOpacity} from 'react-native';
import ProfileComponent from '../components/ProfileComponent';
import {UserContext} from '../global/GlobalContext';

export default function ProfileScreen(props, route, navigation) {
  const {quills, setQuills, clearMarkers} = useContext(UserContext);
  //render the quills array
  return (
    <View style={styles.container}>
      <View style={styles.profileComponentContainer}>
        <ProfileComponent
          style={styles.profileComponent}
          quills={quills}
          setQuills={setQuills}
          clearMarkers={clearMarkers}
          navigation={props.navigation}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => clearMarkers()}>
          <Text style={styles.label}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.label}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCFFCC',
    height: '100%',
  },
  profileComponent: {
    flex: 1,
    flexDirection: 'column',
  },
  profileComponentContainer: {
    height: '82.5%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    inline: 'flex',
    height: '40%',
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
