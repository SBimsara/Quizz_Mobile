import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Questions = () => {
  
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.quesiontext}>what is the most popular game in sri lanka?</Text>
        </View>

        <View style={styles.middle}>
          <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>answer 1</Text>
          </TouchableOpacity>    
        
          <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option} >answer 1</Text>
          </TouchableOpacity>    

          <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>answer 1</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>answer 1</Text>
          </TouchableOpacity> 
            
            
        </View>
        <View style={styles.bottom}>
            <View>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>skip</Text>
              </TouchableOpacity>
            </View>

               {/* <TouchableOpacity>
              <Text>next</Text>
              </TouchableOpacity>
             </View>  
            
             <View>
         */}

            <View>
              <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Results")}>
              <Text style={styles.buttontext} >next</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>

    </SafeAreaView>
    
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
    marginTop:30    
  
  },
  top:{
    backgroundColor:"green",
    marginTop:12,
    justifyContent: 'center',
    alignItems: 'center',
    height:120
       
  },

  quesiontext:{
  fontSize:28
  },

  option:{
    fontSize:20,
    color:'white'
  },

  optionbutton:{
    paddingVertical: 20,
    marginVertical:6,
    width:300,
    backgroundColor:'#0371A0',
    borderRadius:18
  },

  middle:{
    backgroundColor:"lightblue",
   height:400,
   alignItems:"center",
   justifyContent:"space-between",
   marginVertical: 16,
   marginTop:40

  },
  bottom:{
      height:300,
      backgroundColor:"green",
     paddingVertical:16,
     justifyContent: 'space-between',
     flexDirection: 'row' ,
     alignItems:'flex-end'   
  },

  button:{
    width:100,
    backgroundColor:"#174d64",
    padding: 20,
    paddingHorizontal: 16,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    marginBottom:150
  },

  buttontext:{
    fontSize:20,
    color:'white'
  }
});


