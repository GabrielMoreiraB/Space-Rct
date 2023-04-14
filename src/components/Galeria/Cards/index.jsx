import favorito from './favorito.png';
import open from './open.png';

const Cards = ({fotos, style}) => {
    return (
        <ul className={style.galeria__cards}>
            {fotos.map(item => {
                return (
                    <li key={item.id} className={style.galeria__card}>
                        <img
                            src={item.imagem}
                            alt={item.titulo}
                            className={style.galeria__imagem} />
                        <p className={style.galeria__descricao}>{item.titulo}</p>
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