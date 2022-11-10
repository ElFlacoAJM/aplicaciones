import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList, Modal, } from 'react-native';

export default function App() {
  const [textItem, setTextITem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onHandleChangeItem = (t) => {
    setTextITem(t);
  };

  const addItem = ( ) => {
    setItemList(currentList => [
      ...currentList,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextITem("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.items}>
      <Text>{item.value}</Text>
      <Button title='presiona' />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text>Shoopping list</Text>
      <View style={styles.addItem}>
        <TextInput  
          value= {textItem} 
          style={styles.input} 
          placeholder='Add your item'
          onChangeText={onHandleChangeItem}
       />
        <Button title='ADD' onPress={addItem} />
      </View>
      <View>
        <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}/>
      </View>
      
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