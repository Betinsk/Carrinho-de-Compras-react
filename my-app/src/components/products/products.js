
import fetchProducts from '../../api/fetchProducts'
import Loading from '../loading/loading'
import ProductCard from '../productCard/productCard'
import './products.css'
import { useEffect, useContext } from 'react'
import appContext from '../../context/appContext'

function Products () {

    const {products, setProducts, loading, setLoading } = useContext(appContext)


    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
            setLoading(false)
        })
    }, [])

    return (

        (loading &&  <Loading/> )  || (
            <section className='products container'>
            {
                products.map((product) => <ProductCard key={product.id} data={{product}} />)
            }
       </section> 
        )
       
    )
}

export default Products