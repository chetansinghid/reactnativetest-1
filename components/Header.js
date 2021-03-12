import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Country List</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  headerText: {
    color: 'white',
    fontSize: 23,
    textAlign: "center",
    paddingTop: 10
  },
});
