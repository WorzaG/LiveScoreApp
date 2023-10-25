import { StyleSheet, Text, View } from 'react-native';
import { MainContext } from './Context/context';

 // Navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Pages Components
import Home from './pages/Home';
import Sheculde from './pages/Sheculde';
import { useState } from 'react';

export default function App() {
  const [search,setSearch] = useState("")
  const data = {
    search,
    setSearch
  }
  const Tab = createBottomTabNavigator()
  return (  
    <MainContext.Provider value={data}>
      <NavigationContainer> 
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Sheculde" component={Sheculde} />
        </Tab.Navigator>
      </NavigationContainer>
    </MainContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
