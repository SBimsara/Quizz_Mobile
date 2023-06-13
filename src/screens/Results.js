import { Image , View, Text ,StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';


const Results = () => {
  return (
   <SafeAreaView>
    <View style={styles.container}>
            <View style={styles.top}>
                <Text>Results</Text>
            </View>
            <View style={styles.bannercontainer}>
            <Image
            source={require('../../assets/images/quize.jpeg')}
            style={styles.banner}
            resizeMode="contain"
            />
        </View>

        <View style={styles.bottom}>
            <TouchableOpacity>
                <Text>
                    home 
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Results

const styles = StyleSheet.create({
      container: {
        paddingTop: 60,
        paddingHorizontal: 100,
      },
      top:{
        backgroundColor:"green",
        marginTop:12,
        justifyContent: 'center',
        alignItems: 'center',
         
      },
      bannercontainer: {
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
      },
      bottom:{
        height:300,
        backgroundColor:"green",
         paddingVertical:16,
       
      }
    
  });
  
  
  