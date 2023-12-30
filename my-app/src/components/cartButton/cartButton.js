import { AiOutlineShoppingCart } from 'react-icons/ai'
import './cartButton.css'
import { useContext } from 'react'
import appContext from '../../context/appContext'

function CartButton () {

    const {cartItens, isCartVisible, setCartVisible} = useContext(appContext)


    return (
        <button type='button' className = 'cartButton'
            onClick={() => setCartVisible(!isCartVisible)} >
            
            <AiOutlineShoppingCart />

            { cartItens.length > 0  && 
            <span className='cartStatus'>{cartItens.length}</span>
        }
       
        </button>
    )
}

export default CartButton