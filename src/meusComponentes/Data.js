import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super();
        this.props = props;
        this.state = { 
                        dataAtual : new Date().toLocaleString()
                     }
    }       
    pagaDatade(timeZone){
        const dataAtual = new Data();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 + 1000));
        const data = new Date(milisegundos);
    }
    componentDidMount(){
        console.log("O componente foi montado");
        //Não é permitido atualizar o estado do componente de forma direta
        //this.state = ...
        this.setState({
            dataAtual : new Date().toLocaleString()
        })
    }
    componentDidUpdate(){
        console.log("O componente foi atualizado");
        setTimeout(()=>{
            this.setState({
                dataAtual : new Date().toLocaleString()
                //dataAtual: this.pagaDatade(this.props.timeZone).toLocaleString()
            });
            },1000);
    }
    //sobrescrita de método
    render(){ // utiliza-se para ganhar visibilidade
        return(
            <h1> { this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }
}
