import React, {useState} from 'react';

export const UserContext = React.createContext('');

export default function GlobalContext({subPages}) {
  const [quills, setQuills] = useState([
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: 'Test',
      description: 'Test',
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
  return (
    <UserContext.Provider value={{quills, setQuills, addMarker, clearMarkers}}>
      {subPages}
    </UserContext.Provider>
  );
}
