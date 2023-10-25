import React from 'react'
import { View , Text,SafeAreaView} from 'react-native'
//Components
import SearchBar from './components/SearchBar'
import Topmenu from '../../components/Topmenu'


export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:"#fafafa",flex:1}}>
    <Topmenu/>
    <SearchBar/>
    <Text>
        Home
    </Text>
    </SafeAreaView>
  )
}
