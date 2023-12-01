import React, { useState, useEffect, useRef } from "react";
import {
  Alert,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  ScrollView,
  DrawerLayoutAndroid,
  Button,
} from "react-native";
import Despesas from "./components/Despesas";
import Topo from "./components/Topo";
import { categories } from "../../utils/categories";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CurrencyInput from "react-native-currency-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [categorias, setCategorias] = useState({
    key: "0",
    name: "Selecione uma categoria",
    icon: "timer-sand-empty",
    color: "#000000",
  });
  const [categoriaVisible, setCategoriaVisible] = useState(false);
  const [valor, setValor] = useState("");
  const [updateDespesasKey, setUpdateDespesasKey] = useState(0);
  const [description, setDescription] = useState("");

  const handlecategoria = (categoria) => {
    setCategorias(categoria);
    setCategoriaVisible(false);
  };

  const drawer = useRef(null);

  async function handleSave() {
    const datakey = "@moneyguardian:despesas";

    if (categorias.key === "0") {
      Alert.alert("Erro", "Selecione uma categoria");
      return;
    }

    if (valor === "") {
      Alert.alert("Erro", "Informe o valor da despesa");
      return;
    }

    if (description === "") {
      Alert.alert("Erro", "Adicione descrição");
      return;
    }

    setModalVisible(false);
    const newTransaction = {
      key: categorias.key,
      categoria: categorias.name,
      icon: categorias.icon,
      color: categorias.color,
      valor: valor,
      description: description,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(datakey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTransaction];
      await AsyncStorage.setItem(datakey, JSON.stringify(dataFormatted));

      setCategorias({
        key: "0",
        name: "Selecione uma categoria",
        icon: "timer-sand-empty",
        color: "#000000",
      });
      setValor("");
      setDescription("");
      setUpdateDespesasKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const navigationView = () => (
    <View style={[estilos.container, estilos.navigationContainer]}>
      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <Text style={estilos.HomePages}>Tela Inicial</Text>
      </TouchableOpacity>

      <View style={estilos.separator} />

      <TouchableOpacity onPress={() => navigation.navigate("DespesasGraficos")}>
        <Text style={estilos.TextGrafico}>Gráficos</Text>
      </TouchableOpacity>
    </View>
  );
  const openDrawer = () => {
    drawer.current.openDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={estilos.tela}>
        <SafeAreaView>
          <Topo onOpenDrawerClick={openDrawer} />
          <Despesas key={updateDespesasKey} />
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
              <TextInput
                style={estilos.input}
                onChangeText={setDescription}
                placeholder="Descrição"
                value={description}
              />
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
                      <Icon
                        name={item.icon}
                        size={30}
                        color={item.color}
                        style={estilos.icon}
                      />
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}

              <TouchableOpacity style={estilos.buttonStyle} onPress={handleSave}>
                <Text style={estilos.text}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </DrawerLayoutAndroid>
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
  TextGrafico: {
    color: "#daa520",
    padding: 20,
    fontSize: 25,
  },
  separator: {
    height: 1,
    backgroundColor: "gray", // Cor da linha divisória
    marginVertical: 5,
  },
  HomePages: {
    color: "#daa520",
    fontSize: 25,
  },
  container: {
    flex: 1,
    padding: 50,
    display: "flex",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#daa520",
  },

  navigationContainer: {
    backgroundColor: "#000000",
  },

  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
