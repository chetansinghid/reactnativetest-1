import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import Options from './components/Options';

var idCounter = 0;

export default function App() {
  const [items, setItems] = useState([]);
  let countryArray = [];
  let MAX_ITEM = 5;
  
  function deleteItem(itemId) {
    setItems((prevItems) => {
      return prevItems.filter(item => item.id != itemId);
    })
  };

  function addItem(item) {
    if(!item.text) {
      Alert.alert("Add error!", "Field can't be empty", {text: "Okay"});
    }
    else if(items.length == MAX_ITEM) {
      Alert.alert("Add error!", "No more items can be added", {text: "Okay"});
    }
    else {
      countryArray.push({id: `${idCounter++}`, text: item.text});
      countryArray.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0));
      if (countryArray.length == 5) {
        setItems(prevItems => {
          return countryArray;
        });
      }
    }
    
  };

  function deleteAllItems() {
    if(items.length > 0) {
      setItems([]);
      countryArray = [];
    }
    else {
      Alert.alert("Error", "Nothing to clear", {text: "Okay"});
    }
   
  }

  function showItemsAlert() {
    if(countryArray.length >0) {
      let message = "";
      countryArray.forEach((item, index) => {
        message += "Country" + (index + 1) + ": " + item.text + "\n";
      })
      Alert.alert("Items Entered", `Items entered are:\n${message}`, {text: "Okay"});
    }
    else {
      Alert.alert("No item entered", "Empty list", {text: "Okay"});
    }
    
  }
  function updateMax(newMax) {
    MAX_ITEM = parseInt(newMax);
    Alert.alert("Updated count", `Max items: ${MAX_ITEM}`);
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
      <Options updateMax={updateMax} deleteAllItems={deleteAllItems} showItemsAlert={showItemsAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
