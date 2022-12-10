import fs from 'react-native-fs';

export default function GenerateProfileJSON(quills) {
  const profileJson = {
    Profile: {
      //for each quill, create a json object with the quill's title, description, and coordinates
      Quills: {
        Quill: quills.map(quill => {
          return {
            QuillNumber: quills.indexOf(quill) + 1,
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

  console.log(link);
}
