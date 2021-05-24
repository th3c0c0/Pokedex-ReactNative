import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles as styles} from './styles';

const Details = props => {
  const {pokemon} = props.route.params;
  console.log(pokemon);
  return pokemon.id ? (
    <View style={[styles.container,   ]}>
      <Text style={styles.title} >{pokemon.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `${pokemon.sprites.other['official-artwork'].front_default}`,
        }}
      />
      <Text style={styles.text}>Height: {pokemon.height}</Text>
      <Text style={styles.text}>Weight: {pokemon.weight}</Text>
      <Text style={styles.text}>Abilities: </Text>
      <View style={styles.typeHolder} >
      {pokemon.abilities.map((ability, index) => {
        return (
          <Text style={styles.ability} key={index}>{ability.ability.name}</Text>
        );
      })}
      </View>
      <Text style={styles.text}>Types: </Text>
      <View style={styles.typeHolder} >
        {pokemon.types.map((slot, indexType) => {
          return (
            <Text key={indexType} style={[styles.pokemonTypes, styles[`${slot.type.name}`]]}>{slot.type.name}</Text>
            );
          })
        }
      </View>
      <Text style={styles.text}>Moves: </Text>
      <ScrollView style={styles.ScrollView} vertical={true}  >
        <View style={styles.typeHolder} >
        {pokemon.moves.map((move, index) => {
          return (
            <Text style={styles.ability} key={index}>{move.move.name}</Text>
          );
        })}
        </View>

      </ScrollView>
    </View>
  ) : (
    <View style={styles.indicator}>
      <Text style={styles.text}>There is not data for this pokemon...</Text>
    </View>
  );
};

export default Details;
