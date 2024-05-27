import React from "react"
import {Formulario, Input, Label} from "../Styles/Form"

const Form = () =>{

    const [nome, setNome] = React.useState('')

    return(
        <Formulario>
              <Label htmlFor="nome">Nome</Label>
             <Label onChage={({target}) =>setNome(target.value)} value={nome} id="nome" type="text"/>
            <Input id="nome" type="text" />
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email"/>
            <Label htmlFor="senha">Senha</Label>
            <Input id="senha" type="password"></Input>
            {nome} 
        </Formulario>
    )
}

export default Form;