import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  Modal,
  FlatList
} from 'react-native';
import axios from 'axios';
import {RadioButton} from 'react-native-paper';
import {InputComp, ListItem} from '../../component';
import styles from './styles';
import {db} from '../../service/firebasedataconfig';   //import this from the file you create
import {collection, getDocs, addDoc} from 'firebase/firestore';  //import this
import ImageModal from 'react-native-image-modal';
/////////////////////////////////////////////////////////////////////////////////////////////













const Admin = () => {
  
  // const data = [
  //   { id: '30107', name: 'First item' , image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'},
  //   { id: '21040', name: 'Second item' , image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmlodnrWBtGSpRHuKltQrzumJilN_Shqonw&usqp=CAU'},
  //   { id: '23894', name: 'Fourth item' , image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
  // ];

  const [modal,setmodal]=useState(false);
  const [modaluri,setmodaluri]=useState();


  const [data,setdata]=useState()
  
  useEffect(()=>{
    axios.get('https://hsharaf-project.herokuapp.com/api/employee/')
    .then(function (response) {
      // handle success
      setdata(response.data)
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      
    })
    .then(function () {
      // always executed
    });
    
  },[])
  
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // const [users, setusers] = useState([]);     //represent array. okay it seems setusers is a function that's applied to var. users. useState? i don't know this shit
  //   const usersRef = collection(db, "users");   //map users collection (that is on firestore) to usersRef. In another word establish to a specific collection (database)
  
  //   const getusers = async () => {          //function called getusers
  //   const data = await getDocs(usersRef);
  //   console.log(data);                      //till here i understant it it await the api to map it to data. AFTER THIS I DON'T UNDERSTAND SHIT
  //   setusers(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
  // }; 
  //   useEffect(() => {                           //to display data. It's ad-hoc i think
  
  //     getusers();
  //   }, []);
  //////////////////////////////////////////////////////////
  // const [shopminders, setShopminders] = useState([]);
  //   useEffect(() => {
  //       const ref = db.collection('shopminders');
  //       ref.onSnapshot((query) => {
  //             const objs = [];
  //             query.forEach((doc) => {
  //                 objs.push({
  //                     id: doc.id,
  //                     ...doc.data(),
  //                   });
  //                 });
  //                 setShopminders(objs);
                  
  //               });
  //           }, [])
          
          /////////////////////////////////////////////////////////////

        // const modal=()=>{

        //   return (
        //     <ImageModal
        //       resizeMode="contain"
        //       imageBackgroundColor="#000000"
        //       style={{
        //         width: 250,
        //         height: 250,
        //       }}
        //       source={{
        //         uri: 'https://cdn.pixabay.com/photo/2019/07/25/18/58/church-4363258_960_720.jpg',
        //       }}
        //     />
        //   );

        // }







          return (<>
            <View style={styles.container}>
    

    
      <Text style={styles.Text}>Admin Pannel</Text>
      <View style={styles.topcont}>
        <View>
          <View style={styles.contcontainer}>
            <Text style={styles.Text2}>filter</Text>
            <TextInput style={styles.inputbox} placeholder="write to filter" />
          </View>
        </View>
        <View>
          <View style={styles.contcontainer}>
            <Text style={styles.Text2}>sort</Text>
            <TextInput style={styles.inputbox} placeholder="abc or 123" />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => console.log('imageuri')}
            style={styles.ptn}>
            <Text style={styles.ptntext}>e</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.downcont}>
        <View style={styles.mainrow}>
          <Text style={styles.Text2}>E-MAIL</Text>
          <Text style={styles.Text2}>Social Id</Text>
          <Text style={styles.Text2}>picture</Text>
        </View>
        
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.listt}
        renderItem={({ item }) => ( <>
          <Modal visible={modal}><View style={styles.modalCont}><Image source={{uri:modaluri}} style={styles.modalImg}/><TouchableOpacity style={styles.modalPtn} onPress={()=>setmodal(false)}><Text style={styles.modalPtnTxt}>RETURN</Text></TouchableOpacity></View></Modal>
          <ListItem Name={item.email} SocialId={item.ssn} OnImagePress={()=>{
            setmodaluri("data:image/jpeg;base64,"+item.imageurl)
            setmodal(true)}}/>
        </>
        )}
      />

    </View>
         </>
  );
};

export {Admin};
