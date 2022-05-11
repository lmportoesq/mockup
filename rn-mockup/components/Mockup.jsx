import { StyleSheet, Text, View } from 'react-native';

const Mockup=()=> {
  const url = "http://placehold.it/32x32";
  return (
    <View style={styles.container}>
        <image source = {{url}} />
        <Text>Title</Text>
        <Text>autor</Text>
        <Text style={styles.labels}>Labels </Text>
        <Text>comments</Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labels:{
    backgroundColor: '#fff',
  }
});

export default Mockup;
