import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "twrnc";

export default function Loading() {
  return (
    <View style={tw`bg-slate-900 justify-center items-center h-full`}>
      <Text style={tw`text-white text-xl font-bold`}>
        Ustedes la verdad es que me pelan toda la verga 0tes malditos! .l.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
