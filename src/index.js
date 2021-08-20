import reactDom from 'react-dom';
import Navbar from './Conteudo/Navbar.js'
import Corpo from './Conteudo/Corpo.js'
import BaseMobile from './Conteudo/BaseMobile.js';

function App (){
    return(
    <div>
        <Navbar />
        <Corpo />
        <BaseMobile />
    </div>
    ) 
}

reactDom.render(<App />, document.querySelector('.root'));