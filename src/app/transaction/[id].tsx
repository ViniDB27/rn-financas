import { Button, Text, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

export default function Transaction() {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Text>Transaction Details</Text>
      <Text>ID: {id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}
