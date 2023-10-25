import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Despesas from './components/Despesas';
import Topo from './components/Topo';

export default function HomePage() {
    return (
        <ScrollView style={estilos.tela}>
            <SafeAreaView>
                <Topo />
                <Despesas />
            </SafeAreaView>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    tela: {
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
    }
})