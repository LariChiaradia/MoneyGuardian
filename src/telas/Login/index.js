import React, { useState, useEffect } from "react";
import { useNavigation, Alert } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
import IconSenha from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { getUsers } from "../../service/userService";
import { setEmailUser, setName, setPassword, setToken } from "../../store/authSlice";

// teste1@g.com
// 12345v@

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [passhide, setPasshide] = useState(true);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [users, setUsers] = useState([]);


  const handleLogin = async () => {
    try {
      const userList = await getUsers();
      const user = userList.find((user) => user.user === email);
  
      console.log(user)
      console.log("")

      if (user) {
        if (user.password === senha) {
          navigation.navigate("HomePage");
          dispatch(setEmailUser(user.user));
          dispatch(setPassword(user.senha));
          dispatch(setName(user.name));
          
          console.log(user.name)
          console.log("")
          
          console.log(user.name)
          console.log("")

        } else {
          setErrorModalVisible(true);
        }
      } else {
        setErrorModalVisible(true);
      }
    } catch (error) {
      console.error("Erro ao obter usuários:", error);
    }
  };
  const closeErrorModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar backgroundColor="#DAA520" barStyle="light-content" />
      <Animatable.Image
        animation="flipInY"
        source={require("../../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.formTitle}> Login </Text>

      <KeyboardAvoidingView style={styles.containerP}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          placeholderTextColor="#000000"
          value={email}
          onChangeText={(texto) => setEmail(texto)}
        />
        <Icon style={styles.icon} name="mail" size={25} color="#000000" />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView style={styles.containerP}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          placeholderTextColor="#000000"
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
          secureTextEntry={passhide}
        />

        <TouchableOpacity
          style={styles.icon}
          onPress={() => setPasshide(!passhide)}
        >
          <IconSenha
            name={passhide ? "ios-eye" : "ios-eye-off"}
            color="#000000"
            size={30}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.subButton,
          { backgroundColor: pressed ? "#DAA520" : "transparent" },
        ]}
        onPress={() => navigation.navigate('Cadastro')}
  >
    <Text style={styles.subTextButton}>Criar novo usuário</Text>
  </Pressable>
</View>


      {/* Error Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={closeErrorModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>
              Senha errada ou usuário não encontrado
            </Text>
            <TouchableOpacity onPress={closeErrorModal}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    padding: 8,
  },
  logo: {
    width: 250,
    height: 250,
    alignItems: "center",
  },
  formTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    margin: 10,
  },
  containerP: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 5,
    color: "#000000",
  },
  icon: {
    position: "absolute",
    right: 45,
  },
  formButton: {
    backgroundColor: "#DAA520",
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    padding: 10,
    margin: 10,
  },
  textButton: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  subButton: {
    padding: 10,
    borderRadius: 10, 
    alignSelf: 'center', 
    marginTop: 10, 
    marginLeft: 85, 
  },
  subTextButton: {
    color: "#ffffff",
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: "#DAA520",
    fontWeight: "bold",
  },
});
