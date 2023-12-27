import './productCard.css'

function ProductCard(products) {
        console.log(products)

    return (

        <section className='productCard'>
            {
                products.map((product) => {
                    return (
                        <>
                            <p key={product.id}></p>
                            <img className='cardImag' src={product.thumbnail}  alt="A descriptive text about"></img>

                            <div className='cardInfos'>
                                <h2 className='cardPrice'>Rs 300</h2>
                                <h2 className='cardTitle'>{product.title}</h2>
                            </div>

                            <button type='button' className='buttonAddCart'>+</button>

                        </>
                    )
                })
            }
        </section>

    )
}

export default ProductCard