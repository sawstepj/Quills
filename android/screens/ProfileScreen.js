import React, {useContext} from 'react';
import {Text, View, StyleSheet, Div} from 'react-native';
import ProfileComponent from '../components/ProfileComponent';
import {UserContext} from '../global/GlobalContext';

export default function ProfileScreen(props, route, navigation) {
  const {quills, setQuills, clearMarkers} = useContext(UserContext);
  //render the quills array
  return (
    <View style={styles.container}>
      <ProfileComponent
        quills={quills}
        setQuills={setQuills}
        clearMarkers={clearMarkers}
        navigation={props.navigation}
      />
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
