import CartItem from '../cartIten/cartIten'
import './cart.css'
import { useContext } from 'react'
import appContext from '../../context/appContext'
import formatCurrency from '../../utils/formatCurrency'

function Cart() {

    const { cartItens, isCartVisible} = useContext(appContext)

  

    //Jeito do vídeo
    const totalPrice = cartItens.reduce((acumulator, iten) => {
        return iten.product.price + acumulator
    }, 0)

    //Jeito que eu fiz
    var to = 0

    const total = (
            cartItens.map((cartIten) => {
                to += cartIten.product.price
            })
        )

    return (
        //Condição ternaria para saber se o carrinho está visivivel ou nao
        <section className={`cart ${isCartVisible ? 'cartActive': ''}`}>
            <div className="cartItens">
            {
              cartItens.map((cartIten) => <CartItem key={cartIten.product.id} data={cartIten} />)
            }
            </div>

            <div className="cartResume">Resumo do carrinho</div>
                <p>{formatCurrency(totalPrice, 'BRL')}</p>
        </section>
    )
}

export default Cart