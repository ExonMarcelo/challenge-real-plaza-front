interface PropsCardProduct{
    srcImage: string,
    brand: string
    description: string
    price: number
    priceFinal: number
    discount: number
}

const CardProduct =  ({ srcImage, brand, description, price, priceFinal, discount}:PropsCardProduct) => {
    return(
        <div className="col-sm-2 col-lg-3 col-xl-3 card-product">
            <img src={srcImage} alt="product"/>
            <div className="card-product__content">
                <span className="brand">{brand}</span>
                <h4>{description}</h4>
                <div className="card-product__content__amounts">
                    <div className="price">
                        <span className="price--prev">{`S/ ${price}`}<span>.00</span></span>
                        <span className="price--final">{`S/ ${priceFinal}`}<span>.00</span></span>
                    </div>
                    <div className="discount">
                        <div className="tag">{`-${discount}%`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;