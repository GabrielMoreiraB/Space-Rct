import react from 'react';
import Tags from '../Tags';
import style from './Galeria.module.scss';
import fotos from "./fotos.json";
import Cards from './Cards';

const Galeria = () => {
    return (
        <section className={style.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags/>
            <Cards
            fotos={fotos} 
            styles={style}/>
        </section>
    )
}

export default Galeria