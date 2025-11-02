import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ color: '#fff', fontSize: 32 }}>halo</Text>
    </View>
  );
}