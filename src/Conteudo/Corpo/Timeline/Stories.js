export default function Stories() {
    const usuario = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']

    return (
        <div class="stories">

            {usuario.map((usuario) =>
                <div class="story">
                    <div class="imagem">
                        <img src={"assets/img/" + usuario + ".svg"} />
                    </div>
                    <div class="usuario">
                        {usuario}
                    </div>
                </div>)
            }

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}