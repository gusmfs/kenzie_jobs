import {MdSearch} from "react-icons/md";

export const SearchPage = () =>{
    return(
        <main>
            <h1>Busca de vagas</h1>
            <p>Digite o que você está procurando:</p>
            <form>
                <input type="text" placeholder="Pesquisa"/>
                <button className="" type="submit">
                    <MdSearch size={25}/>
                </button>
            </form>
        </main>
    )
}


