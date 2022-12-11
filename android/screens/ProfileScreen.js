import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ProfileComponent from '../components/ProfileComponent';
import {UserContext} from '../global/GlobalContext';
import ExportProfile from '../components/ExportProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import GenerateProfileJSON from '../functions/GenerateProfileJSON';

export default function ProfileScreen(props, route, navigation) {
  const {quills, setQuills, clearMarkers} = useContext(UserContext);
  //render the quills array
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-left"
          size={40}
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.header}>PROFILE</Text>
      </View>
      <ScrollView style={styles.profileComponentContainer}>
        <ProfileComponent
          style={styles.profileComponent}
          quills={quills}
          setQuills={setQuills}
          clearMarkers={clearMarkers}
          navigation={props.navigation}
        />
      </ScrollView>
      <View style={styles.buttons}>
        <Icon
          name="undo"
          size={50}
          onPress={e => {
            setQuills(quills.slice(0, -1));
          }}
        />
        <View style={styles.exportView}>
          <View>
            <GenerateProfileJSON quills={quills} />
          </View>
        </View>
        <Icon
          name="trash"
          size={50}
          style={styles.clearButton}
          onPress={e => {
            clearMarkers(e);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginLeft: '23.5%',
  },
  container: {
    backgroundColor: '#CCFFCC',
    height: '100%',
  },
  headerContainer: {
    flex: 1,
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#EC729C',
    borderWidth: 4,
    borderColor: '#e74a80',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  profileComponent: {
    flex: 1,
    flexDirection: 'column',
  },
  profileComponentContainer: {
    top: '0%',
    height: '76%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
    backgroundColor: '#CCFFE6',
  },
  backButton: {
    marginTop: 5,
    marginLeft: 10,
  },
  buttons: {
    top: '0%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
  },
  clearButton: {
    marginLeft: '20%',
  },
  exportView: {
    top: '0%',
    alignSelf: 'center',
    marginLeft: '18.5%',
  },
  label: {
    fontSize: 30,
    color: 'white',
  },
});
