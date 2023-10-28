import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, View, Text, Modal } from "react-native";
import Despesas from "./components/Despesas";
import Topo from "./components/Topo";
import { TextInput } from "react-native";

export default function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={estilos.tela}>
      <SafeAreaView>
        <Topo />
        <Despesas />
      </SafeAreaView>
      <TouchableOpacity title="Adicionar" style={estilos.buttonStyle}>
        <Text style={estilos.text} onPress={() => setModalVisible(true)}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={estilos.centeredView}>
          <View style={estilos.modalView}>
            <TextInput style={estilos.input} placeholder="Nome" />
            <TextInput style={estilos.input} placeholder="Valor" />
            <TouchableOpacity
              style={estilos.buttonStyle}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={estilos.text}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "80%",
    backgroundColor: "#000000",
    marginTop: 50,
  },

  text: {
    color: "#000000",
    fontSize: 26,
    width: 250,
    textAlign: "center",
  },

  buttonStyle: {
    backgroundColor: "#DAA520",
    margin: 10,
    marginTop: 30,
    borderRadius: 6,
    color: "#000000",
    padding: 10,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    margin: 10,
    marginTop: 20,
    borderRadius: 6,
    color: "#000000",
    padding: 10,
  },
  tela: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
  },
});
