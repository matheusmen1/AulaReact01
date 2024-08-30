import { Component } from "react";
export default class Contador extends Component{

    constructor(props)
    {
        super();
        this.state = {valor:0};
        //this.incrementar = this.incrementar.bind(this);
        //this.decrementar = this.decrementar.bind(this);
    }
    componentDidMount(){

        console.log("O componente foi montado");
    }
    componentDidUpdate(){
        console.log("O componente foi atualizado")
    }
    incrementar() // method
    {
        let valorAtual = this.state.valor;
        let valorNovo = valorAtual + 1;
        this.setState({
            valor: valorNovo
        });
        

    }
    decrementar() // method
    {
        let valorAtual = this.state.valor;
        let valorNovo = valorAtual - 1;
        this.setState({
            valor : valorNovo
        });

    }
    render(){ // utiliza-se para ganhar visibilidade
        return( // so é possível retornar um elemento html por vez / para estilizar é necessario usar "className"
            <div> 
                <div className="visor">
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={
                        () =>{
                            this.incrementar();
                        }
                    }>+</button> 
                    <button onClick={
                        () =>{
                            this.decrementar();
                        }
                    }>-</button>
                </div>
            </div>
        )// é necessario usar colchets (chaves) para misturar html com javascript
    }
}   