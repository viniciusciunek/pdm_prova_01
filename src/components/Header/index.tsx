import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import { Dimensions } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import React from "react";
import useUser from "../../states/useUser";

export default function Header() {
  const { setUser } = useUser();

  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleClick = () => {
    showActionSheetWithOptions(
      {
        options: ["Sobre", "Logout", "Cancelar"],
        cancelButtonIndex: 2,
        destructiveButtonIndex: 1,
      },
      (botaoClicado) => {
        if (botaoClicado === 0) {
          router.push("/sobre");
        } else if (botaoClicado === 1) {
          router.replace("/");
          setUser(null);
        }
      }
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={handleClick}>
              <Entypo name="menu" size={32} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Toyoto Cars</Text>
        <Text style={styles.subtitle}>sua melhor concessionária!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 86,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001d3d",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    color: "white",
  },
});
