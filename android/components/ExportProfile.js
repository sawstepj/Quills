import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GenerateProfileJSON from '../functions/GenerateProfileJSON';
import {UserContext} from '../global/GlobalContext';

export default function ExportProfile(props) {
  //allow for users to press a button to upload a photo
  const {quills, setQuills} = React.useContext(UserContext);
  return (
    //jsx to for button to upload photo
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        //onPress, call GenerateProfileJSON() and then console.log the result
        onPress={() => {
          console.log(GenerateProfileJSON(quills));
        }}>
        <Text style={styles.label}>Export Profile</Text>
      </TouchableOpacity>
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
  button: {
    width: '90%',
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
