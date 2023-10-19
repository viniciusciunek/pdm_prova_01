// natives
import { SectionList, Text, StyleSheet, View, Dimensions } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import React from "react";

// components
import Header from "../src/components/Header";

// mocks
import data from "../src/services/data";

// helpers
import { organizeDataByBrand } from "../src/helpers/formatarDados";

export default function _Screen() {
  const router = useRouter();

  const organizados = organizeDataByBrand(data);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Página Inicial",
          headerStyle: {
            backgroundColor: "#001d3d",
          },
          headerTitleStyle: {
            fontFamily: "BebasNeue",
            color: "ghostwhite",
          },
        }}
      />
      <Header />
      <SectionList
        sections={organizados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            key={item.id}
            href={{
              pathname: "/[id]",
              params: {
                id: item.id,
              },
            }}
          >
            <View style={styles.fullContainer}>
              <View style={styles.sectionContentTitle}>
                <Text style={styles.title}>ID</Text>
                <Text style={styles.title}>Model</Text>
                <Text style={styles.title}>Year</Text>
              </View>

              <View style={styles.sectionContent}>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.model}</Text>
                <Text style={styles.title}>{item.year}</Text>
              </View>
            </View>
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title.toUpperCase()}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001d3d",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "ghostwhite",
    padding: 14,
    overflow: "hidden",
    textAlign: "center",
    color: "#161a1d",
    marginBottom: 12,
    marginHorizontal: 4,
    borderRadius: 12,
  },
  fullContainer: {
    alignItems: "center",
  },
  sectionContentTitle: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#64daf7",
    color: "ghostwhite",
    padding: 4,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    borderColor: "#64daf7",
    borderLeftWidth: 2,
    marginHorizontal: 4,
    width: "95%",
    borderTopLeftRadius: 6,
  },
  sectionContent: {
    alignItems: "center",
    height: 64,
    flexDirection: "row",
    backgroundColor: "ghostwhite",
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 4,
    borderEndStartRadius: 12,
    width: "95%",
    borderEndEndRadius: 12,
    borderColor: "#64daf7",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 16,
    color: "#161a1d",
  },
});
