import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../assets/css/wishlist.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist } from '../reduxStore/WishlistSlice';

const Wishlist = () => {
    const dispatch=useDispatch();
    const wishlistItem=useSelector(state=>state.wishlist)

const removeWishlistItem=(id)=>{
    dispatch(removeWishlist(id))
}

    return (
        <div>
        
            <div className="container-fluid bg-wishlist">
                <div className="row ">
                    <div className="col-lg-6 offset-1">
                        <h2 className='wishlist-headinhH2'>WISHLIST</h2>
                    </div>
                    <div className="col-lg-2 offset-2 ">
                        <ul className='d-flex list-unstyled '>
                            <li className='ms-2'><NavLink className='text-decoration-none listHeadingWish' to="/">HOME</NavLink><span className='fs-5 ps-2 listHeadingWish '>/</span></li>
                            <li className='ms-2'><NavLink className='text-decoration-none listHeadingWish' >WISHLIST</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className='table text-center mt-5'>
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>AVALIBILTY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                      {wishlistItem.map((item)=>(
                        <tr key={item.id}>
                             <td><img src={item.image} alt={item.category} width="80px"/></td>
                             <td>{item.title}</td>
                             <td>{item.price}</td>
                             <td>yes</td>
                             <td>
                                 <button className="btn btn-secondary" onClick={()=>removeWishlistItem(item.id)}>X</button>
                             </td>
                        </tr>
                      ))}
                </table>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-7  offset-1 d-flex flex-row-reverse">
                        <NavLink to="/Checkout" className='ms-3  btn-wishlist text-decoration-none'>CHECK OUT</NavLink>
                        <NavLink to="/" className='btn-wishlist text-decoration-none'>CONTINUE SHOPPING</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
