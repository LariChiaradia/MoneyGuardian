import { useEffect, useState } from "react";
import { carregaPoupanca } from "../service/carregaDados";

export default function usePoupanca() {

    const [listaPoupanca, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaPoupanca();
        setLista(retorno.listaPoupanca);
    }, []);

    return [listaPoupanca];
}