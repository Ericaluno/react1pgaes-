
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <nav>    
            <Link to='https://en.dragon-ball-official.com/'>Dragon Ball Super</Link>
            <span>|</span>
            <Link to='sobre'>Sobre</Link>
            <span></span>
            <Link to='contato'>Contato</Link>
        </nav>
    )
}

export default Header;