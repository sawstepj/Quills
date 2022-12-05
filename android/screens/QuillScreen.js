import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../global/GlobalContext';
import MediaUpload from '../components/MediaUpload';

export default function QuillScreen(props, navigation) {
  //get the quill object from the navigation object
  const quill = props.route.params.quill;
  const {quills, setQuills} = React.useContext(UserContext);
  //   console.log('quill coordinates', quill.coordinate);
  return (
    <View style={styles.container}>
      <View style={[styles.coordinateContainer, styles.shadowProp]}>
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
            onChange={event => {
              quill.title = event.nativeEvent.text;
              setQuills(quills);
            }}>
            {quill.title}
          </TextInput>
        </View>
        <Text style={styles.descriptionLabel}>Description:</Text>
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.label}
            multiline={true}
            onChange={event => {
              quill.description = event.nativeEvent.text;
              setQuills(quills);
            }}>
            {quill.description}
          </TextInput>
        </View>
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaLabel}>Media:</Text>
          <MediaUpload quill={quill} />
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
    boxShadow: '1px 2px 9px #888888',
  },
  contentContainer: {
    height: '68%',
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
    height: '11%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EC729C',
    borderRadius: 5,
    backgroundColor: '#EC729C',
  },
  mediaContainer: {
    height: '15%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    top: '-2.5%',
    height: '30%',
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
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
    marginTop: '2.5%',
  },
  label: {
    fontSize: 25,
    color: 'white',
  },
  descriptionLabel: {
    top: '-2.5%',
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
  mediaLabel: {
    fontSize: 30,
    color: 'black',
    right: '42.5%',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
