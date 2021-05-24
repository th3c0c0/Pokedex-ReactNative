import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles as styles} from './styles';

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons =  async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(response => response.json())
      .then(pokemons => {
        const pokemonsTop = pokemons;
        const pokemonsFromDataAux = [];

        const getPokemonData = async (pokemonsFromData) => {
          const pokemonPromises = pokemonsFromData.results.map(
            async pokemon => {
              const pokemonDataFetch = await fetch(pokemon.url);
              return await pokemonDataFetch.json();
            }
          );

          for (pokemonPromise of pokemonPromises){
            await pokemonPromise.then(data=>{
              pokemonsFromDataAux.push(data);
            });
          }
        };

        //lanza el request
        getPokemonData(pokemonsTop).then( 
          ()=>{
            setPokemons(pokemonsFromDataAux);
          }
        ); 
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.searchfield}
          placeholder="Busca a tu Pokemon"
          onChangeText={value => setSearchfield(value)}
          value={searchfield}
        />
      </View>
      <SafeAreaView>
      <ScrollView style={styles.ScrollView} vertical={true}  >
        <View  style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
            )
            .map((pokemon, index) => {
              // console.log(pokemon.types[0].type.name);
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key = {index}
                  style = {[styles.card, styles[`${pokemon.types[0].type.name}`]]}
                  // className = {pokemon.types[0].type.name}
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
                  <Text style={styles.name}>{pokemon.name}</Text>
                  {pokemon.types.map((slot, indexType) => {
                    // console.log(slot);
                    return (
                      <View key={indexType}>
                        <Text style={styles.pokemonTypes} >{slot.type.name}</Text>
                      </View>
                    );
                  })}
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

