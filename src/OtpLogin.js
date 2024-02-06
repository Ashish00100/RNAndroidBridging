import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, NativeModules, DeviceEventEmitter } from 'react-native'
import auth from '@react-native-firebase/auth'

const OtpLogin = ({navigation,route}) => {

  const { userCredential } = route.params;
  const [otpVerification, setOtpVerification] = useState('');

const otpConfirmation = async () => {
    try {
      await userCredential.confirm(otpVerification).then((userCredential) => {
        console.log(userCredential);
        NativeModules.CustomActionsModule.goToNativeScreen();
      });
      }
       catch (error) {
      console.error(error);
    }
  };

  // const otpConfirmation = async () => {
  //   try {
  //     await confirmation.confirm(verificationCode);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const otpConfirmation = async () => {
  //   NativeModules.CustomActionsModule.goToNativeScreen();
  // };

useEffect(() => {
    const listener = DeviceEventEmitter.addListener(
      'goToReactScreen',
      (text) => {
        navigation.navigate("Home", {text: text !== "" ? text :" Textbox is Empty" });
      },
    );
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP</Text>
      <Text style={styles.subTitle}>Kindly, Insert an otp you received in your Device </Text>
      <TextInput
        style={styles.input}
        placeholder={"OTP"}
        keyboardType={'number-pad'}
        placeholderTextColor={"purple"}
        secureTextEntry={false}
        onChangeText={(text) => setOtpVerification(text)}
      />
     <TouchableOpacity style={styles.button} onPress={() => (otpVerification !== '') && otpConfirmation()}>
        <Text style={styles.text}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpLogin

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom:150,
  },
  title: {
    fontSize: 34,
    color:'green',
    fontWeight:"bold",
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 25,
    color:'green',
    fontWeight:"bold",
  },
  input: {
    height: 42,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:5,
    backgroundColor:'skyblue'
  },
  button: {
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 25,
    padding: 5,
    borderRadius:3,
    backgroundColor:'skyblue'
  },
  text: {
    color: 'purple',
  },
});