import { Image, Text } from "react-native"
import { View } from "react-native"
import { IconSymbol } from "../ui/IconSymbol"

interface DataRenderProps {
    image: string,
    label: string,
    description: string
}

const DataRender = (data: DataRenderProps) => {
  return (
    <View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', width: 50, height: 50}}>
            <IconSymbol name="book.fill" size={24} color="#B5B2B5" />
        </View>
    </View>
  )
}

export default DataRender
