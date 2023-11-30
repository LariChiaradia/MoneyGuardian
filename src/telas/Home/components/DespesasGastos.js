import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DespesasGastos({ categoria, icon, color, valor }) {
  const formattedValue = parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <TouchableOpacity style={estilos.card}>
      <Icon name={icon} size={48} color={color} style={estilos.icon} />
      <View style={estilos.informacoes}>
        <View style={estilos.conteudo}>
          <Text style={estilos.nome}>{categoria}</Text>
          <Text style={estilos.valor}>{formattedValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: "#F6F6F6",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",
    // Sombra Android
    elevation: 4,
    // Sombra IOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  icon: {
    width: 48,
    height: 48,
    marginVertical: 10,
    marginLeft: 10,
  },
  informacoes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
    alignItems: "center",
  },
  conteudo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginRight: 60,
    alignItems: "center",
  },
  nome: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "bold",
  },
  valor: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "bold",
  },
});
