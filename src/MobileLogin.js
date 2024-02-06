import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Keyboard, NativeModules, DeviceEventEmitter } from 'react-native'
import auth from '@react-native-firebase/auth'


const MobileLogin = ({ navigation }) => {

  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false)

  //   const userLogin = () => {
  //     // Keyboard.dismiss();
  //     NativeModules.CustomActionsModule.goToNativeScreen();
  //     // (username !== '' && password !== '') && navigation.navigate("Home")
  //     // console.log('Username:', username);
  //     // console.log('Password:', password);
  //   };

  // const userPhoneLogin = async () => {
  //     try {
  //       let userCredential = await auth().signInWithEmailAndPassword(username, password);
  //       // User is signed in
  //       alert("123")
  //       console.log(userCredential);
  //       if(userCredential) {
  //         NativeModules.CustomActionsModule.goToNativeScreen();
  //       }

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const userPhoneLogin = async () => {
    setLoading(true)
    try {
      const userCredential = await auth().signInWithPhoneNumber(phone);
      navigation.navigate('OtpLogin', { userCredential });
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  // const userPhoneLogin = () => {
  //   navigation.navigate("OtpLogin")
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Kindly, Enter Your Mobile Number for Login</Text>
      <TextInput
        style={styles.input}
        keyboardType={'number-pad'}
        placeholder={"Phone Number"}
        placeholderTextColor={"purple"}
        secureTextEntry={false}
        onChangeText={(text) => setPhone(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => (phone !== '') && userPhoneLogin()}>
        {loading ? <ActivityIndicator /> : <Text style={styles.text}>Sign In</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default MobileLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 150,
  },
  title: {
    fontSize: 34,
    color: 'green',
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 25,
    color: 'green',
    fontWeight: "bold",
  },
  input: {
    height: 42,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: 'skyblue'
  },
  button: {
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 25,
    padding: 5,
    borderRadius: 3,
    backgroundColor: 'skyblue'
  },
  text: {
    color: 'purple',
  },
});