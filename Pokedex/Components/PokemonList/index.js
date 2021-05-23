import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles as styles} from './styles';

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);
  

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(response => response.json())
      .then(pokemons => {
        pokemons.results.forEach(pokemon=>{
          fetch(pokemon.url)
          .then(response => response.json())
          .then(pokemonData=>{
            pokemon.image = pokemonData.sprites.front_default;
            pokemon.id = pokemonData.id;
            // console.log(pokemon);
            // pokemon.push( pokemonData.sprites);
          })
          ;
        });
        setPokemons(pokemons.results);
      });
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
      <ScrollView style={styles.ScrollView} vertical={true}  >
        <View  style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase()
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key = {index}
                  style = {styles.card}
                  onPress = {() =>
                    props.navigation.navigate('DetallePokemon', {
                      pokemon: pokemon.name,
                    })
                  }>

                  <Image
                    style = {styles.image}
                    source = {{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        pokemon.id
                      }.png`,
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PokemonList;

