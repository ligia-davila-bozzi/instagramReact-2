export default function Posts(props) {
    return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={"assets/img/" + props.usuario + ".svg"} />
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={"assets/img/" + props.foto + ".svg"} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={"assets/img/" + props.usuarioCurtidas + ".svg"} />
                        <div class="texto">
                            Curtido por <strong>{props.usuarioCurtidas}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}