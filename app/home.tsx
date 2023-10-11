import { SectionList, Text, StyleSheet, ScrollView, View } from "react-native";
import React from "react";

// components
import Header from "../src/components/Header";
import useUser from "../src/states/useUser";

import data from "../src/services/data";
import { organizeDataByBrand } from "../src/helpers/formatarDados";

export default function _Screen() {
  const { user } = useUser();

  const organizados = organizeDataByBrand(data);

  return (
    <View style={styles.container}>
      <Header />
      <Text>me chamo {user?.username}</Text>

      <SectionList
        sections={organizados}
        // sections={organizados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.id} | {item.model} | {item.year}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "lightgray",
  },
});
