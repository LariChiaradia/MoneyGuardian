import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Topo() {
 
  const user = useSelector ( (state) => state.user.name ) 


  console.log(user)
  return (
    <>
      <View>
        <Text style={estilos.titulo}>Olá, {user} </Text>
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
