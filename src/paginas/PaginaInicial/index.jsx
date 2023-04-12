

import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import banner from '../../assets/banner.png';

import styles from './PaginaInicial.module.scss';

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço!</h1>
                        <img src={banner} alt="img terra vista do espaço" />
                    </div>
                </section>
            </main>

        </>
    );
};

export default PaginaInicial;
