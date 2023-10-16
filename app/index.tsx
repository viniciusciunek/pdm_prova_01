import React from "react";
import useUser from "../src/states/useUser";
import { useFonts } from "expo-font";
import { Redirect } from "expo-router";

export default function index() {
  const { user } = useUser();

  const [fontsLoaded] = useFonts({
    HighSpeed: require("../assets/fonts/HighSpeed.ttf"),
    BebasNeue: require("../assets/fonts/BebasNeue.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  if (user) {
    return <Redirect href={"/home"} />;
  }
  return <Redirect href={"/login"} />;
}
