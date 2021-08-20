import Ususario from './Sidebar/Ususario.js'
import Sugestoes from './Sidebar/Sugestoes.js'
import Links from './Sidebar/Links.js'
import Copyright from './Sidebar/Copyright.js'

export default function Sidebar(){
    return(
        <div class="sidebar">
            <Ususario />  
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    )
}