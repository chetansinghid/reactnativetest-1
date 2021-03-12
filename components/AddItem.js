import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddItem({addItem}) {

  const [text, setText] = useState("");
  function onChange(textValue) {
    setText(textValue);
  }
  return (
    <View style={styles.header}>
      <TextInput placeholder="Add country..." style={styles.inputText} onChangeText={onChange} />
      <TouchableOpacity style={styles.addButton} onPress={() => addItem({text})}>
      <AntDesign name="pluscircleo" size={24} color="white" />
        <Text style={styles.addButtonText}>Add Country</Text>
      </TouchableOpacity>
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
  }

});
