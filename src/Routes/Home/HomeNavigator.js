import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../App/Home/Home';
import CreateData from '../../App/Home/CreateData';
import {updateCarData} from '../../Helpers/Api';
import UpdateData from '../../App/Home/UpdateData';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen scree name="Home" component={Home} />
        <Stack.Screen scree name="Create" component={CreateData} />
        <Stack.Screen scree name="Update" component={UpdateData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
