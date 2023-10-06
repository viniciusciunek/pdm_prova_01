import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import { Dimensions } from "react-native";
import React from "react";

export default function Header() {
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
          router.push("/");
        }
      }
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => <Button title="botao" onPress={handleClick} />,
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
    flex: 1,
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
