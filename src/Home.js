import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.text}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        fontWeight:'700',
        color:'red'
    },
})