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
import Icon from 'react-native-vector-icons/FontAwesome';

export default function QuillScreen(props, navigation) {
  //get the quill object from the navigation object
  const quill = props.route.params.quill;
  const {quills, setQuills} = React.useContext(UserContext);
  //   console.log('quill coordinates', quill.coordinate);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-left"
          size={40}
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.header}>Quill {quills.indexOf(quill) + 1}</Text>
      </View>
      <View style={[styles.coordinateContainer, styles.shadowProp]}>
        <Text style={styles.coordinateLabel}>Coordinates</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.coordinateLatitude}>
          {/* latitude trimmed to 4 decimal places */}
          Latitude: {quill.coordinate.latitude.toFixed(5)}
        </Text>
        <Text style={styles.coordinateLongitude}>
          Longitude: {quill.coordinate.longitude.toFixed(5)}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameLabel}>Name</Text>
          <View style={styles.horizontalLine} />
          <TextInput
            style={styles.label}
            onChange={event => {
              quill.title = event.nativeEvent.text;
              setQuills(quills);
            }}>
            {quill.title}
          </TextInput>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description</Text>
          <View style={styles.horizontalLine} />
          <TextInput
            style={styles.label}
            multiline={true}
            //set placeholder text
            onChange={event => {
              quill.description = event.nativeEvent.text;
              setQuills(quills);
            }}>
            {quill.description}
          </TextInput>
        </View>
        <View style={styles.mediaLabelContainer}>
          <Text style={styles.mediaLabel}>Media</Text>
          <View style={styles.mediaHorizontalLine} />
        </View>
        <View style={styles.mediaUploadContainer}>
          <MediaUpload quill={quill} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    top: '2%',
    alignSelf: 'center',
    marginLeft: '2%',
  },
  horizontalLine: {
    borderBottomColor: '#e74a80',
    borderBottomWidth: 4,
    width: '100%',
  },
  mediaHorizontalLine: {
    top: '-70%',
    borderBottomColor: '#e74a80',
    borderBottomWidth: 4,
    width: '100%',
  },
  header: {
    top: '2%',
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginLeft: '27%',
  },
  headerContainer: {
    bottom: '3%',
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
  container: {
    backgroundColor: '#CCFFCC',
    height: '100%',
  },
  coordinateContainer: {
    height: '15%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#e74a80',
    borderRadius: 5,
    backgroundColor: '#EC729C',
    boxShadow: '1px 2px 9px #888888',
  },
  contentContainer: {
    height: '68%',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#e74a80',
    borderRadius: 5,
    backgroundColor: '#CCFFE6',
  },
  nameContainer: {
    top: '-5.5%',
    height: '15%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#e74a80',
    borderRadius: 5,
    backgroundColor: '#EC729C',
  },
  mediaLabelContainer: {
    top: '2.5%',
    height: '25%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC729C',
    borderColor: '#e74a80',
    borderWidth: 4,
    borderRadius: 5,
  },
  mediaUploadContainer: {
    top: '12.5%',
    height: '15%',
  },
  descriptionContainer: {
    top: '-2.5%',
    height: '25%',
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#e74a80',
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
    top: '-8%',
    fontSize: 30,
    color: 'white',
    right: '24%',
    marginBottom: -10,
  },
  nameLabel: {
    top: '6%',
    fontSize: 30,
    color: 'white',
    right: '35%',
  },
  mediaLabel: {
    top: '-5%',
    flex: 1,
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-start',
  },
  coordinateLabel: {
    fontSize: 30,
    color: 'white',
    flex: 1,
    alignSelf: 'flex-start',
  },
  coordinateLatitude: {
    fontSize: 25,
    color: 'white',
  },
  coordinateLongitude: {
    fontSize: 25,
    color: 'white',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
