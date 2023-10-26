import React from 'react'
import { View , Text,SafeAreaView, ScrollView} from 'react-native'
//Components
import SearchBar from './components/SearchBar'
import Topmenu from '../../components/Topmenu'
import SlideList from '../../components/SlideList'

export default function Home() {

  return (
    <SafeAreaView style={{backgroundColor:"#fafafa",flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Topmenu/>
    <SearchBar/>
    <SlideList title="Live now" link="Live" status="LIVE"/>
    <SlideList title="Just Finished" link="Sheculde" status="Just_Finished"/>
    <SlideList title="Today's" link="Sheculde" status="NOT_START"/>
    </ScrollView>
    </SafeAreaView>
  )
}
