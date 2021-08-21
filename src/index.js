import reactDom from 'react-dom';
import Topo from './Conteudo/Topo.js'
import Corpo from './Conteudo/Corpo.js'
import BaseMobile from './Conteudo/BaseMobile.js';

function App() {
    return (
        <div>
            <Topo />
            <Corpo />
            <BaseMobile />
        </div>
    )
}

reactDom.render(<App />, document.querySelector('.root'));