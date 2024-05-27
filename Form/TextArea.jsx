 
 import React from "react"
 
 const TextArea = () =>{
   

    const [mensage, setMensage] = React.useState('')

    return(
    <form> 
        <textarea
           
           value={mensage}
           id="mensage" 
           rows="5" 
           onChange={({target}) => setMensage(target.value)}
         
         />
         <p>{mensage}</p>       
        </form>
    )
 }

 export default TextArea;