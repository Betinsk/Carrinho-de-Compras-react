import './searchBar.css'
import { BsSearch } from 'react-icons/bs'
import { useContext, useState } from 'react'
import fetchProducts from '../../../api/fetchProducts'
import appContext from '../../../context/appContext'

function SearchBar() {

    const {setProducts, setLoading} = useContext(appContext)
    const [searchValue, setSearchValue] = useState('')


        const handleSearch = async (event) => {
            event.preventDefault()
            setLoading(true)
            const products = await fetchProducts(searchValue)
            setProducts(products)
            setLoading(false)
            setSearchValue('')
        }

    return (
        <form className='searchBar' onSubmit={handleSearch}>
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