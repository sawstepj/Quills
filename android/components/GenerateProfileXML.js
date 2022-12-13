import fs from 'react-native-fs';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Text,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GenerateProfileJSON(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const profileJson = {
    Profile: {
      //for each quill, create a json object with the quill's title, description, and coordinates
      Quills: {
        Quill: props.quills.map(quill => {
          return {
            QuillNumber: props.quills.indexOf(quill) + 1,
            QuillInfo: {
              Title: quill.title,
              Description: quill.description,
              Coordinates: quill.coordinate,
              Media: {
                MediaNumber: quill.media.length,
                MediaData: quill.media.map(media => {
                  return {
                    MediaNumber: quill.media.indexOf(media) + 1,
                    MediaInfo: {
                      Name: media.name,
                      Type: media.type,
                      Uri: media.uri,
                    },
                  };
                }),
              },
            },
          };
        }),
      },
    },
  };

  //function to convert profileJson into xml
  function jsonToXml(json) {
    var xml = '';
    for (var prop in json) {
      xml += json[prop] instanceof Array ? '' : '<' + prop + '>';
      if (json[prop] instanceof Array) {
        for (var array in json[prop]) {
          xml += '<' + prop + '>';
          xml += jsonToXml(new Object(json[prop][array]));
          xml += '</' + prop + '>';
        }
      } else if (typeof json[prop] == 'object') {
        xml += jsonToXml(new Object(json[prop]));
      } else {
        xml += json[prop];
      }
      xml += json[prop] instanceof Array ? '' : '</' + prop + '>';
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }

  const jsonToXmlString = jsonToXml(profileJson);
  //write jsonToXmlString to a file
  fs.writeFile(
    fs.ExternalDirectoryPath + '/profile.xml',
    jsonToXmlString,
    'utf8',
  )
    .then(success => {
      console.log('FILE WRITTEN!');
    })
    .catch(err => {
      console.log(err.message);
    });
  //create link to file
  const link = fs.ExternalDirectoryPath + '/profile.xml';
  console.log('link: ', link);
  return (
    <View style={styles.exportView}>
      <Icon
        name="share-square-o"
        size={50}
        onPress={() => {
          setModalVisible(true);
        }}
      />

      <Modal visible={modalVisible}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text>Open File</Text>
          </TouchableOpacity>
          <Icon name="xmark" size={50} onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  exportView: {
    top: '0%',
    alignSelf: 'center',
    marginLeft: '18.5%',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    padding: 20,
    backgroundColor: '#00000080',
  },
});
