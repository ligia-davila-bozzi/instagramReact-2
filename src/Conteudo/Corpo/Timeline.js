import Stories from "./Timeline/Stories";
import Posts from "./Timeline/Posts";

export default function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts usuario="meowed" foto="gato-telefone" usuarioCurtidas="respondeai" numCurtidas="101.523" />
            <Posts usuario="barked" foto="dog" usuarioCurtidas="adorable_animals" numCurtidas="99.159" />
        </div>
    )
}