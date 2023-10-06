// native
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Stack, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (usuario === "teste" && senha === "123") {
      router.push("/home");
    } else {
      console.log("teste");
    }
  };

  return (
    <View style={styles.container}>
      {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <View style={styles.logo}>
        <Image style={{ borderRadius: 24 }} source={require("../assets/images/logo.png")}></Image>
        <Text style={styles.title}>Calabreso Cars</Text>
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
          <Image style={{ borderRadius: 12, width: 100, height: 100 }} source={require("../assets/images/login-btn.png")}></Image>
        </TouchableOpacity>
      </View>
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
  logo: {
    marginTop: 12,
    alignItems: "center",
  },
  title: {
    marginTop: 24,
    color: "ghostwhite",
    fontSize: 24,
    fontWeight: "bold",
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
    borderRadius: 12,
    color: "#001d3d",
    marginBottom: 12,
  },
  button: {
    maxWidth: 148,
    backgroundColor: "ghostwhite",
    padding: 12,
    borderRadius: 12,
    color: "#001d3d",
    marginBottom: 12,
    alignItems: "center",
  },
});
