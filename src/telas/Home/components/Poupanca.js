import { StyleSheet, Text, View } from 'react-native';

export default function Poupanca() {
    return <>
        <View style={estilos.card}>
            <Text style={estilos.valor}>R$ 2.000,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "#F6F6F6",
        padding: 40,
        margin: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 4,
    },
    valor: {
        color: '#000000',
    },
})