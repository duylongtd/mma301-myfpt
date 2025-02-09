import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

const SearchBar = () => {
  return (
    <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
      <View style={styles.container}>
        <IconSymbol name="doc.text.magnifyingglass" size={24} color="#B5B2B5" />
        <TextInput
          style={styles.btn}
          placeholder="Type feature's name"
          underlineColorAndroid="transparent" // Removes the underline on Android
          selectionColor="#B5B2B5" // Changes the cursor and selection color
        />
      </View>
      <IconSymbol name="square.grid.2x2" size={28} color="#B5B2B5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#DBD9DC",
    alignItems: "center",
    height: 40,
    flex: 1
  },
  btn: {
    paddingLeft: 8,
    flex: 1,
    color: "#B5B2B5",
    borderWidth: 0,
  },
});

export default SearchBar;
