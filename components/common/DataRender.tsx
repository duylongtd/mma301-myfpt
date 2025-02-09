import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

interface DataRenderProps {
  image: string;
  label: string;
  description: string;
}

const DataRender = (data: DataRenderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E3EBFE",
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
        >
          <IconSymbol name="book.fill" size={40} color="#366BC5" />
        </View>
        <View style={{ padding: 5, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>
            {data.label}{" "}
          </Text>
          <Text style={{ color: "#696767" }}>{data.description} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#fff",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "#B5B2B5",
    borderBottomWidth: 1,
    paddingBottom: 10,
  }
});

export default DataRender;
