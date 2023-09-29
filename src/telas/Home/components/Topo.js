import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Topo() {
    return <>
        <View>
            <Text style={estilos.titulo}>Olá, Joana</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#ffffff",
        fontSize: 26,
        margin: 20,
    }
})