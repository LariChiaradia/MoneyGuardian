import AsyncStorage from "@react-native-async-storage/async-storage";

export const carregaDespesas = async () => {
  const datakey = "@moneyguardian:despesas";
  const response = await AsyncStorage.getItem(datakey);
  const transactions = response ? JSON.parse(response) : [];
  return transactions;
};

export const carregaPoupanca = async () => {
  const datakey = "@moneyguardian:despesas";
  const response = await AsyncStorage.getItem(datakey);
  const transactions = response ? JSON.parse(response) : [];
  var poupanca = {
    listaPoupanca: [
      {
        icon: "eye",
        icon2: "eye-off",
        colorIcon: "#001232",
        valor: "0,00",
      },
    ],
  };
  transactions.forEach((item) => {
    poupanca.listaPoupanca[0].valor =
      parseFloat(poupanca.listaPoupanca[0].valor) + parseFloat(item.valor);
  });
  return poupanca;
};
