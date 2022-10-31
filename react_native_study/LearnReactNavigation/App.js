import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    /*    <NavigationContainer>
      <Stack.Navigator inintialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    */
    <View>
      <Text> for test</Text>
    </View>
  );
}

export default App;
