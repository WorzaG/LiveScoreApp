import { Link } from '@react-navigation/native'
import React from 'react'
import { View , Text, StyleSheet, FlatList,} from 'react-native'
import Card from './components/Card'
import data from "../../api/data.json"

export default function SlideList({title,link,status}) {


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Link to={{screen:`${link}`}} style={styles.link}>See all {">"} </Link>
        </View>
        <View style={{height:200}}>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.events.filter(res => res.status == status)} 
            renderItem={({item}) => <Card league={item.league} home={item.teams.home} away={item.teams.away} time={item.current_time} status={status}/>}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:25,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',

    },
    link:{
        fontSize:14,
        color:'#274893',
    }
})