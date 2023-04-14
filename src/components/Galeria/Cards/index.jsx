import favorito from './favorito.png';
import open from './open.png';

const Cards = ({fotos, styles}) => {
    return (
        <ul className={styles.galeria__cards}>
            {fotos.map(item => {
                return (
                    <li key={item.id} className={styles.galeria__card}>
                        <img
                            src={item.imagem}
                            alt={item.titulo}
                            className={styles.galeria__imagem} />
                        <p className={styles.galeria__descricao}>{item.titulo}</p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={favorito} alt="" />
                                <img src={open} alt="" />
                            </span>
                        </div>
                    </li>

                )
            })}
        </ul>
    )
}

export default Cards