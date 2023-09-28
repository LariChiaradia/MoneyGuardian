import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Topo() {
    return <>
        <Text style={estilos.titulo}>Olá, Tarita</Text>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#ffffff",
        fontSize: 26,
        margin: 20,
    }
})