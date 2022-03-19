import { View, Text, Box, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import tw from "twrnc";
import Mapa from "../Imagenes/mapa.jpg";

export default function Principal() {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: "Marcar lugar" },
    { title: "Notificaciones" },
    {
      title: "Volver a mapa",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];
  let location = {
    latitude: 14.0483681,
    longitude: -87.1743247,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };
  const onLocationSelect = (e) => {
    alert(e.nativeEvent.coordinate);
  }
  return (
    <View style={tw`flex bg-black h-full`}>
      <View
        style={tw`flex-1 flex-row w-full h-full bg-white justify-center items-center`}
      >
        {/*FLOATING BOX*/}
        <MapView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          provider={PROVIDER_GOOGLE}
          region={location}
          mapType='hybrid'
          showsUserLocation
          onPress={onLocationSelect}
        />
        

        <SafeAreaView style={tw`self-end w-5/12 h-3/30`}>
          <SafeAreaProvider>
            <Button
              title="Ver opciones"
              onPress={() => setIsVisible(true)}
              buttonStyle={tw`bg-slate-900 mb-5 rounded-3xl`}
            />

            <BottomSheet modalProps={{}} isVisible={isVisible}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}
                >
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </SafeAreaProvider>
        </SafeAreaView>
      </View>
      {/*NAVBAR*/}
      <View
        style={tw`flex-initial flex-row h-14 w-5/6 mt-14 absolute self-center`}
      >
        <View
          style={tw`flex-1 bg-slate-900 w-4/6 items-center justify-center rounded-2xl`}
        >
          <Text style={tw`text-2xl font-bold text-white`}>Unitec</Text>
        </View>
      </View>
    </View>
  );
}

