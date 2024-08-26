import { useState } from "react";
export default function Contador(props) {
    const [valor,setvalor] = useState(0); //hook useState
    function incrementar(){
        setvalor(valor + 1);
    }
    function decrementar(){
        setvalor(valor -1 );
    }
    return (
        <div>
            <div className="visor">
                <h1>{valor}</h1>
            </div>
            <div className="botoes">
                <button onClick={() =>{
                    incrementar();
                }}>+</button>
                <button onClick={()=>{
                    decrementar();
                }}>-</button>
            </div>
        </div>

    );
}