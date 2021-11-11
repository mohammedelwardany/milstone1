import React, {useState, Component} from 'react';
import {View, Text, TouchableOpacity, Image, Alert, ScrollView} from 'react-native';
import {InputComp} from '../../component';
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker';
import axios from 'axios';
import {androidCameraPermission} from '../../../permissions';

import FormData from 'form-data';

const Regester = () => {
  const [email, setemail] = useState('');
  const [socialid, setsocialid] = useState('');
  const [image, setimage] = useState();
  const [imageuri, setimageuri] = useState();
  const [imagebase64, setimagebase64] = useState();
  const [singleFile, setSingleFile] = useState(null);

  /////////////////////////////////////////////////////////////////
//set mail w id



  //select photo
  const FileSelect = () =>
    Alert.alert('select', 'My Alert Msg', [
      {
        text: 'cancel',
        onPress: () => console.log('canceled'),
      },
      {
        text: 'open camera',
        onPress: () => alert('option will be here soon'),
        style: 'cancel',
      },
      {
        text: 'add from storage',
        onPress: () =>
          ImagePickerCropper.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            freeStyleCropEnabled: true,
            includeBase64: true,
          })
            .then(setImage => {
              console.log(setImage.path);
              console.log(setImage);
              setimage(setImage);
              setimageuri(setImage.path);
              setimagebase64(setImage.data);
              onFileSelected(setImage);
            })
            .catch(error => {}),
      },
    ]);


/////send
  const send = async () => {
    if (email.length<=4 && socialid.length<14){
      alert("please enter valid data")
    }
    else{
      const form_data=new FormData();
      form_data.append('email',email);
      form_data.append('ssn',socialid);
      form_data.append('image64',imagebase64);
    await axios.post('https://hsharaf-project.herokuapp.com/api/employee/', 
      
      form_data
    )
    .then(function (response) {
      console.log(response);
      alert("data sent saccessfuly :)");
      setemail("");
      setsocialid("");
      setimagebase64("");
    })
    .catch(function (error) {
      console.log(error);
      alert("there is some problem in your data , try again please :(");

    });}

  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.Text}> Welcome User </Text>
      <View style={styles.contcontainer}>
        
        <InputComp
          TypeOf={'default'}
          text={'name'}
          placeHolder={'please write your full name'}
          
          setChangeTxt={name=>setemail(name)}
        />
        <InputComp
          TypeOf={'numeric'}
          text={'Social Id'}
          placeHolder={'please write your social id'}
          // value={value}
          setChangeTxt={s=>setsocialid(s)}
        />
      </View>
      <TouchableOpacity onPress={FileSelect} style={styles.ptn}>
        <Text style={styles.ptntext}> select id photo </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={send}
        style={styles.ptn}>
        <Text style={styles.ptntext}> Send Now </Text>
        <Image
          style={styles.img}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/12/07/22/53/paper-planes-1081560_1280.png',height:300
          }}
        />
      </TouchableOpacity>
      <Image source={{uri:"data:image/jpeg;base64,"+imagebase64,height:200,width:300}}/>
    </View>
    </ScrollView>
  );
};

export {Regester};
