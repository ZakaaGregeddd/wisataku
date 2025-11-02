import { useColorScheme } from '@/hooks/use-color-scheme';
import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import { styles } from './styles/layout-styles';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>

      <ImageBackground style={styles.gambarBG} source={require('../assets/images/wisata-01.jpg')}>
        <View style={styles.header}>
          <Text style={styles.headerTeks}>W I S A T A K U</Text>
        </View>

        <View style={styles.lokasi}>
          <Text style={styles.lokasiTeks}> Ciroyom, adfafawf</Text>
          <View style={styles.rating}>
            <AntDesign name="heart" color="white" />
            <AntDesign name="heart" color="white" />
            <AntDesign name="heart" color="white" />
            <AntDesign name="heart" color="white" />
            <FontAwesome name="heart-o" size={12.5} color="white" />
          </View>
        </View>

        <View style={styles.separator}></View>
        <Text style={styles.keterangan}>Lorem Ipsum, Lorem Ipsum</Text>
        <Text style={styles.keterangan}>Lorem Ipsum, Lorem Ipsum</Text>
        <TouchableOpacity style={styles.tombol}>
            <Text style={styles.tombolTeks}>LEBIH BANYAK&gt;</Text>
        </TouchableOpacity>

      </ImageBackground>

      <StatusBar style="auto" />

    </View>
  );
}