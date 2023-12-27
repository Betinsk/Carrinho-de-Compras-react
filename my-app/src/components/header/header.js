import CartButton from '../cartButton/cartButton'
import './header.css'
import SearchBar from './searchBar/searchBar'

function Header() {

    return (
        <header className='header'>
            <div className='container'> 
               <SearchBar />
               <CartButton />
            </div>
        </header>
    )

}

export default Header