import fs from 'react-native-fs';

export default function GenerateProfileJSON(quills) {
  const profileJson = {
    profile: {
      //for each quill, create a json object with the quill's title, description, and coordinates
      quill: quills.map(quill => {
        return {
          quillNumber: quills.indexOf(quill) + 1,
          quillInfo: {
            title: quill.title,
            description: quill.description,
            coordinates: quill.coordinate,
            media: {
              mediaNumber: quill.media.length,
              mediaData: quill.media.map(media => {
                return {
                  mediaNumber: quill.media.indexOf(media) + 1,
                  mediaInfo: {
                    name: media.name,
                    type: media.type,
                    uri: media.uri,
                  },
                };
              }),
            },
          },
        };
      }),
    },
  };

  //function to convert rofileJson into xml
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

  console.log(jsonToXml(profileJson));
}
