import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/layout-styles';


export default function RootLayout() {
  return (
    <View style={styles.container}>

      <ImageBackground style={styles.gambarBG} source={require('../assets/images/Delta-bg01.jpg')}>
        <View style={styles.centerContent}>
          {/* Logo dihapus, hanya tombol */}
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>-start-</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />

    </View>
  );
}