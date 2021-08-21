export default function Sugestoes() {
    const usuarios = ['bad.vibes.memes', 'chibirdart', 'razoesparaacreditar', 'adorable_animals', 'smallcutecats']

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {usuarios.map((usuarios) =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={"assets/img/" + usuarios + ".svg"} />
                        <div class="texto">
                            <div class="nome">{usuarios}</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>)
            }
        </div>
    )
}