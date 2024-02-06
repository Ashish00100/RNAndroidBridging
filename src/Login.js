import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, NativeModules, DeviceEventEmitter } from 'react-native'
import auth from '@react-native-firebase/auth'

const Login = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const userLogin = () => {
//     // Keyboard.dismiss();
//     NativeModules.CustomActionsModule.goToNativeScreen();
//     // (username !== '' && password !== '') && navigation.navigate("Home")
//     // console.log('Username:', username);
//     // console.log('Password:', password);
//   };

const userLogin = async () => {
    try {
      let userCredential = await auth().signInWithEmailAndPassword(username, password);
      // User is signed in
      alert("123")
      console.log(userCredential);
      if(userCredential) {
        NativeModules.CustomActionsModule.goToNativeScreen();
      }
      
    } catch (error) {
      console.error(error);
    }
  };

// const userLogin = () => {
//     NativeModules.CustomActionsModule.goToNativeScreen();
// }

useEffect(() => {
    const listener = DeviceEventEmitter.addListener(
      'goToReactScreen',
      (text) => {
        navigation.navigate("Home", {text: text});
      },
    );
    return () => {
      listener.remove();
    };
  }, []);

  const clearLogin = () => {
    Keyboard.dismiss();
    setUsername('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder={"Username/UserID"}
        placeholderTextColor={"green"}
        secureTextEntry={false}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        placeholderTextColor={"green"}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

     <TouchableOpacity style={styles.button} onPress={() => (username !== '' && password !== '') && userLogin()}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearLogin}>
        <Text style={styles.text}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 34,
    marginBottom: 16,
    color:'green',
    fontWeight:"bold",
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:5,
  },
  button: {
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 25,
    padding: 5,
    borderRadius:3,
  },
  text: {
    color: 'green',
  },
});