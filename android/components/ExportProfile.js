import React from 'react';
import GenerateProfileJSON from '../functions/GenerateProfileJSON';
import {UserContext} from '../global/GlobalContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExportProfile(props) {
  const {quills} = React.useContext(UserContext);

  return (
    <Icon
      name="share-square-o"
      size={50}
      onPress={() => {
        GenerateProfileJSON(quills);
      }}
    />
  );
}
