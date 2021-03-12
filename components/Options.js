import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Options({updateMax, deleteAllItems, showItemsAlert}) {

  const [text, setText] = useState("");
  function onChange(textValue) {
    setText(textValue);
  }
  return (
    <View style={styles.header}>
      <TextInput placeholder="Add new max count" style={styles.inputText} onChangeText={onChange} />
      <TouchableOpacity style={styles.addButton} onPress={() => updateMax({text})}>
        <Text style={styles.addButtonText}>Update Max Items</Text>
      </TouchableOpacity>
      <View style={styles.additionalOptions}>

      <TouchableOpacity style={styles.addButton} onPress={() => deleteAllItems()}>
      
        <Text style={styles.addButtonText}>Clear List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => showItemsAlert()}>
      
        <Text style={styles.addButtonText}>Show Items</Text>
      </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    height: 70,
    padding: 15,
    fontSize: 15,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: 'darkslateblue',
    padding: 15,
    flexDirection: 'row',
    justifyContent: "center",
    margin: 5,
    marginHorizontal: 20
  },
  addButtonText: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5
  },
  additionalOptions: {
    flexDirection: "row"
  }

});
