import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native';

const Mockup=({data})=> {
  const url = "http://placehold.it/32x32";
  const icon = "https://cdn-icons-png.flaticon.com/512/1380/1380338.png";

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: url }} style={{ width: 120, height: 120 }} />
        <Text>Imagen</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{data.about.substring(0,22)}</Text>
        <Text style={styles.author}>By {data.author}</Text>
        <Text style={styles.labels}>Label 1</Text>
        <View style={styles.commentsGroup}>
        <ImageBackground source={{ uri: icon }} style={styles.icon} />
        <Text style={styles.comments}>{data.comments.length} Comments</Text>
        </View>
      </View>
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: "90%",
    height:600,
    marginLeft:"auto",
    marginRight:"auto",
    flex: 1,
    flexDirection: 'row',
    borderColor: 'red',
    borderRadius: '10',
    shadowColor: 'black',
  },
  commentsGroup: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height:120,
    margin: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop:10
  },
  text: {
    width:"80%",
    flexWrap: 'wrap'
  },
  title:{
    width:"90%",
    marginTop:10,
    fontSize: 16
  },
  author:{
   fontSize: 12
  },
  labels:{
   marginTop:20,
   width:60,
   height:20,
   backgroundColor: 'gray',
   color:"white",
   textAlign:"center"
  },
  comments:{
    marginTop:10,
    marginLeft:5,
    color:"gray"
  }
});

export default Mockup;
