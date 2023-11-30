import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Topo from '../Home/components/Topo';
import { SafeAreaView, DrawerLayoutAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DespesasGraficoPizza = () => {
    const navigation = useNavigation();

    const [dataForChart, setDataForChart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const datakey = "@moneyguardian:despesas";
                const data = await AsyncStorage.getItem(datakey);
                const parsedData = data ? JSON.parse(data) : [];
                const groupedCategories = {};

                parsedData.forEach((item) => {
                    const categoryName = item.categoria;
                    const valor = parseFloat(item.valor);

                    if (groupedCategories[categoryName]) {
                        groupedCategories[categoryName].valor += valor;
                    } else {
                        groupedCategories[categoryName] = {
                            name: categoryName,
                            color: item.color,
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15,
                            valor: parseFloat(item.valor),
                        };
                    }
                });
                const formattedData = Object.values(groupedCategories);

                setDataForChart(formattedData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    const navigationView = () => (
        <View style={[styles.containerDrawer, styles.navigationContainer]}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <Text style={styles.HomePages}>Tela Inicial</Text>
            </TouchableOpacity>
            <View style={styles.separador} />

            <TouchableOpacity onPress={() => navigation.navigate('DespesasGraficos')}>
                <Text style={styles.TextGrafico}>Gráficos</Text>
            </TouchableOpacity>
        </View>
    );
    const drawer = useRef(null);
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
            <View style={styles.tela}>
                <SafeAreaView>
                    <Topo onOpenDrawerClick={openDrawer} />
                </SafeAreaView>
                <PieChart
                    data={dataForChart}
                    width={400}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#1E2923",
                        backgroundGradientTo: "#08130D",
                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    }}
                    accessor="valor"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Categoria</Text>
                        <Text style={styles.tableHeaderText}>Valor</Text>
                    </View>

                    <FlatList
                        data={dataForChart}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <View style={styles.column}>
                                    <Text style={styles.category}>{item.name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.value}>{`R$ ${item.valor.toFixed(2)}`}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        width: '80%'
    },

    containerDrawer: {
        backgroundColor: "black",
        flex: 1,
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#daa520',
    },
    divider: {
        borderBottomWidth: 5,
        borderRightColor: '#daa520',
    },
    chart: {
        marginVertical: 20,
        alignSelf: 'center'
    },
    tableContainer: {
        width: '80%',
        marginTop: 20,
        alignSelf: 'center'

    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    },
    tableHeaderText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    expenseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    expenseText: {
        color: '#ffffff',
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
    HomePages: {
        color: "#daa520",
        fontSize: 25,
    },

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    drawerHeader: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    category: {
        color: '#ffffff',
        fontSize: 16,
    },
    value: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default DespesasGraficoPizza;
