import react, { useState } from 'react';
import Tags from '../Tags';
import style from './Galeria.module.scss';
import fotos from "./fotos.json";
import Cards from './Cards';

const Galeria = () => {
    const [itens, setItens] = useState(fotos);

    const tags = [...new Set(fotos.map(foto => foto.tag))];

    const filtraFotos=(tag) => {
        const novasFotos = fotos.filter(foto => foto.tag === tag);

        setItens(novasFotos);
    }


    return (
        <section className={style.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags 
            tags={tags}
            filtraFotos={filtraFotos}
            setItens={setItens}/>
            <Cards
            fotos={itens} 
            styles={style}/>
        </section>
    )
}

export default Galeria