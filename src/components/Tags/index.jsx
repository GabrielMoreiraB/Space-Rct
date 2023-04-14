import style from './Tags.module.scss'

const Tags = () => {
    return (
        <div className={style.tags}>
            <p>Filtre as Tags:</p>
            <ul className={style.tags__lista}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}

export default Tags