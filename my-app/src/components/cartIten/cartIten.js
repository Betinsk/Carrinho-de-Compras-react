import './cartIten.css'
import { BsCartDashFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import propTypes from 'prop-types'
import { useContext } from 'react'
import appContext from '../../context/appContext'


function CartItem({data}) {

    const {cartItens, setCartItens} = useContext(appContext)
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
      const updatedItems = cartItens.filter((item) => item.id != id);
      setCartItens(updatedItems);
    };
    
    return (
        <section className='cartItem'>

            
            <img src={data.product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt='img do produto'
                className='cartImg' />

            <div className='.cartContent'>
                <h3 className='cartTitle'>{data.product.title}</h3>
                <h3 className='cartPrice'>{formatCurrency(data.product.price, 'BRL')}</h3>

                <button type='button'
                    className='buttonRemoveItem'
                    onClick={ handleRemoveItem }
                >
                    <BsCartDashFill />
                </button>

            </div>

        </section>
    )
}

export default CartItem

CartItem.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
