import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Map from '../components/Map';
import HomeScreenButtons from '../components/HomeScreenButtons';
import {UserContext} from '../global/GlobalContext';

export default function HomeScreen(props) {
  //grab the quills array and the setQuills function from the global context
  const {quills, setQuills, addMarker, clearMarkers} = useContext(UserContext);

  console.log('quills', quills);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>HOME</Text>
      </View>
      <Map
        quills={quills}
        addMarker={addMarker}
        clearMarkers={clearMarkers}
        setQuills={setQuills}
      />
      <HomeScreenButtons
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
    height: '100%',
    backgroundColor: '#CCFFCC',
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
  headerContainer: {
    // flex: 1,
    height: '7.5%',
    backgroundColor: '#EC729C',
    borderWidth: 4,
    borderColor: '#e74a80',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  header: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginTop: '2.5%',
  },
});
