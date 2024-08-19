import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super();
        this.props = props;
        this.dataAtual = new Date().toLocaleDateString();
    }
    componentDidMount(){
        console.log("O componente foi montado");
        this.dataAtual = new Date().toLocaleDateString();
    }
    componentDidUpdate(){
        console.log("O componente foi atualizado");
    }
    //sobrescrita de método
    render(){ // utiliza-se para ganhar visibilidade
        return(
            <h1> { this.props.texto || ""}{this.dataAtual}</h1>
        )
    }
}
