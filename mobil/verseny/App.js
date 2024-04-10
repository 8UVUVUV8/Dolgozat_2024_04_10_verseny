/*
* File: App.js
* Author: Szekeres András
* Copyright: 2022, Szekeres András
* Group: Szoft II/2
* Date: 2024.04.10
* Github: https://github.com/janos12345/
* Licenc: GNU GPL
*/

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import nevjegy from './components/nevjegy';
import versenyzok from './components/versenyzok';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Versenyzök" component={versenyzok} />
        <Tab.Screen name="Névjegy" component={nevjegy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
