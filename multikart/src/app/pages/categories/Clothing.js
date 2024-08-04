import Product from "./Product"

function clothing(){
    var clothingUrl="http://localhost:4000/userData"
    return(
        <div>
            <Product Url={clothingUrl} />
        </div>
    )
}
export default clothing;