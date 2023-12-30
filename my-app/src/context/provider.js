import { useState } from "react"
import appContext from "./appContext"
import propTypes from 'prop-types';

function Provider({children}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [cartItens, setCartItens] = useState([])
    const [isCartVisible, setCartVisible] = useState(false)

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItens,
        setCartItens, 
        isCartVisible,
        setCartVisible
    }

    return (
        <appContext.Provider value={value}>
           {children}
        </appContext.Provider >
    )
}

export default Provider

Provider.propTypes = {
    children: propTypes.any,
}.isRequired