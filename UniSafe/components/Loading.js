import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import tw from "twrnc";
import firebase from "../firebase";

import { collection, query, getDocs, db, getFirestore, querySnapshot } from "firebase/firestore";


export default function Loading() {
  const [alarmas, setAlarmas] = useState([]);

  /*useEffect(() => {
    const db = getFirestore();
    const dataBase = collection(db, "Alarmas");
    console.log("database");
    console.log(db);
    let listaAlarmas = []
    dataBase.querySnapshot.forEach((doc) => {
      listaAlarmas.push({ ...doc.data(), id: doc.id })
    });
    setAlarmas(listaAlarmas)
    //console.log(alarmas);
  }, [])
  */

  return (
    <View style={tw`bg-slate-900 justify-center items-center h-full`}>
      <Text style={tw`text-white text-xl font-bold`}></Text>
      <StatusBar style="auto" />
      <View>
        {alarmas.map((alarma) => {
          console.log(alarma.Zona)
        })}
      </View>
    </View>
  );
}
