import { Button, Text, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Text>In Progress Details</Text>
      <Text>ID: {id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}
