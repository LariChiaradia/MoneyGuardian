import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Topo() {
  const userName = useSelector((state) => state.user.name);
  return (
    <>
      <View>
        <Text style={estilos.titulo}>Olá, {userName}</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#ffffff",
    fontSize: 26,
    margin: 20,
  },
});
