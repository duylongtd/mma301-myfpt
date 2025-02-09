import { useEffect } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import DataRender from "./DataRender";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    width: "100%",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#B5B2B5",
    color: "#767479",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListCustom = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "UTILITIES",
            data: [
              {
                image:
                  "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
                label: "FPT Care",
                description: "FPT Care",
              },
            ],
          },
        ]}
        renderItem={({ item }) => <DataRender {...item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListCustom;
