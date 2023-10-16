import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function _Screen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Sobre",
          headerStyle: {
            backgroundColor: "#001d3d",
          },
          headerTitleStyle: {
            fontFamily: "BebasNeue",
            color: "ghostwhite",
          },
        }}
      />
      <View style={styles.box}>
        <View>
          <Text style={styles.title}>CIUNEK CARS</Text>
          <Text style={styles.subtitle}>VERSÃO 1.0</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>DESENVOLVIDO POR:</Text>
          <Text style={styles.title}>Vinicius G. Ciunek</Text>
          <Text
            style={styles.subtitle}
            onPress={() => {
              Linking.openURL("https://github.com/viniciusciunek");
            }}
          >
            <AntDesign name="github" size={32} color="black" />
          </Text>
        </View>
        <View>
          <Text style={styles.title}>PROF. ANDRES</Text>
          <Text style={styles.subtitle}>PROG. MOBILE 2023.2</Text>
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
    backgroundColor: "#64daf7",
    padding: 32,
    minHeight: 640,
    minWidth: 380,
    margin: 120,
    borderColor: "ghostwhite",
    borderLeftWidth: 8,
    borderBottomWidth: 8,
    borderRadius: 24,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "ghostwhite",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "HighSpeed",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: "#001d3d",
    fontWeight: "100",
    letterSpacing: 0.8,
    textAlign: "center",
    fontFamily: "BebasNeue",
    margin: 1,
  },
});
