import React, { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
} from "react-native";
import Despesas from "./components/Despesas";
import Topo from "./components/Topo";
import { TextInput } from "react-native";
import { categories } from "../../utils/categories";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CurrencyInput from "react-native-currency-input";

export default function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [categorias, setCategorias] = useState({
    key: "0",
    name: "Selecione uma categoria",
    icon: "timer-sand-empty",
    color: "#000000",
  });
  const [categoriaVisible, setCategoriaVisible] = useState(false);
  const [valor, setValor] = useState("");

  const handlecategoria = (categoria) => {
    setCategorias(categoria);
    setCategoriaVisible(false);
  };

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
            <TouchableOpacity
              style={estilos.buttonCategoria}
              onPress={() => setCategoriaVisible(true)}
            >
              <Icon
                name={categorias.icon}
                size={30}
                color={categorias.color}
                style={estilos.icon}
              />
              <Text>{categorias.name}</Text>
            </TouchableOpacity>

            <CurrencyInput
              style={estilos.input}
              value={valor}
              onChangeValue={setValor}
              prefix="R$"
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
            />
            {categoriaVisible && (
              <ScrollView>
                {categories.map((item) => (
                  <TouchableOpacity
                    style={estilos.optionsCategories}
                    key={item.key}
                    onPress={() => handlecategoria(item)}
                  >
                    <Icon name={item.icon} size={30} color={item.color} style={estilos.icon} />
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}

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
  optionsCategories: {
    gap: 10,
    flexDirection: "row",
    backgroundColor: "#dbdbdb",
    marginHorizontal: 10,
    borderRadius: 6,
    color: "#000000",
    padding: 15,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  buttonCategoria: {
    gap: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 6,
    color: "#000000",
    padding: 15,
    alignItems: "center",
  },
  centeredView: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "100%",
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
