import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 0,
    flex:1,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: '#666',
    marginHorizontal: 10,
    marginVertical: 10,
    // overflow:'hidden',
    width:80,
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    width:80,
    height:80,
    zIndex:1,
  },
  ScrollView: {
    height:'80%',
  }
});
