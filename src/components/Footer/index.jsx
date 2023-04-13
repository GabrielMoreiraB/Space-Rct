import styles from  "./Footer.module.scss"
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Foorter = () => {
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
            <p>Desnvolvido por Gabriel Moreira</p>
        </footer>
    )
}

export default Foorter