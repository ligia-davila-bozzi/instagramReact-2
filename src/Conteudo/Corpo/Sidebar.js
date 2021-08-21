import Usuario from './Sidebar/Usuario.js'
import Sugestoes from './Sidebar/Sugestoes.js'
import Links from './Sidebar/Links.js'
import Copyright from './Sidebar/Copyright.js'

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario usuario='catanacomics' username="Catana" />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    )
}