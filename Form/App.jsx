
import React from "react"
import  './Form.css' 


const App = () => {

   const [nome, setNome] = React.useState('')
   const [Email, setEmail] = React.useState('')
   const [Senha, setSenha] = React.useState('')


   function HandleSubmit(event){
     event.preventDefault()
     console.log(event)
   }

   return(
      <form onSubmit={HandleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
        id="nome"
        type="text"
         value={nome}
         onChange={(event) => setNome(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input 
        id="email"
        type="text" 
        value={Email}
         onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="senha">Senha</label>
        <input 
        id="senha"
        type="password" 
        value={Senha}
         onChange={(event) => setSenha(event.target.value)}
        
    />

        <p>{nome}</p>
        <p>{Email}</p>
        <p>{Senha}</p>
       <button>Enviar</button>
      </form>
   )
}

export default App;