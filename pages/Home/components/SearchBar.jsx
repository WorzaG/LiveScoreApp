import React from 'react'
import { StyleSheet, Text,View,TextInput ,Image} from 'react-native'
export default function SearchBar() {
  return (
    <View style={styles.searchbar}>
        <Text style={{fontSize:24,fontWeight:700}}>What is your mind ?</Text>
        <View style={styles.InputContainer}>
        <TextInput style={styles.searchInput} placeholder='Search matches, player, club'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchbar: {
        height:140,
        flexDirection:"column",
        padding:20,
    },
    InputContainer:{
      //justifyContent:'center',      
      alignItems:'center',
    },
    searchInput:{
        width:380,
        height:45,
        marginTop:20,
        backgroundColor:"#f1f1f1",
        paddingVertical:5,
        paddingHorizontal:10,
        fontSize:16,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#DBDCDD"
    }

})