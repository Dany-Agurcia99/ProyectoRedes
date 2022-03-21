import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Alert,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import { BottomSheet, Button, ListItem } from "react-native-elements";
  import { SafeAreaProvider } from "react-native-safe-area-context";
  import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
  import tw from "twrnc";
  import {
    Modal,
    Picker,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
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
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  
  export default function Principal() {
    const [selectedValue, setSelectedValue] = useState("java");
    const [number, onChangeNumber] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    let mark = {
      latitude: "",
      longitude: "",
      Mensaje: "",
    };
    const [marker, setMarker] = useState([
      {
        latitude: "lt",
        longitude: "lg",
        Mensaje: "",
      },
    ]);
    const marcar = () => {
      setModalVisible(true);
      setIsVisible(false);
    };
    const on_Ok_Alert = () => {
      setModalVisible(false);
      onChangeNumber("");
    }
    const reportar = () => {
      let lugarAlerta = "";
      if (selectedValue == "Reczen") {
        mark.latitude = 14.047690906785062;
        mark.longitude = -87.17439875006676;
        mark.Mensaje = number;
        lugarAlerta = "Reczen";
        setMarker([...marker, mark]);
      } else if (selectedValue == "Ed1") {
        mark.latitude = 14.049476193599759;
        mark.longitude = -87.17335302382708;
        mark.Mensaje = number;
        lugarAlerta = "Edificio 1";
        setMarker([...marker, mark]);
      } else if (selectedValue == "Ed2") {
        mark.latitude = 14.049276817205618;
        mark.longitude = -87.17330977320671;
        mark.Mensaje = number;
        lugarAlerta = "Edificio 2";
        setMarker([...marker, mark]);
      } else if (selectedValue == "Ed3") {
        mark.latitude = 14.049070935689828;
        mark.longitude = -87.17324741184711;
        mark.Mensaje = number;
        lugarAlerta = "Edificio 3";
        setMarker([...marker, mark]);
      } else if (selectedValue == "crai") {
        mark.latitude = 14.049245593480533;
        mark.longitude = -87.17373054474592;
        mark.Mensaje = number;
        lugarAlerta = "Crai";
        setMarker([...marker, mark]);
      } else if (selectedValue == "espresso") {
        mark.latitude = 14.04896132728758;
        mark.longitude = -87.17426396906376;
        mark.Mensaje = number;
        lugarAlerta = "Espresso";
        setMarker([...marker, mark]);
      } else if (selectedValue == "pcrai") {
        mark.latitude = 14.04947001390987;
        mark.longitude = -87.17400915920734;
        lugarAlerta = "Parqueo Crai";
        mark.Mensaje = number;
        setMarker([...marker, mark]);
      } else if (selectedValue == "cati") {
        mark.latitude = 14.048091288405574;
        mark.longitude = -87.17371378093958;
        mark.Mensaje = number;
        lugarAlerta = "Cafetería/Cati";
        setMarker([...marker, mark]);
      } else if (selectedValue == "Ed5") {
        mark.latitude = 14.04837913341098;
        mark.longitude = -87.17360984534025;
        mark.Mensaje = number;
        lugarAlerta = "Edificio 5";
        setMarker([...marker, mark]);
      } else if (selectedValue == "poli") {
        mark.latitude = 14.04797907754274;
        mark.longitude = -87.17434175312519;
        mark.Mensaje = number;
        lugarAlerta = "Polideportivo";
        setMarker([...marker, mark]);
      } else if (selectedValue == "gamer") {
        mark.latitude = 14.047765388877956;
        mark.longitude = -87.17442255467176;
        mark.Mensaje = number;
        lugarAlerta = "GameRoom";
        setMarker([...marker, mark]);
      } else if (selectedValue == "musicr") {
        mark.latitude = 14.047609269179441;
        mark.longitude = -87.17446312308311;
        mark.Mensaje = number;
        lugarAlerta = "MusicRoom";
        setMarker([...marker, mark]);
      } else if (selectedValue == "deck") {
        mark.latitude = 14.04829294257161;
        mark.longitude = -87.17487417161465;
        mark.Mensaje = number;
        lugarAlerta = "Deck";
        setMarker([...marker, mark]);
      } else if (selectedValue == "pisc") {
        mark.latitude = 14.048613312131485;
        mark.longitude = -87.17507567256689;
        mark.Mensaje = number;
        lugarAlerta = "Piscina";
        setMarker([...marker, mark]);
      } else if (selectedValue == "cf7") {
        mark.latitude = 14.047383871176955;
        mark.longitude = -87.17533718794584;
        mark.Mensaje = number;
        lugarAlerta = "Cancha";
        setMarker([...marker, mark]);
      } else if (selectedValue == "fmedicina") {
        mark.latitude = 14.047170832456954;
        mark.longitude = -87.17465858906507;
        mark.Mensaje = number;
        lugarAlerta = "Facultad de medicina";
        setMarker([...marker, mark]);
      }
      Alert.alert(
        "Usted ha marcado",
        lugarAlerta,
        [
          { text: "OK", onPress: () => on_Ok_Alert() }
        ]
      );
  
    };
    const list = [
      {
        title: "Marcar lugar", onPress: () => marcar(),
        containerStyle: { borderRadius: "13", backgroundColor: "#0f172a"},
        titleStyle: { color: "white" },
      },
      {
        title: "Notificaciones",
        containerStyle: { borderRadius: "13" },
      },
      {
        title: "Volver a mapa",
        containerStyle: { backgroundColor: "red", borderRadius: "13" },
        titleStyle: { color: "white" },
        onPress: () => setIsVisible(false),
      },
    ];
    let location = {
      latitude: 14.0485463,
      longitude: -87.1743247,
      latitudeDelta: 0.005,
    };
    
    const handleNewMarker = (coordinate) => {
      mark.latitude = coordinate.latitude;
      mark.longitude = coordinate.longitude;
      const newList = marker.filter(
        (item) =>
          item.longitude !== coordinate.longitude &&
          item.latitude !== coordinate.latitude
      );
      setMarker(newList);
      console.log(marker);
    };
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
          >
            
            {marker.length > 0 &&
              marker.map((m) => {
                return (
                  <Marker
                    coordinate={{ latitude: m.latitude, longitude: m.longitude }}
                    key={Math.random().toString()}
                    onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
                  >
                    <StyledMarker />
                  </Marker>
                );
              })}
          </MapView>
          <SafeAreaView style={tw`self-end w-6/12 h-3/30`}>
            <SafeAreaProvider>
              <Button
                title="Opciones"
                onPress={() => setIsVisible(true)}
                buttonStyle={tw`bg-slate-900 mb-5 rounded-3xl`}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <DismissKeyboard>
                  <View
                    style={tw`flex w-72 h-auto bg-gray-200 self-center m-64 rounded-xl`}
                  >
                    <View style={tw`w-full h-3 pr-3 pt-2 pb-4`}>
                      <Pressable
                        style={tw`w-6 h-6 self-end border-full border-red-600 rounded-full items-center bg-red-700 pt-1`}
                        onPress={() => {
                          setModalVisible(false);
                        }}
                      >
                        <Text style={tw`text-white text-md font-bold`}>x</Text>
                      </Pressable>
                    </View>
                    <View style={tw`w-full items-center p-3`}>
                      <SafeAreaView>
                        <TextInput
                          multiline={true}
                          style={tw`w-64 h-40 rounded-lg bg-gray-300 border-gray-400 border-1 p-3 text-black text-lg`}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Ingrese Descripción"
                          keyboardType="text"
                        />
                      </SafeAreaView>
                    </View>
                    <Picker
                      selectedValue={selectedValue}
                      style={tw`h-5/12 w-auto`}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                      }
                    >
                      <Picker.Item label="Edificio 1" value="Ed1" />
                      <Picker.Item label="Edificio 2" value="Ed2" />
                      <Picker.Item label="Edificio 3" value="Ed3" />
                      <Picker.Item label="CRAI" value="crai" />
                      <Picker.Item label="Espresso" value="espresso" />
                      <Picker.Item label="Parqueo CRAI" value="pcrai" />
                      <Picker.Item label="CATI/Cafeteria" value="cati" />
                      <Picker.Item label="Edificio 5" value="Ed5" />
                      <Picker.Item label="Polideportivo" value="poli" />
                      <Picker.Item label="Reczen" value="Reczen" />
                      <Picker.Item label="GameRoom" value="gamer" />
                      <Picker.Item label="MusicRoom" value="musicr" />
                      <Picker.Item label="Deck" value="deck" />
                      <Picker.Item label="Piscina" value="pisc" />
                      <Picker.Item label="Canchas(F7)" value="cf7" />
                      <Picker.Item
                        label="Facultad de Medicina"
                        value="fmedicina"
                      />
                    </Picker>
                    <View style={tw`items-center py-8 mb-2 `}>
                      <Pressable
                        style={tw`w-25 h-10 bg-slate-900 text-black rounded-full items-center pt-1 mb-4`}
                        onPress={() => reportar()}
                      >
                        <Text style={tw` text-lg self-center text-white `}>
                          {" "}
                          Reportar{" "}
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </DismissKeyboard>
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
  