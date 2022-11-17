import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text>Profile</Text>
            <TouchableOpacity title="Back" style={styles.button} onPress={e => {
                navigation.navigate('HomeScreen');
            }}>
                <Text style={styles.label}>Back</Text>
            </TouchableOpacity>
        </View>
        );
}

const styles = StyleSheet.create({
            container: {
              backgroundColor: '#CCFFCC',
              height: '100%',
            },
            button: {
              flex: 1,
              alignItems: 'center',
              borderWidth: 4,
              borderRadius: 5,
              marginBottom: 5,
              borderColor: '#EC729C',
              backgroundColor: '#EC729C',
              marginRight: 200,
              marginLeft: 20,
              marginTop: 5,
            },
            label: {
              fontSize: 30,
              color: 'white',
            },
    
        });