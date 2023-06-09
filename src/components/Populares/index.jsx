import styles from './Populares.module.scss';
import fotos from "./fotos-populares.json";

const Populares = () => {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotos.map(foto => <li key={foto.id}><img src={foto.path} alt={foto.alt} /></li>)}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}

export default Populares