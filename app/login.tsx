// native
import { View, TouchableOpacity, ImageBackground, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useRouter, Stack } from "expo-router";

import useUser from "../src/states/useUser";

export default function Login() {
  const router = useRouter();

  const { setUser } = useUser();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (usuario === "teste" && senha === "123") {
      router.replace("/home");
      setUser({ username: usuario, token: "pdm" });
    } else {
      console.log("teste");
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <ImageBackground source={require("../assets/images/car.png")} style={styles.image}> */}
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Ciunek Cars</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            value={usuario}
            onChangeText={(value) => {
              setUsuario(value);
            }}
            placeholder="Usuario"
            style={styles.input}
          ></TextInput>

          <TextInput
            value={senha}
            onChangeText={(value) => {
              setSenha(value);
            }}
            placeholder="Senha"
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>FAZER LOGIN</Text>
          </TouchableOpacity>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#001d3d",
  },
  boxTitle: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#64daf7",
    marginHorizontal: 12,
    padding: 24,
    borderColor: "ghostwhite",
    borderLeftWidth: 8,
    borderBottomWidth: 8,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  title: {
    color: "ghostwhite",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "HighSpeed",
  },
  form: {
    alignItems: "center",
    flexShrink: 1,
    marginTop: 24,
  },
  input: {
    width: 300,
    backgroundColor: "ghostwhite",
    padding: 12,
    color: "#001d3d",
    marginBottom: 12,
    borderColor: "#64daf7",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  button: {
    maxWidth: 148,
    backgroundColor: "ghostwhite",
    padding: 12,
    color: "#001d3d",
    marginBottom: 12,
    alignItems: "center",
    borderColor: "#64daf7",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    fontFamily: "BebasNeue",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
