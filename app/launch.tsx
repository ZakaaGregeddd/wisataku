import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/layout-styles';

export default function RootLayout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.gambarBG} source={require('../assets/images/Delta-bg01.jpg')}>
        <View style={styles.centerContent}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push('/home')}
          >
            <Text style={styles.startButtonText}>-start-</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}