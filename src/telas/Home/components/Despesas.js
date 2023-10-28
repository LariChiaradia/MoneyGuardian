import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import useDespesas from "../../../hook/useDespesas";
import DespesasGastos from "./DespesasGastos";
import Poupanca from "./Poupanca";

export default function Despesas() {
  const [titulo, lista] = useDespesas();

  const ListaDespesas = () => {
    return (
      <>
        <Poupanca />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <ScrollView style={estilos.despesasContent}>
      <FlatList
        data={lista}
        renderItem={({ item }) => <DespesasGastos {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={ListaDespesas}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  despesasContent: {
    maxHeight: 450,
  },
  cardPoucanca: {
    backgroundColor: "#F6F6F6",
    padding: 40,
    margin: 16,
    borderRadius: 6,
    flexDirection: "row",
    elevation: 4,
  },
  valor: {
    color: "#000000",
  },
  titulo: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#ffffff",
    paddingHorizontal: 20,
    margin: 10,
  },
  cardGastos: {
    backgroundColor: "#F6F6F6",
    padding: 20,
    margin: 16,
    borderRadius: 6,
    flexDirection: "row",
    elevation: 4,
  },
});
