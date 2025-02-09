import { createContext, PropsWithChildren, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./common/SearchBar";

// Create context for search text
interface SearchContextType {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
});

const MainLayout = ({ children }: PropsWithChildren) => {
  const [searchText, setSearchText] = useState("");
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <View style={styles.container}>
        <View style={{ paddingLeft: 10, paddingRight: 10, width: "100%" }}>
          <SearchBar onSearch={setSearchText} />
        </View>
        {children}
      </View>
    </SearchContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "flex-start",
  },
});

export default MainLayout;
