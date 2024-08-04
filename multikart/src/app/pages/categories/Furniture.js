import Product from "./Product"

function furniture(){
    var furnitureUrl="http://localhost:4000/furniture"
    return(
        <div>
            <Product Url={furnitureUrl} />
        </div>
    )
}
export default furniture;