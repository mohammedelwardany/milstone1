import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {InputComp} from '../../component';
import styles from './styles';
const ListItem = ({Name,SocialId,OnImagePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.downcont}>
        <View style={styles.mainrow}>
          <Text style={styles.Text2}>{Name}</Text>
          <Text style={styles.Text2}>{SocialId}</Text>
          <TouchableOpacity
          onPress={OnImagePress}
          >
            <Image style={styles.img}
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {ListItem};
