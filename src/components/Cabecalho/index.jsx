import logo from './logo.png';
import search from './search.png'

const Cabecalho = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <div>
                <input type="text"
                placeholder="P que você procura?" />
                <img src={search} alt="" />
            </div>
        </header>
    )
}

export default Cabecalho