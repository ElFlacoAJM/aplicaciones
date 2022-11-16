import { useState } from 'react';
import {  StyleSheet, Text, TextInput, View,TouchableOpacity,  FlatList, Pressable, Modal, Button, } from 'react-native';

export default function App() {
  const [textItem, setTextITem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextITem(t);

  const addItem = ( ) => {
    setList((currentState) => [
      ...currentState,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextITem("");
  };

 const selectedItem = (id) => {
    setItemSelected(list.filter(item => item.id === id) [0]);
    setModalVisible(true);
  }; 
  
  const deleteITem = (id) => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
     );
     setItemSelected({});
     setModalVisible(false);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30}}>Shoopping list</Text>
      <View style={styles.inputcontainer}>
        <TextInput  
          placeholder='New Item'
          placeholderTextColor= "white"
          style={styles.inputStyle}
          value= {textItem} 
          onChangeText={onHandleChange}
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
    backgroundColor: "blue",
    alignItems: "center",
    padding: 100,
    
  },
  inputcontainer: {
    marginTop:50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
  },
  button: {
    backgroundColor: "green",
    height: 35,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});