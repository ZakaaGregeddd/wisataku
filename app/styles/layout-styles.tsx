import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  lokasi: {
    marginTop: 350,
    paddingLeft: 27,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  lokasiTeks: {
    color: 'white',
  },
  rating: {
    width: 80,
    paddingLeft: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly'
  },
  keterangan: {
    color: 'white',
    marginLeft: 30,
  },
  separator: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    width: 300,
    marginTop: 8,
    marginLeft: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  headerTeks: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gambar: {
    width: 144,
    height: 160,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 30,
  },
  gambarBG: {
    flex: 1,
    resizeMode: 'cover', // atau 'stretch' jika ingin dipaksa penuh
    justifyContent: 'center',
  },
  tombol: {
    marginBottom: 10,
    marginLeft: 200,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'flex-end',
    borderRadius: 100
  },
  tombolTeks: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'flex-end', // tombol di bawah
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 120,
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#00FF99',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 2,
    marginBottom: 200, // jarak dari bawah layar
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
  },
});
