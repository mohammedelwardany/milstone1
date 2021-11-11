import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {InputComp} from '../../component';
import styles from './styles';
const AdminAuth = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Admin View</Text>
    <View style={styles.contcontainer}>
      <InputComp
        TypeOf={'visible-password'}
        text={'Password'}
        placeHolder={'if you an admin please enter password'}
      />
    </View>
      <TouchableOpacity
        onPress={() => console.log("imageuri")}
        style={styles.ptn}>
        <Text style={styles.ptntext}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};

export {AdminAuth};
