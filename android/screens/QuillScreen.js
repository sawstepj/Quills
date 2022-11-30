import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../global/GlobalContext';

export default function QuillScreen(props, navigation) {
  //get the quill object from the navigation object
  const quill = props.route.params.quill;
  const {quills, setQuills} = React.useContext(UserContext);
  //   console.log('quill coordinates', quill.coordinate);
  return (
    <View style={styles.container}>
      <View style={styles.coordinateContainer}>
        <Text style={styles.label}>{quills.indexOf(quill) + 1}</Text>
        <Text style={styles.label}>
          Coordinates: {quill.coordinate.latitude}, {quill.coordinate.longitude}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.nameLabel}>Name:</Text>
        <View style={styles.nameContainer}>
          <TextInput
            style={styles.label}
            onSubmitEditing={event => {
              quill.name = event.nativeEvent.text;
              setQuills(quills);
            }}>
            {quill.name}
          </TextInput>
        </View>
        <Text style={styles.descriptionLabel}>Description:</Text>
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.label}
            multiline={true}
            onSubmitEditing={event => {
              quill.description = event.nativeEvent.text;
              setQuills(quills);
            }}>
            {quill.description}
          </TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.label}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCFFCC',
    height: '100%',
  },
  coordinateContainer: {
    height: '17%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
    backgroundColor: '#EC729C',
  },
  contentContainer: {
    height: '63%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
    backgroundColor: '#CCFFCC',
  },
  nameContainer: {
    top: '-7.5%',
    height: '15%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
    backgroundColor: '#EC729C',
  },
  textualInput: {
    BackgroundColor: '#EC729C',
  },
  descriptionContainer: {
    height: '40%',
    width: '80%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
    backgroundColor: '#EC729C',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    marginBottom: 25,
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
  descriptionLabel: {
    fontSize: 30,
    color: 'black',
    right: '24%',
  },
  nameLabel: {
    fontSize: 30,
    color: 'black',
    right: '35%',
    top: '-10%',
  },
});
