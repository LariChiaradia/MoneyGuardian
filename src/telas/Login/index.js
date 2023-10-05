import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import IconSenha from 'react-native-vector-icons/Ionicons';

export default function Login() {
    const navigation = useNavigation();

    const [senha, setSenha] = useState('');
    const [passhide, setPasshide] = useState(true);

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#DAA520" barStyle="light-content" />
            <Animatable.Image
                animation="flipInY"
                source={require('../../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.formTitle}> Login </Text>

            <KeyboardAvoidingView style={styles.containerP}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu Email"
                    placeholderTextColor="#000000"
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
                    onPress={() => setPasshide(!passhide)}>
                    <IconSenha
                        name={passhide ? 'ios-eye' : 'ios-eye-off'}
                        color="#000000"
                        size={30}
                    />
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('HomePage')}>
                <Text style={styles.textButton}>Logar</Text>
            </TouchableOpacity>
            <View style={styles.subContainer}>
                <Pressable style={styles.subButton}>
                    <Text style={styles.subTextButton}>Esqueci a senha</Text>
                </Pressable>
                <Pressable style={styles.subButton}>
                    <Text style={styles.subTextButton}>Criar novo usuário</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        padding: 8,
    },
    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffffff',
        margin: 10,
    },
    containerP: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 5,
        color: '#000000',
    },
    icon: {
        position: 'absolute',
        right: 45,
    },
    formButton: {
        backgroundColor: '#DAA520',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        padding: 10,
        margin: 10,
    },
    textButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton: {
        padding: 10,
    },
    subTextButton: {
        color: '#ffffff',
    },
});