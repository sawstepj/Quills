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
      media: file,
    },
  ]);
  //addMarker function
  const addMarker = e => {
    setQuills([
      ...quills,
      {
        coordinate: e.nativeEvent.coordinate,
        title: 'New Quill',
        description: 'Here is a new quill',
        media: file,
      },
    ]);
  };

  //clearMarkers function
  const clearMarkers = e => {
    setQuills([]);
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
      }}>
      {subPages}
    </UserContext.Provider>
  );
}
