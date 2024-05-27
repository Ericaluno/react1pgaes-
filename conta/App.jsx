
import React from "react";

// Estado
// O esatado de uma aplicaçao representa as caracteristicas dela naquele momento

// const App = () => {

//      const ativo = true

//      return(
//         <button>{ativo ? "Botao ativo" : "Botao inativo"}</button>
//     )

// }

// export default App;
// Hooks
// OS hooks sao funcaoes especiais do react que permitem controlarmos o estado e o ciclo de vida de coponentes funcionais.


// ------------------------//
// react.useState
// o React.useState é uma funcao que retorna uma array com o 2 valores. o primeiro valor guarda o dado do estado atusl, pode ser qualquer tipo de dado com strings, arrays, boolean, null
// undefined o objeto. o segundo valor é uma funçao que pode ser utilizada para modificar o estado do primeiro valor.

    const App = () =>{

    const [ativo, setAtivo] = React.useState(true)
    const [contar, setContar] = React.useState(0)
    const [item, setItem] = React.useState([`item 1,`])


    function HandleClick(){
        setContar((contar)=>{
            return contar + 1
        })
        setItem((item) =>{
            return[...item,'item ' + contar]
        })
        
    }

    return(
        <>
        <button onClick={() => setAtivo(!ativo)}>
            {ativo ? "Ativo" : "Inativo"}
        </button>
        <button onClick={() => HandleClick(contar + 1)}>
            {contar}
        </button>
        {item.map((item)=>(
            <li key={item}>{item}</li>
        ))}
        </>
    )
}

export default App;