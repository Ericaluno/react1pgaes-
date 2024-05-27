
import React from "react";

const App = ()=> {
     
     const [cep, setCep] = React.useState('')
     const [error, setError] = React.useState(null)
    

     function validaCep(value){
         if(value.length === 0){
             setError("o campo nao pode esta vazio!")
             return false
         }else if(!/\d{5}-\d{3}/.test(value)){
             setError("Digite um CEP válido!")
             return false
         }else{
            setError(null)
            return true
         }
     }

     function handleBlur({target}){
        validaCep(target.value)

     }
    
     function preventDefault(event){
     event.preventDefault()
     }

    return(
         <form onSubmit={preventDefault}>
            <label htmlFor="cep">CEP</label>
            <input 

            style={error ? {borderColor:"red"}:
            {borderColor:"green"}}

            type="text" 
            id="cep"
            value={cep}
            onBlur={handleBlur}
            onChange={({target})=>setCep(target.value)}
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
          
         </form>
    )
}
export default App;




