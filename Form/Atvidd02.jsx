import React from "react"
import './Atvidd02.css'
 
const Atvidd02 = () =>{
  


  const [nome, setNome] = React.useState('')
  const [Email, setEmail] = React.useState('')
  const [Senha, setSenha] = React.useState('')
  const [numero, setNumero] = React.useState('')
  const [cep, setCep] = React.useState('')
  const [bairro, setBairro] = React.useState('')
  const [rua, setRua] = React.useState('')
  const [cidade, setCidade] = React.useState('')
  const [estado, setEstado] = React.useState('')

  const [response. setResponse] = React.useState(null)

  function HandleSubmit(event){
    event.preventDefault()
    const form = {
        nome,
        Email,
        Senha,
        numero,
        cep,
        rua,
        bairro,
        cidade,
        estado, 
        
       }
     
    }
}   
   
   fetch('http://ranekapi.origamid.dev/json/api/usuario',{
       method: 'POST' ,
       headers: {
           'Content-Type':'application/json'
       },
       body: JSON.stringify(dataform)

       
    }
    )

   
   

}
  return(
    <form onSubmit={HandleSubmit}
    style={{display:'flex',flexDirection:'colum'}}>
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
    <label htmlFor="numero">Numero</label>
    <input
    id="numero"
    type="text"
     value={numero}
     onChange={(event) => setNumero(event.target.value)}
    /> 
    <label htmlFor="cep">Cep</label>
    <input
    id="cep"
    type="text"
     value={cep}
     onChange={(event) => setCep(event.target.value)}   
      />
    <label htmlFor="rua">Rua</label>
    <input
    id="rua"
    type="text"
     value={rua}
     onChange={(event) => setRua(event.target.value)}    
      />
    <label htmlFor="bairro">Bairro</label>
    <input
    id="bairro"
    type="text"
     value={bairro}
     onChange={(event) => setbairro(event.target.value)}
     />
    <label htmlFor="cidade">Cidade</label>
    <input
    id="cidade"
    type="text"
     value={cidade}
     onChange={(event) => setCidade(event.target.value)} 
    />
    <label htmlFor="estado">Estado</label>
    <input
    id="estado"
    type="text"
     value={estado}
     onChange={(event) => setEstado(event.target.value)}
        />
        <button>Enviar</button>
        {response && <p>Usuario Cadastro!</p>}
        </form>

  
    )
  }

export default Atvidd02;