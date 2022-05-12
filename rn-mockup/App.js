import { StyleSheet, Text, View } from 'react-native';
import Mockup from './components/Mockup';
import data from '../data';

export default function App() {
  return (
    <View style={styles.main}>
      {data.map(dataItem =>(
        <Mockup key = {dataItem.id} data = {dataItem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width:"100%",
    flexWrap: 'wrap'
  },
});
