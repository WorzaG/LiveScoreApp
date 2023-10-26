import axios from "axios";
import { createContext,useContext, useEffect, useState } from "react";

const MainContext = createContext()
const authToken = '7b6dae7ecfd942a3bd18dbf6556e46e4'

export const MainProvider = ({children})=>{
    const [search,setSearch] = useState("")
    const [liveData,setliveData] = useState()
    const fetching = async () =>{
        axios.get('https://v3.football.api-sports.io/fixtures?live=all',{
            headers: {
              'x-rapidapi-key': 'adf8198f5ee557c8990e17b142598144',
              'x-rapidapi-host': 'v3.football.api-sports.io'
            }
           }).then(res => setliveData(res.data.response)).then(()=>console.log(liveData))
    } 

    useEffect(() => {
       //fetching()
    }, [])
    
    const values ={
    search,
    setSearch,
    liveData
}        

    return(
        <MainContext.Provider value={values}>{children}</MainContext.Provider>
    )
}

export const useSearch = () => useContext(MainContext)
export const useliveData = () => useContext(MainContext)