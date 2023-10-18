import { useEffect, useState } from "react";

export default function usePoupanca() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaPoupanca();
        setLista(retorno.lista);
    }, []);

    return [lista];
}