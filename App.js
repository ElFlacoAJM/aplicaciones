import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TextInput, View,TouchableOpacity,  FlatList, Pressable, Modal, Alert, } from 'react-native';

export default function App() {
  const [textItem, setTextITem] = useState("");
  const [List, setList] = useState([]);

  const onHandleChangeItem = (t) => {
    setTextITem(t);
  };

  const addItem = ( ) => {
    setList(currentList => [
      ...currentList,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextITem("");
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
          onChangeText={onHandleChangeItem}
       />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
        data={List}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}/>
      </View>
      <Modal
        animationType= "slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.centeredView}>
            <View style={{backgroundColor: "white"}}></View>
          </View>

      </Modal>
      
    </View>      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:30,
    marginTop:50,
  },
  addItem: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    
  },
  items: {
    marginTop:50,
    height:30,
    justifyContent: "center",
    alignItems: "center"
  }
});

<View>
    {itemList.map((item) =>(
      <View style={styles.items}>
        <Text>{item.value}</Text>
      </View>

    ))}
</View>