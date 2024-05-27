

//  import { Routes,  } from "react-router-dom"
//  import Contato from "./Contato"
//  import Home from "./Home"
// import Sobre from "./Sobre"
//  import Header from "./Header"
//  import Rodape from "./Rodape"

import Logo from './img/Goku.webp'
import Meu from './img/Vegeta.avif'
import M from './img/friza.jpg'
import G from './img/Gohan-DRAGON-BALL-SUPER.webp'

import './index.css'

const App = () =>{
    return(
      
      <>
     
      
      <div className="caixa">
      <h1>Son-Goku</h1>
      <img src={Logo} alt="Personagem" title="Goku" className="personagens"/>
      <p>Protagonista do anime Dragon Ball </p>
      <p>Cidade:Japão</p>
      <p>Idade:38</p>
      <p>Son Goku (Son Gokū?, mais conhecido apenas como Goku), cujo nome de nascimento é Kakarotto ( Kakarotto?), é o protagonista da franquia Dragon Ball, criada por Akira Toriyama. Sua primeira aparição ocorreu no primeiro capítulo do mangá Dragon Ball, intitulado Bulma e Son Goku (japonês:  Hepburn: Buruma to Son Gokū?), publicado na revista Weekly Shōnen Jump em 3 de dezembro de 1984.[3] Goku é inspirado num personagem com o mesmo nome, (lê-se Sun Wukong em mandarim e Son Goku em japonês), personagem principal do romance chinês Jornada ao Oeste.[4] Porém, Toriyama mudou algumas de suas características para ser mais original. Goku é apresentado como um menino estranho, com rabo de macaco e força sobre-humana. Conforme a história se desenrola, é revelado que ele descende de uma raça fictícia chamada Saiyajins, uma das raças mais poderosas do universo.

     

Como protagonista central da franquia, Son Goku aparece em todos os mangás, animes, filmes, OVAs e jogos eletrônicos da série. Além de ser alvo de paródias (como em Neko Majin Z, one-shots criados pelo próprio Toriyama), Goku já fez várias aparições em eventos televisivos e em outras séries de mangás, como Dr. Slump (também criada por Toriyama). Devido à popularidade internacional da franquia, Goku tornou-se um dos personagem de anime e mangá mais conhecidos pelo mundo.</p>
  
      </div>
      <div className="porta">
          <h1>Vegeta</h1>
          <img src={Meu} alt="Miu" title="Vegeta"  className="personagens"/>
          <p>Um dos protagonistas do anime Dragon Ball </p>
          <p>Cidade:Japão</p>
          <p>Idade:48</p>
          <p>Vegeta é um personagem fictício da franquia Dragon Ball criado por Akira Toriyama. As primeiras aparições de Vegeta na franquia foram no mangá Sayōnara Son Gokū (Adeus Son Goku?), publicado originalmente em 1988, e no quinto episódio do anime Dragon Ball Z, como o príncipe da raça praticamente extinta de guerreiros alienígenas, chamados Saiyajins. Vegeta foi um dos primeiros antagonistas da série, visando utilizar o poder das esferas para obter imortalidade e domínio sobre toda a galáxia. Após o surgimento de inimigos em comum, Vegeta escolhe a formar uma aliança com os protagonistas da série. Com o tempo, ele se torna um aliado fiel ao personagem principal da série, Son Goku. Vegeta é conhecido por seu poder inacreditavelmente forte, por seu comportamento arrogante e orgulhoso, e principalmente por sua rivalidade com Son Goku.</p>
        </div>
        <div className="ff">
          <h1>Friza</h1>
          <img src={M} alt="Mi" title="Friza"  className="personagens"/>
          <p>Um dos protagonistas do anime Dragon Ball </p>
          <p>Cidade:Japão</p>
          <p>Idade:730</p>
          <p>Freeza (Furīza?) é um personagem fictício da série de mangá Dragon Ball, criado por Akira Toriyama. Ele fez sua estréia no Capítulo # 247: Namekusei, Frio e Nublado (An'un Uzumaku Namekkusei), publicado pela primeira vez na revista Weekly Shōnen Jump em 6 de novembro de 1989, como um temido tirano alienígena conhecido como "o ser mais poderoso do universo".
Apesar de não aparecer até à segunda metade do mangá, Freeza é amplamente considerado o antagonista mais icônico da série devido a servir efetivamente como o catalisador de muitos dos eventos descritos na história, como a chegada de Goku na Terra, os Saiyajins terem aterrissado na Terra e, posteriormente, os personagens principais irem para o planeta Namekusei. Ele também é diretamente responsável pelo assassinato de Bardock, pelo genocídio da raça Saiyajin e pela segunda morte de Kuririn, o que o torna o inimigo mais pessoal e significativo de Goku.</p>
        </div>
        <div className="GH">
          <h1>Gohan</h1>
          <img src={G} alt="Gh" title="Gohan"  className="personagens"/>
          <p>Um dos protagonistas do anime Dragon Ball </p>
          <p>Cidade:Japão</p>
          <p>Idade:23</p>
          <p>Son Gohan (Son Gohan?), também conhecido apenas como Gohan, é um personagem fictício da franquia Dragon Ball criado por Akira Toriyama. Ele aparece na segunda parte do mangá, que corresponde ao anime Dragon Ball Z. Gohan é filho do protagonista Goku com sua esposa Chi-Chi e o primeiro híbrido entre humano e Saiyajin mostrado na série, seu nome é uma homenagem ao avô adotivo de seu pai, Son Gohan que foi aluno de Mestre Kame, assim como Goku. Um tema recorrente na série é o grande poder oculto de Gohan, que aos poucos é liberado.</p>
          
        </div>
        </>       
    )
}

export default App;

{/* <BrowserRouter>
<Header/>
<Routes>      
<Route path="/" element={<Home/>}/>  
<Route path="/sobre" element={<Sobre/>}/>  
<Route path="/contato" element={<Contato/>}/>              
</Routes>
<Rodape/>
</BrowserRouter>  */}


 