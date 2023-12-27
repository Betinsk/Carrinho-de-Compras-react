import './searchBar.css'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

function SearchBar() {

    const [searchValue, setSearchValue] = useState('')

    return (
        <form className='searchBar'>
            <input type='searchInput' placeholder='buscar produtos'
            value={searchValue}
            className='searchInput'
            onChange={({target}) => setSearchValue(target.value)}
            required
            />
               
            <button type='submit' className='searchButton'>
            <BsSearch/>
            </button>
    </form>
    )
}

export default SearchBar