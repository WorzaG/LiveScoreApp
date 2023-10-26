import { StyleSheet, Text, View } from 'react-native';
import { MainProvider } from './Context/MainContext';

 // Navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Pages Components
import Home from './pages/Home';
import Sheculde from './pages/Sheculde';
import LiveScreen from './pages/LiveScreen';

export default function App() {
  
  const Tab = createBottomTabNavigator()

  return (  
    <MainProvider>
      <NavigationContainer> 
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Sheculde" component={Sheculde} />
        <Tab.Screen name='Live' component={LiveScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </MainProvider>
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
