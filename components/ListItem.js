import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlightBase } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ListItem({item, deleteItem}) {
  
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <AntDesign name="delete" size={24} color="black" onPress={() => deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'lightgray',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  },
  listItemText: {
      fontSize: 18
  }
});
