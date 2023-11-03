import { useEffect, useState } from "react";
import { carregaPoupanca } from "../service/carregaDados";

export default function usePoupanca() {
  const [listaPoupanca, setLista] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      const poupanca = await carregaPoupanca();
      setLista(poupanca);
    };

    carregarDados();
  }, []);

  return [listaPoupanca];
}
