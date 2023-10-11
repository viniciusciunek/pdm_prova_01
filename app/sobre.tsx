import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function _Screen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{}} />
      <View style={styles.box}>
        <View style={styles.first}>
          <Text style={styles.title}>Calabreso Cars</Text>
          <Text style={styles.subtitle}>versão 1.0 alpha</Text>
        </View>
        <View style={styles.second}>
          <Text style={styles.subtitle}>desenvolvido por:</Text>
          <Text style={styles.title}>Vinicius G. Ciunek</Text>
          <Text
            style={styles.title}
            onPress={() => {
              Linking.openURL("https://github.com/viniciusciunek");
            }}
          >GITHUB
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001d3d",
  },
  box: {
    backgroundColor: "lightblue",
    padding: 48,
    minHeight: 640,
    minWidth: 380,
    borderRadius: 24,
  },
  first: {
    alignItems: "center",
    marginBottom: 124,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "ghostwhite",
    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "100",
    color: "#001d3d",
  },
  second: {
    alignItems: "center",
  },
});
