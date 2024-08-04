import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { add } from '../../reduxStore/CartSlice';
import { addWishlist } from '../../reduxStore/WishlistSlice';


function Product({Url}) {
  const [product, getProduct] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(Url)
      getProduct(res.data);
      console.log(res.data);
    }
    
    getData();
  }, [])

  const handleAdd = (product) => {
    dispatch(add(product))
  }
   const handleAddWishlist=(item)=>{
     dispatch(addWishlist(item))
   }
  return (
    
    <div className='d-flex flex-wrap mt-5'>
      {product.map((item) => (
        <div className="col-lg-3">
          <div className="card text-center mx-2 my-2 bg-wishlist border border-3 border-secondary   rounded-5" key={item.id} >
            <div className='text-center'>
              <img src={item.image} alt={item.category} className='card-img-top'/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Title:{item.title}</h5>
              <p className="card-text">Rating:{item.rating.rate}</p>
              <p className="card-text">Price:${item.price}</p>
              <div className='card-footer border border-0'>
                <button className='btn btn-success me-3' onClick={() => { handleAdd(item) }}>Add to cart</button>
                <button className='btn btn-warning bg-gradient' onClick={()=>{handleAddWishlist(item)}}>Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
      </div>
    </div>

  )
}

export default Product;
