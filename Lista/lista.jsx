
import React from "react"

const Lista = () => {

    const [items, setItems] = React.useState([ 'Item 0'])

    function HeandleClick(){
        setItems([...items, "Item " + items.length])

    }

    function RemoveItem() {

     const novaLista = [...items]
     novaLista.pop()
     setItems(novaLista)
        
    }

    return (
        <>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        <button onClick={HeandleClick}>Adicionar Item</button>
        <button onClick={RemoveItem}>Remove Item</button>

        </>

    )
    
    

}

export default Lista;