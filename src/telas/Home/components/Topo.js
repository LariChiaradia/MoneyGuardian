import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Topo({ onOpenDrawerClick }) {
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    // Navegar de volta para a tela de login
    navigation.navigate("Login");
  };

  return (
    <View style={estilos.container}>
    {/* Ícone de hambúrguer para abrir o drawer */}
    <TouchableOpacity style={estilos.botaoDrawer} onPress={onOpenDrawerClick}>
      <Icon name="bars" size={30} color="#fff" />
    </TouchableOpacity>
    
      <Text style={estilos.titulo}>Olá, {user} </Text>
      {/* Botão de Sair */}
      <TouchableOpacity onPress={handleLogout}>
        <Text style={estilos.sair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 26,
  },
  sair: {
    color: "#ffffff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
