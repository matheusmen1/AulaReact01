import {useState, useEffect} from 'react'; 
//useEffetct é um hook que permite gerenciar o ciclo de vida do componente
//quando ele é desenvolvido utilizando a sintaxe JSX
/*
useEffect(function()){
    return function() <-- willUnmount
}, [] didMount // executa uma vez só
   [lista de valores observados] didUpdate para cada valor que foi atualizado
*/

export default function DataV2(props){
    const [dataAtual, setDataAtual] = useState(new Date().toLocaleString());
    function pegaDatade(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 + 1000));
        const data = new Date(milisegundos);
        return data;
    }
    //exemplo de didMount
    useEffect(()=>{
        setDataAtual(new Date().toLocaleString());
        return ()=>{}
    }, [])
    //exemplo de didUpdate
    useEffect(()=>{
        setTimeout(()=>{

             setDataAtual(pegaDatade(props.timeZone).toLocaleString());
            },1000);
            
    },[dataAtual]); //<-- O que observar para executar a função a cada atualização do que esta sendo observado
    return(
        <h1> {props.texto || ""}{dataAtual}</h1>
    );
}