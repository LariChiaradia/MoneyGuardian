import { useEffect, useState } from "react";
import { carregaDespesas } from "../service/carregaDados";

export default function useDespesas() {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      const transacoes = await carregaDespesas();

      if (transacoes && transacoes.length > 0) {
        setTitulo("Despesas");
        setLista(transacoes);
      }
    };

    carregarDados();
  }, []);

  return [titulo, lista];
}
