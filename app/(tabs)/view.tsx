import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const view = () => {
  return (
    <SafeAreaView className="bg-primary">
      <View>
        <Text>view</Text>
      </View>
    </SafeAreaView>

  )
}

export default view