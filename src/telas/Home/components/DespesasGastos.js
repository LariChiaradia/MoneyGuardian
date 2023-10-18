import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DespesasGastos({ nome, icon, colorIcon, valor }) {

    return <TouchableOpacity
        style={estilos.card}
    >
        <Icon name={icon} size={48} color={colorIcon} style={estilos.icon} />
        <View style={estilos.informacoes}>
            <View style={estilos.conteudo}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.valor}>{valor}</Text>
            </View>
        </View>

    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        // Sombra Android
        elevation: 4,
        // Sombra IOS
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    icon: {
        width: 48,
        height: 48,
        marginVertical: 10,
        marginLeft: 10,
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
        alignItems: "center",
    },
    conteudo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginRight: 60,
        alignItems: "center",
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    valor: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
})