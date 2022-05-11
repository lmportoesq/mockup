import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mockup from './components/Mockup';
import data from '../data';

export default function App() {
  return (
    <View style={styles.container}>
      {data.map(dataItem =>(
        <Mockup key = {dataItem.id} data = {dataItem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
