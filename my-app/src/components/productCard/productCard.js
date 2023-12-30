import './productCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types'
import formatCurrency from '../../utils/formatCurrency'
import { useContext } from 'react'
import appContext from '../../context/appContext'

function ProductCard({ data }) {

    const {cartItens, setCartItens} = useContext(appContext)

    const handAddCart = () => {
        setCartItens([...cartItens, data])
    }

    return (

        <section className="productCard">
            {/* Regex substituindo caracteres de uma string*/}
            <img className="cardImag" src={data.product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt=""></img>

            <div className="cardInfos">
                <h2 className='cardPrice'>{formatCurrency(data.product.price, 'BRL')}</h2>
                <h2 className='cardTitle'>{data.product.title}</h2>
            </div>

            <button type='button' className='buttonAddCart'
                onClick={handAddCart}
            >+</button>
            <BsFillCartPlusFill />

        </section>

    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
