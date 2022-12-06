import Realm from 'realm';

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
            media: quill.media,
          },
        };
      }),
    },
  };
  return profileJson;
}
