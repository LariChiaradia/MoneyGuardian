import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DespesasGastos({ categoria, icon, color, valor, description, date}) {
  const [dataFormatada, setDataFormatada] = useState("");
  const formattedValue = parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
 useEffect(() => {
    const data = new Date(date);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const dataFormatadaString = ${dia}/${mes}/${ano};
    setDataFormatada(dataFormatadaString);
  }, [date]);

  return (
    <TouchableOpacity style={estilos.card}>
      <View style={estilos.date}>
      <Text style={estilos.dateText}>{dataFormatada}</Text>
    </View>

      <Icon name={icon} size={48} color={color} style={estilos.icon} />
      <View style={estilos.informacoes}>
        <View style={estilos.conteudo}>
          <Text style={estilos.nome}>{categoria}</Text>
          <Text style={estilos.valor}>{formattedValue}</Text>
        </View>

        <View style={estilos.description}>
        <Text style={estilos.descriptionText}>{description}</Text>
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
  date: {
    
    flexDirection: "row",
    position: "absolute",
    right: 0,
    paddingRight: 5,
  },
  dateText: {
  fontSize:10,
  textAlign: "right",
  color: "#292929",
  },
  icon: {
    width: 48,
    height: 48,
    marginVertical: 10,
    marginLeft: 10,
  },
  informacoes: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 5,
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
  description: {
    justifyContent: "center",
    marginLeft: 8,
    marginRight: 60,
    paddingBottom: 5,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 16,
    color: "#666666",
    textAlign: "justify",
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
  },
  valor: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
  },
});