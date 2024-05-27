
import React from "react";
import './App.css'

const App = () =>{
    const [contar, setContar] = React.useState(0)

    function Acrescimo (){
        setContar(contar + 1)
    }

    return(
        <>
        <button className="botao" onClick={() => setContar(contar -1)}>-</button>
        <span>{contar}</span>
        <button className="botao" onClick={Acrescimo}>+</button>
        </>

    )
}

export default App;