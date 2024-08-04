import React from "react";
// import { Link } from "react-router-dom";
import "../../assets/css/cart.css";
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../reduxStore/CartSlice'

function Cart() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.cart)

  const removeItem = (product) => {
    dispatch(remove(product))
  }
  return (
    <div>
      <div className="containerfluid bg-cart">
        <div className="row ">
          <div className="col-lg-6 offset-1">
            <h2 className="cart_header_heading">CART</h2>
          </div>
          <div className="col-lg-2  offset-2">
            <ul className="d-flex list-unstyled">
              <li className="ms-2">
                <a className="text-decoration-none list_heading" to="/">
                  HOME
                </a>
                <span className="fs-5 ps-2 list_heading ">/</span>
              </li>
              <li className="ms-2">
                <a className="text-decoration-none list_heading">CART</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            {/* <p>Your Cart is Empty</p> */}
            {/* <p>Explore More Sortlist Some Items</p> */}
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.image} alt={item.category} width="60" /></td>
                    <td>{item.title}</td>
                    <td>{item.rating.rate}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)} className='btn btn-danger'>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;





