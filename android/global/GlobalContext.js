import React, {useState} from 'react';

export const UserContext = React.createContext('');

export default function GlobalContext({subPages}) {
  const [file, setFile] = useState([
    {
      name: 'test',
      type: 'test',
      uri: 'test',
    },
  ]);
  const [quills, setQuills] = useState([
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: 'Example',
      description: 'Here is an example of a quill',
      media: [],
    },
  ]);
  //addMarker function
  const addMarker = e => {
    setQuills([
      ...quills,
      {
        coordinate: e.nativeEvent.coordinate,
      },
    ]);
  };

  //clearMarkers function
  const clearMarkers = e => {
    setQuills([]);
  };

  const QuillMediaSchema = {
    name: 'QuillMedia',
    embedded: true,
    properties: {
      mediaType: 'string',
      mediaURL: 'string',
    },
  };
  const QuillSchema = {
    name: 'Quill',
    embedded: true,
    properties: {
      quillNumber: 'int',
      quillName: 'string',
      quillDescription: 'QuillDescription',
      quillMedia: {type: 'list', objectType: 'QuillMedia'},
    },
  };
  const ProfileSchema = {
    name: 'Profile',
    primaryKey: 'id',
    properties: {
      _id: 'objectId',
      quills: {type: 'list', objectType: 'Quill'},
    },
  };

  return (
    <UserContext.Provider
      value={{
        quills,
        setQuills,
        addMarker,
        clearMarkers,
        file,
        setFile,
        ProfileSchema,
        QuillSchema,
        QuillMediaSchema,
      }}>
      {subPages}
    </UserContext.Provider>
  );
}
