import { Text, View, Button } from 'react-native'
import { router } from 'expo-router'
import { fontFamily } from '@/theme/fontFamily'

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Oi</Text>
      <Button title="Nova Meta" onPress={() => router.navigate('/target')} />
      <Button
        title="Nova transação"
        onPress={() => router.navigate('/transaction/1')}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate('/in-progress/123')}
      />
    </View>
  )
}
