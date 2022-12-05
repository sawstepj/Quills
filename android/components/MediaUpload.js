import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {UserContext} from '../global/GlobalContext';
import firebase from 'firebase/app';
import database from '../../Firebase/firebase';

export default function MediaUpload() {
  const {quills, file, setFile} = React.useContext(UserContext);
  //initialize firebase database
  const db = database;

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (file != null) {
      // If file selected then create FormData
      const fileToUpload = file;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      const docRef = db.collection('files').doc(quills.title);
      let res = await docRef.set({
        quill: quills.title,
        file: file,
      });
      let responseJson = await res.json();
      if (responseJson.status === 1) {
        alert('Upload Successful');
      }
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
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setFile(res);
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
        <Text style={styles.buttonTextStyle}>
          {file != null ? file.name : 'Select File'}
        </Text>
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
    backgroundColor: '#CCFFCC',
    height: '60%',
    flexDirection: 'row',
    top: '10%',
  },
  buttonStyle: {
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#EC729C',
    backgroundColor: '#EC729C',
    marginRight: 10,
    marginLeft: 10,
  },
  buttonTextStyle: {
    fontSize: 30,
    color: 'white',
  },
});
