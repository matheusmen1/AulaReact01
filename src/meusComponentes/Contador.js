import { Component } from "react";
export default class Contador extends Component{

    constructor(props)
    {
        super();
        this.props = props;

    }
    componentDidMount(){

        console.log("O componente foi montado");
    }
    componentDidUpdate(){
        console.log("O componente foi atualizado")
    }
    render(){ // utiliza-se para ganhar visibilidade
        return(
            <h1> { this.props.texto || ""}</h1>
        )
    }
}   