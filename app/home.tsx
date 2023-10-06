import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import Header from "../src/components/Header";
import { Stack } from "expo-router";

export default function _Screen() {
  return (
    <ScrollView style={styles.container}>
      {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <Header />
      <Text>estou na home</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
  },
});
