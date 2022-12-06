import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {UserContext} from '../global/GlobalContext';
import Realm from 'realm';

export default function MediaUpload() {
  const {quills, file, setFile, ProfileSchema} = React.useContext(UserContext);

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (file != null) {
      // If file selected then create FormData
      const fileToUpload = file;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      //write image to realm
      (async () => {
        const mediaUpload = {
          name: fileToUpload.name,
          type: fileToUpload.type,
          uri: fileToUpload.uri,
        };
        const realm = await Realm.open({
          path: 'QuillDB',
          schema: [ProfileSchema],
        });
        realm.write(() => {
          realm.create(
            'Profile',
            {
              _id: 1,
              quills: [
                {
                  _id: 1,
                  media: [mediaUpload],
                },
              ],
            },
            realm.create('Quill', {}),
          );
        });
      })();
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
      });
      // Printing the log related to the file
      console.log('FILE LOG : ' + JSON.stringify(res));
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
