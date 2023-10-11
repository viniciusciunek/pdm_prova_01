import { View, Text } from "react-native";
import React from "react";
import useUser from "../src/states/useUser";
import { Redirect } from "expo-router";

export default function index() {
  const { user } = useUser();

  if (user) {
    return <Redirect href={"/home"} />;
  }
  return <Redirect href={"/login"} />;
}
