import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './Components/PokemonList';
import Details from './Components/Details';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="PokemonList" component={Details} options={{title: 'Listado de Pokemons'}} component={PokemonList} />
        <Stack.Screen name="DetallePokemon" component={Details} options={{title: 'Detalle de Pokemon'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
