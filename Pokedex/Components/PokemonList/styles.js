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
  searchbar:{
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation:4,
  },
  searchfield:{
    textAlign:'center',
    marginTop:10,
    fontSize: 16,
    lineHeight:20,
    height:30,
    marginBottom:10,
    borderWidth: 1,
    marginLeft:30, 
    marginRight:30,
    borderRadius: 5
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    borderWidth: 0,
    borderBottomColor: '#666',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius:20,
    backgroundColor: '#fff',
    width:160,
    height:100,
    padding:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation:1,
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    width:80,
    height:80,
    zIndex:1,
    position:'absolute',
    bottom:0,
    right:0,
  },
  ScrollView: {
    height:'80%',
  },
  name:{
    textAlign:'left',
    width: '100%',
    fontWeight:'bold',
    textTransform: 'capitalize',
    zIndex:10,
    marginBottom:10
  },
  pokemonTypes: {
    textAlign: 'left',
    width: '100%',
    paddingHorizontal:5,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius:10,
    overflow:'hidden',
    marginBottom:5,
    fontSize: 12,
    lineHeight:20,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  grass:{
    backgroundColor: '#C0D904',
  },
  fire:{
    backgroundColor: '#FB2F2A',
  },
  water:{
    backgroundColor: '#96C6D9',
  },
  poison:{
    backgroundColor: '#D9B8D7',
  },
  ground:{
    backgroundColor: '#DC9A4E',
  },
  electric:{
    backgroundColor: '#FFDA1F',
  },
  fairy:{
    backgroundColor: '#C4E8E2',
  },
  normal:{
    backgroundColor: '#98AAB9',
  },
  rock:{
    backgroundColor: '#D9CCC5',
  },
  ghost:{
    backgroundColor: '#91D2D9',
  },
  psychic:{
    backgroundColor: '#F2EEAE',
  },
  dragon:{
    backgroundColor: '#C43B23',
  },
  ice:{
    backgroundColor: '#10E2FF',
  },
  fliying:{
    backgroundColor: '#D9E8F5',
  },
  bug:{
    backgroundColor: '#F29B30',
  },
  fighting:{
    backgroundColor: '#FF665A',
  },
  dark:{
    backgroundColor: '#878FA6',
  },
  steel:{
    backgroundColor: '#CDD6E4',
  },
  


});
