import React,{useState,useEffect} from 'react';
import {StyleSheet,ScrollView,View,Text} from "react-native";
import Axios from "axios";
import {
  Button, Spinner
} from "native-base";
import User from './components/User';

const Apiapp = () => {

    const [details,setDetails] = useState(null);
    const fetchDetails = async () => {
        try{
            const {data} = await Axios.get("https://randomuser.me/api/")

            const details = data.results[0];
            console.log(details);
            setDetails(details);
            //console.log(details)

        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchDetails();
    },[])

    if(!details){
        return(
            <View>
                <Spinner color="#00b7c2"></Spinner> 
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
               <View>
                 {/*
                   How many clock pulses will be required to completely load serially a 5-bit shift register?
                   */}
                   <View>
                    <User details={details} />
                   </View>
                   
                   <Button
                    rounded
                    style={styles.button}
                    onPress={()=>fetchDetails()}
                   >
                       <Text>New User</Text>
                   </Button>
               </View>
            </View>
        )
    }
    
   
}

export default Apiapp;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#222831"
    },
    button:{
        marginTop:30,
        paddingHorizontal:30

    }
})
