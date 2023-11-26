import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconSenha from "react-native-vector-icons/Ionicons";
import { registerUser, getUsers } from "../../service/userService";

export default function Cadastro() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [passhide, setPasshide] = useState(true);

  const handleCadastro = async () => {
    // Verificar se o e-mail já existe
    const users = await getUsers();
    if (users.some((user) => user.user === email)) {
      showAlert("Erro", "Este e-mail já está em uso. Tente outro.");
      return;
    }

    // Validações adicionadas para senha e e-mail
    if (senha.length < 6 || !/[a-zA-Z]/.test(senha) || !/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
      showAlert("Erro", "A senha deve ter pelo menos 6 caracteres, incluindo pelo menos uma letra e um caractere especial.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("Erro", "Formato de e-mail inválido.");
      return;
    }

    // Aguarda a conclusão da função registerUser
    await registerUser(email, senha, name);
    const updatedUsers = await getUsers();
    console.log(updatedUsers);
    navigation.navigate("Login")

  };

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar backgroundColor="#DAA520" barStyle="light-content" />
      <Text style={styles.formTitle}> Cadastro </Text>

      <KeyboardAvoidingView style={styles.containerP}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu name"
          placeholderTextColor="#000000"
          value={name}
          onChangeText={(texto) => setName(texto)}
        />
        <Icon style={styles.icon} name="user" size={25} color="#000000" />
      </KeyboardAvoidingView>

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

      <TouchableOpacity 
        style={styles.formButton} onPress={handleCadastro}
        >
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.subTextButton}>Voltar para o Login</Text>
      </TouchableOpacity>
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
  formTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    margin: 10,
  },
  containerP: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 5,
    color: "#000000",
  },
  icon: {
    position: "absolute",
    right: 15,
  },
  formButton: {
    backgroundColor: "#DAA520",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    margin: 10,
  },
  textButton: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subButton: {
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  subTextButton: {
    color: "#ffffff",
  },
});

