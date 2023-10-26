import React from 'react'
import { View,Text,StyleSheet, Image } from 'react-native'
export default function Card({league,home,away,time,status}) {
  return (
    <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#274893'}}>{league}</Text>
               {
                status == 'LIVE' ? ( <Text style={{fontSize:16,fontWeight:'bold',color:'#274893'}}>{time}'</Text>) :
                ( <Text style={{fontSize:13,fontWeight:'bold',color:'red'}}>Done</Text>)
               }
            </View>
            <View style={styles.scoreboard}>
                <View style={styles.Team}>
                    <Image source={require('../../../assets/Teams/ManCity.png')}/>
                    <Text style={styles.teamName}>{home.name}</Text>
                </View>
                <View style={styles.scores}>
                    <Text style={styles.scoreText}>{home.score.length}</Text>
                    <Text style={styles.scoreText}> - </Text>
                    <Text style={styles.scoreText}>{away.score.length}</Text>
                </View>
                <View style={styles.Team}>
                <Image source={require('../../../assets/Teams/Arsenal.png')}/>
                    <Text style={styles.teamName}>{away.name}</Text>
                </View>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    card:{
        width:320,
        height:140,
        padding:15,
        marginTop:25,
        marginHorizontal:10,
        backgroundColor:'#fff',
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
    },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    scoreboard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    scores:{
        flexDirection:'row',
        alignItems:'center',        
    },
    scoreText:{
    fontSize:28,
    fontWeight:'bold',
    color:'#274893'
    },
    Team:{
        alignItems:'center',
//        justifyContent:'center'
        paddingVertical:20,
        width:100,
},  
    teamName:{
        fontSize:15,
        fontWeight:100,
        marginTop:5
    }
})