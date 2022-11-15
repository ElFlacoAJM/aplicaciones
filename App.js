import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TextInput, View,TouchableOpacity,  FlatList, Pressable, Modal, Alert, } from 'react-native';

export default function App() {
  const [textItem, setTextITem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChangeItem = (t) => setTextITem(t);

  const addItem = ( ) => {
    setList(currentState => [
      ...currentState,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextITem("");
  };

 const selectedItem = (id) => {
    setItemSelected(list.filter(item => item.id === id) [0])
    setModalVisible(true)
  } 

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

 


  const deleteITem = (id) => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
     );
     setItemSelected({});
     setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30}}>Shoopping list</Text>
      <View style={styles.inputcontainer}>
        <TextInput  
          placeholder='New Item'
          placeholderTextColor= "white"
          style={styles.inputStyle}
          value= {textItem} 
          onChangeText={onHandleChangeItem}
       />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      </View>

      <Modal
        animationType= "fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.centeredView}>
            <View style={{backgroundColor: "white"}}>
              <Text>Queres Eliminar este elemento? </Text>
              <Pressable 
                onPress={() => deleteITem()}
                style={{ backgroundColor: "red"}}
                >
                  <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
      </Modal>    
    </View>      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#344955",
    alignItems: "center",
    padding: 100,
    
  },
  inputcontainer: {
    marginTop:30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: "#F9AA33",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});