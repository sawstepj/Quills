import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import GenerateProfileJSON from '../functions/GenerateProfileJSON';
import {UserContext} from '../global/GlobalContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExportProfile(props) {
  const {quills} = React.useContext(UserContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  console.log('ExportProfile: ', props);

  return (
    <View>
      <Icon
        name="share-square-o"
        size={50}
        onPress={() => {
          props.profileLink;
        }}
      />
      <Modal visible={modalVisible}>
        <View>
          <TouchableOpacity onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
