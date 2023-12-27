
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../productCard/productCard'
import './products.css'
import { useState, useEffect } from 'react'

function Products () {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('piano').then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <section className='products container'>
            <ProductCard value={products}/>
        </section>
    )
}

export default Products