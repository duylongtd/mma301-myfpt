import { PropsWithChildren } from "react"
import { StyleSheet, Text, View } from "react-native"
import SearchBar from "./common/SearchBar"

const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 10, paddingRight: 10, width: '100%'}}>
        <SearchBar />
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'flex-start',
  }
})

export default MainLayout
