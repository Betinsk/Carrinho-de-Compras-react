import './productCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types'

function ProductCard({ data }) {

        console.log(data)

    return (

        <section className="productCard">

            <img className="cardImag" src={data.product.thumbnail} alt=""></img>

            <div className="cardInfos">
                <h2 className='cardPrice'>{data.product.price}</h2>
                <h2 className='cardTitle'>{data.product.title}</h2>
            </div>

            <button type='button' className='buttonAddCart'>+</button>
            <BsFillCartPlusFill />

        </section>

    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
