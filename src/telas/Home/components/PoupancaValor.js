import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function PoupancaValor({ icon, colorIcon, valor }) {
  const [hide, setHide] = useState(true);
  const formattedValue = parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <TouchableOpacity style={estilos.card} onPress={() => setHide(!hide)}>
      <View style={estilos.informacoes}>
        <Icon
          name={hide ? "ios-eye" : "ios-eye-off"}
          size={30}
          color={colorIcon}
          style={estilos.icon}
        />
        <View style={estilos.conteudo}>
          <Text style={estilos.valor}>{hide ? "*******" : formattedValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: "#F6F6F6",
    padding: 15,
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
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 10,
  },
  informacoes: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
    alignItems: "center",
  },
  conteudo: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 60,
    alignItems: "center",
  },
  valor: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
  },
});
