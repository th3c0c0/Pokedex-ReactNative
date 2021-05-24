import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
    paddingHorizontal:20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title:{
    fontWeight: '600',
    fontSize:28,
    marginTop:10,
    textTransform:'capitalize',
  },
  ScrollView:{
    marginBottom:40,
    paddingHorizontal:20,
  },
  text:{
    textTransform:'capitalize',
    textAlign:'left',
    width: '100%',
    fontSize:18,
    marginBottom:10,
  },
  typeHolder:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:10,
    width:'100%',
    flexWrap: 'wrap',
  },

  ability:{
    textTransform:'capitalize',
    textAlign: 'center',
    fontSize:14,
    fontWeight:'600',
    marginHorizontal:5,
    paddingHorizontal:15,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius:10,
    overflow:'hidden',
    marginBottom:5,
    lineHeight:20,
    // color: '#ffffff',
  },

  pokemonTypes: {
    textTransform:'capitalize',
    textAlign: 'center',
    fontSize:14,
    fontWeight:'600',
    // width: 'auto',
    marginHorizontal:5,
    paddingHorizontal:15,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius:10,
    overflow:'hidden',
    marginBottom:5,
    lineHeight:20,
    color: '#ffffff',
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