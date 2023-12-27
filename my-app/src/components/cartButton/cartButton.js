import { AiOutlineShoppingCart } from 'react-icons/ai'
import './cartButton.css'

function CartButton () {
    return (
        <button type='button' className = 'cartButton' >
            <AiOutlineShoppingCart />
            <span className='cartStatus'>1</span>
        </button>
    )
}

export default CartButton