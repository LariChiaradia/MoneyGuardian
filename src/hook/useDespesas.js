import { useEffect, useState } from "react";
import { carregaDespesas } from "../service/carregaDados";

export default function useDespesas() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaDespesas();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista];
}