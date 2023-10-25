import React from 'react'
import { View,Text,StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Topmenu() {
  return (
    <View style={styles.menuContainer}>
        <TouchableOpacity><Image source={require('../assets/Icons/hamburger.png')} style={styles.Icons} /></TouchableOpacity>
        <TouchableOpacity><View style={styles.notification}><Text style={{fontSize:18,color:'white',fontWeight:700}}>0</Text></View></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    menuContainer:{
        height:32,
        paddingHorizontal:16,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    Icons:{
        width:28,
        height:28,
    },
    notification:{
      width:24,
      height:24,
      borderRadius:'100%',
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center'
    }
})