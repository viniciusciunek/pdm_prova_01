import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import data from "../src/services/data";

export default function car() {
  const params = useGlobalSearchParams();

  const id: any = parseInt(params.id as string);

  const item: any = data.find((item) => item.id === id);

  return (
    <View>
      <Stack.Screen
        options={{
          title: item.model,
          headerStyle: {
            backgroundColor: "#001d3d",
          },

          headerTitleStyle: {
            fontFamily: "BebasNeue",
            color: "ghostwhite",
          },
        }}
      />
      <Text>{item.id}</Text>
      <Text>{item.model}</Text>
      <Text>{item.year}</Text>
    </View>
  );
}
