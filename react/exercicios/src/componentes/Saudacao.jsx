import React, { Component } from 'react'

export default class Saudacao extends Component {
    setNome(e){
        this.setState({nome: e.target.value})
    }
    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    
    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this) 
         
       
    }
    state = {
        tipo:this.props.tipo,
        nome:this.props.nome
    }
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>
                    {tipo} {nome}!
                </h1>
                <hr/>
                <input type="text"  placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" name=""placeholder="nome" onChange={e =>this.setNome(e)} value={nome} id=""/>
            </div>
        )
    }
}