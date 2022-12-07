import fs from 'react-native-fs';

export default function GenerateProfileJSON(quills) {
  const profileJson = {
    id: '1',
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
              media: quill.media.map(media => {
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

  //function to convert json into html
  function jsonToHTML(json) {
    //create a string to hold the html
    let html = '';
    //for each quill, create a div with the quill's title, description, and coordinates
    json.profile.quill.forEach(quill => {
      html += `<div class="quill">
        <h1>Quill ${quill.quillNumber}</h1>
        <h2>${quill.quillInfo.title}</h2>
        <p>${quill.quillInfo.description}</p>
        <p>Latitude: ${quill.quillInfo.coordinates.latitude}</p>
        <p>Longitude: ${quill.quillInfo.coordinates.longitude}</p>
        <div class="media">`;

      //for each media, create a div with the media's name, type, and uri
      quill.quillInfo.media.media.forEach(media => {
        html += `<div class="media">
          <h3>Media ${media.mediaNumber}</h3>
          <p>Name: ${media.mediaInfo.name}</p>
          <p>Type: ${media.mediaInfo.type}</p>
          <p>URI: ${media.mediaInfo.uri}</p>
        </div>`;
      });

      html += `</div>
      </div>`;
    });

    return html;
  }
  const html = jsonToHTML(profileJson);
  //create a file with the html
  console.log(html);
  fs.writeFile(fs.DocumentDirectoryPath + '/profile.html', html, 'utf8')
    .then(success => {
      console.log('FILE WRITTEN!');
    })
    .catch(err => {
      console.log(err.message);
    });
  //react native solution to open a file

  // const url = fs.DocumentDirectoryPath + '/profile.html';
  // //create link to open the file
  // Linking.openURL(url).catch(err => console.error('An error occurred', err));
}
