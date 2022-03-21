import React, { useState } from 'react';
import firebase from "../firebase"
import { Text, TextInput, View, Pressable } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from "twrnc";

function Login({ navigation }){

  
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  const autenticacion = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log("Signed in")
        navigation.navigate('Loading');
      })
      .catch((error) => {
        console.log("Not signed in")
      });
  }


  return (
    <View style={tw`bg-slate-900 h-full w-full items-center `}>
      <View style={tw`w-7/12 h-3/6 border-2 border-gray-700 bg-gray-200 mt-30 py-2 pt-6 items-center rounded-lg`}>
        <TextInput
          style={tw`bg-gray-300 w-10/12 h-12 my-4 border-2 border-gray-700 pl-2`}
          placeholder="Ingrese su correo"
          onChangeText={newText => setUser(newText)}
          defaultValue={user}
        />
        <TextInput
          style={tw`bg-gray-300 w-10/12 h-12 my-4 border-2 border-gray-700 pl-2`}
          placeholder="Ingrese su contraseña"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
        <Pressable style={tw`w-20 h-10 bg-slate-800 items-center rounded-lg mt-3 hover:bg-slate-600`} onPress={autenticacion}>
          <Text style={tw`text-white mt-3`}> Login </Text>
        </Pressable>
      </View>

    </View>
  );
}



export default Login;