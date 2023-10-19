import { FlatList, StyleSheet } from 'react-native';
import usePoupanca from '../../../hook/usePoupanca';
import PoupancaValor from './PoupancaValor';

export default function Poupanca() {

    const [listaPoupanca] = usePoupanca();

    const ListaPoupanca = () => { }
    return <FlatList
        data={listaPoupanca}
        renderItem={({ item }) => <PoupancaValor {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={ListaPoupanca}
        sytle={estilos.card} />
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