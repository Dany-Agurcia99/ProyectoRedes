import { View, Text, Box, Button } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Mapa from "../Imagenes/mapa.jpg"

export default function Principal() {
    return (
        <View style={tw`flex bg-black h-full`}>
            <View style={tw`flex-1 flex-row w-full h-full bg-yellow-100 justify-center items-center`}>
                {/*FLOATING BOX*/}
                <View style={tw`self-end w-10/12 h-3/12 bg-slate-900 mb-5 rounded-3xl`}>

                </View>
            </View>
            {/*NAVBAR*/}
            <View style={tw`flex-initial flex-row h-18 w-5/6 mt-10 absolute self-center`}>
                <View style={tw`flex-none bg-slate-900 w-1/6 items-center justify-center rounded-bl-2xl rounded-tl-2xl`}>
                    <Text style={tw`text-xl font-bold text-white`}>
                        ...
                    </Text>
                </View>
                <View style={tw`flex-1 bg-slate-900 w-4/6 items-center justify-center`}>
                    <Text style={tw`text-2xl font-bold text-white`}>
                        Unitec
                    </Text>
                </View>
                <View style={tw`flex-initial bg-slate-900 w-1/6 items-center justify-center rounded-br-2xl rounded-tr-2xl pb-2`}>
                    <Text style={tw`text-xl font-bold text-white`}>
                        ...
                    </Text>
                </View>
            </View>
        </View>
    )
}
