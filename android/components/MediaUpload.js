import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {UserContext} from '../global/GlobalContext';

export default function MediaUpload(props) {
  const {file, setFile} = React.useContext(UserContext);

  const uploadImage = async () => {
    if (file != null) {
      console.log('CURRENT QUILL', props.quill);
      //set fileToUpload to the file object in file array
      const fileToUpload = {
        name: file.name,
        type: file.type,
        uri: file.uri,
      };
      props.quill.media.push(fileToUpload);
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: DocumentPicker.types.allFiles,
      });
      // Printing the log related to the file
      console.log('FILE LOG : ' + JSON.stringify(res[0]));
      // Setting the state to show single file attributes
      setFile(res[0]);
      //console log current file in media prop of current quill
      console.log('CURRENT QUILL', props.quill);
    } catch (err) {
      setFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    flexDirection: 'row',
    top: '-10%',
  },
  buttonStyle: {
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#e74a80',
    backgroundColor: '#EC729C',
    marginRight: 5,
    marginLeft: 5,
  },
  buttonTextStyle: {
    fontSize: 30,
    color: 'white',
  },
});
