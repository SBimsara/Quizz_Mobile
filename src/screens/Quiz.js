
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text, StyleSheet , TouchableOpacity } from 'react-native';


const Quiz = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
       <View style={styles.topcontainer}>
        <Text style={styles.top}>QUIZZ</Text>
       </View>
      
            <View style={styles.bannercontainer}>
              <Image
                // source={require('../../assets/images/quize.jpeg')}
                source={{uri:'data:image/jpeg;base64,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'}}
                style={styles.banner}
                resizeMode="contain"
              />
            </View>
       </View>

       <View style={styles.buttonview}>
       <TouchableOpacity onPress={() => navigation.navigate("Questions")}
       style={styles.button}>
      <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 10,
    
  },

  topcontainer:{
    justifyContent:'center',
    alignItems:'center',
  },

  top:{
      fontSize:30,
      fontWeight: '600',
     
  },

  banner: {
    
    height: 400,
    width: 300,
  },
  bannercontainer:{
    justifyContent:'center',
    alignItems:'center',
   
  },

  button:{
     width:300,
     backgroundColor:"#174d64",
     padding: 20,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     marginTop:150
  },

  buttonview:{
    justifyContent:'center',
    alignItems:'center',
  },

  buttontext:{
    fontSize:24,
    color:'white'
  }

  
});
