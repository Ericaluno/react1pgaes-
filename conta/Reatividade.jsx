import React from "react"
const Reatividade = () =>{

    const [items, setItems] = React.useState(["Item 1", "Item 2"])

    function handleClic(){
        items.push("Novo Item")
    }

    function handleClickReativo(){
        setItems([...items, "Novo item"])
    }

    return(
        <>
     {items.map((item, index)=>(
        <li key={index}>{item}</li>
     ))}
     <button onClick={handleClickReativo}>Adicionar item</button>
     </>
    )
}

export default Reatividade;