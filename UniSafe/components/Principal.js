import { View, Text, Box, StyleSheet, SafeAreaView, Alert} from "react-native";
import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
import tw from "twrnc";
import {
  Dimensions,
  Modal,
  Pressable,
  Picker,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

const StyledMarker = () => (
  <View
    style={{
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#FF000087",
      display: "flex",
      border: "#ED0909",
      justifyContent: "center",
      alignItems: "center",
    }}
  ></View>
);

export default function Principal() {
  const [selectedValue, setSelectedValue] = useState("java");
  const [number, onChangeNumber] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
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
    latitude: 14.0485463,
    longitude: -87.1743247,
    latitudeDelta: 0.005,
  };
  const [markerLocation, setMarkerLocation] = useState("");
  const [marker, setMarker] = useState([
    {
      latitude: "lt",
      longitude: "lg",
    },
  ]);
  let mark = {
    latitude: "",
    longitude: "",
  };
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    container: {
      flex: 1,
      alignItems: "center",
    },
  });
  const handleNewMarker = (coordinate) => {
    mark.latitude = coordinate.latitude;
    mark.longitude = coordinate.longitude;
    const newList = marker.filter(
      (item) =>
        item.longitude !== coordinate.longitude &&
        item.latitude !== coordinate.latitude
    );
    if (newList.length < marker.length) {
      setMarker(newList);
    } else {
      setMarker([...marker, mark]);
    }
    //location.latitudeDelta = coordinate.latituFdeDelta;
  };
  const textInputStyle = StyleSheet.create({
    input: {
      height: 100,
      width: 225,
      margin: 12,
      borderWidth: 1,
      padding: 20,
      borderRadius: 10,
    },
  });
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
          mapType="hybrid"
          showsUserLocation
          onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        >
          {marker.length > 0 &&
            marker.map((m) => {
              return (
                <Marker
                  coordinate={{ latitude: m.latitude, longitude: m.longitude }}
                  key={Math.random().toString()}
                >
                  <StyledMarker />
                </Marker>
              );
            })}
        </MapView>
        <SafeAreaView style={tw`self-end w-5/12 h-3/30`}>
          <SafeAreaProvider>
            <Button
              title="Ver opciones"
              onPress={() => setIsVisible(true)}
              buttonStyle={tw`bg-slate-900 mb-5 rounded-3xl`}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={true}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <SafeAreaView>
                    <TouchableWithoutFeedback>
                      <TextInput
                        multiline={true}
                        style={textInputStyle.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Ingrese Descripción"
                        keyboardType="text"
                        onSubmitEditing={Keyboard.dismiss}
                      />
                      </TouchableWithoutFeedback>
                  </SafeAreaView>
                  <Picker
                    selectedValue={selectedValue}
                    style={{
                      height: 150,
                      width: 150,
                      position: "relative",
                      top: 2,
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
              </View>
            </Modal>
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
