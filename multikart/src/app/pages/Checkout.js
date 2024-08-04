import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


function Checkout() {

     


    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            town: '',
            address: '',
            state: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            fname: Yup.string().required('First name is required'),
            lname: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email').required('please enter proper email address'),
            town: Yup.string().required('Select one city'),
            address: Yup.string().required('please right your address'),
            state: Yup.string().required('Select one state'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),

        onSubmit: (values, action) => {
            console.log(values)
        }
    });

       console.log(formik);

      const handlePlaceOrder=()=>{
          alert('Order successfull....')
      }

    return (
        <div>
            <div className="containerfluid bg-wishlist mt-5">
                <div className="row">
                    <div className="col-lg-6 offset-1">
                        <h2 className='wishlist-headinhH2'>CHECKOUT</h2>
                    </div>
                    <div className="col-lg-2  offset-2">
                        <ul className='d-flex list-unstyled'>
                            <li className='ms-2'><Link className='text-decoration-none listHeadingWish' to="/">HOME</Link><span className='fs-5 ps-2 listHeading '>/</span></li>
                            <li className='ms-2'><Link className='text-decoration-none listHeadingWish' >CHECKOUT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className='billingHeading mt-4'>Billing Details</h3>
                <div className="row mt-5">
                    <div className="col-lg-6 ">
                        <form action="" onSubmit={formik.handleSubmit} className='form-control border border-0'>
                            <div className="row pe-3">
                                <div className="col-lg-5">
                                    <label htmlFor="fname" className='form-label checkout_labelform labelCheckout'>First Name</label>
                                    <input type="text"
                                        name="fname"
                                        className="form-input p-2 w-100"
                                        value={formik.values.fname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                    {formik.errors.fname && formik.touched.fname ? (
                                        <div className='errorsCheckForm'>{formik.errors.fname}</div>) : null}

                                    <label htmlFor="phone" className='form-label checkout_labelform'>Phone</label>
                                    <input type="text"
                                        className="form-input p-2 w-100"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="col-lg-5">
                                    <label htmlFor="lname" className='form-label checkout_labelform'>Last Name</label>
                                    <input type="text"
                                        className="form-input p-2 w-100"
                                        name="lname"
                                        value={formik.values.lname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                    {formik.errors.lname && formik.touched.lname ? (
                                        <div className='errorsCheckForm'>{formik.errors.lname}</div>) : null}


                                    <label htmlFor="email" className='form-label checkout_labelform'>Email Address</label>
                                    <input type="email"
                                        className="form-input p-2 w-100"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                    {formik.errors.email && formik.touched.email ? (
                                        <div className='errorsCheckForm'>{formik.errors.email}</div>) : null}


                                </div>
                                <label htmlFor="country" className='form-label mt-3 checkout_labelform'>Country</label>
                                <select name="country" id="country" className='p-2 ms-3'>
                                    <option value="ind">India</option>
                                    <option value="south africa">South Africa</option>
                                    <option value="united state">United State</option>
                                    <option value="Aus">Australia</option>
                                </select>
                                <label htmlFor="address" className='form-label mt-2 checkout_labelform'>Address</label>
                                <input type="text"
                                    name="address"
                                    className="form-input p-2 ms-3"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Street Address' />
                                {formik.errors.address && formik.touched.address ? (
                                    <div className='errorsCheckForm'>{formik.errors.address}</div>) : null}


                                <label htmlFor="town" className='form-label mt-2 checkout_labelform'>Town/City</label>
                                <input type="text"
                                    name="town"
                                    className="form-input p-2 ms-3"
                                    value={formik.values.town}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.town && formik.touched.town ? (
                                    <div className='errorsCheckForm'>{formik.errors.town}</div>) : null}


                                <label htmlFor="state" className='form-label mt-2 checkout_labelform'>State/Country</label>
                                <input type="text"
                                    name="state"
                                    className="form-input p-2 ms-3"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.state && formik.touched.state ? (
                                    <div className='errorsCheckForm'>{formik.errors.state}</div>) : null}


                                <label htmlFor="postalcode" className='form-label mt-2 checkout_labelform'>Postal Code</label>
                                <input type="text" name="postalcode" className="form-input p-2 ms-3" />
                            </div>

                            <div className='form-check'>
                                <input type="checkbox" /><span className='ps-2'>Create An Account?</span>
                            </div>
                            <button className='btn-wishlist text-decoration-none offset-8' onClick={handlePlaceOrder}>PLACE ORDER</button>
                        </form>

                    </div>
                    <div className="col-lg-6 productTableCheck ">
                        <div className="row mt-5">
                            <div className="col-lg-6 ps-4">
                                <h4>Product</h4>
                                <hr />
                                <ul className='mt-3 list-unstyled '>
                                    <li className='mt-3'>electonics 2 * 1</li>
                                    <li className='mt-3'>fitted dress * 1</li>
                                    <li className='mt-3'>watch 2 * 1</li>
                                </ul>
                                <hr />
                                <ul className='mt-4 mb-5 list-unstyled '>
                                    <li><h6>Subtotal</h6></li>
                                    <li><h6>Shipping</h6></li>
                                </ul>
                                <hr />
                                <ul className='list-unstyled'>
                                    <li ><h6>Total</h6></li>
                                    <br />
                                    <div>
                                        <input type="radio" name="paymnt" className='paymentCheckForm me-2' />COD<br />
                                        <input type="radio" name="paymnt" className='paymentCheckForm me-2' />PayPal
                                    </div>
                                    <div>
                                        <img src={require('../../assets/images/paypal.png')} />
                                    </div>
                                </ul>
                            </div>
                            <div className="col-lg-6 text-center">
                                <h4>Total</h4>
                                <hr />
                                <ul className='mt-3 list-unstyled '>
                                    <li className='mt-3'>$216.6</li>
                                    <li className='mt-3'>$104.4</li>
                                    <li className='mt-3'>$207</li>
                                </ul>
                                <hr />

                                <ul className='mt-4 list-unstyled'>
                                    <li className='text-danger '>$528</li>
                                    <li><input type='checkbox' className='ms-5 mb-3 ms-2' />Free Shipping</li>
                                    <li><input type='checkbox' className='ms-5' />Local Pickup</li>
                                </ul>
                                <hr />
                                <ul className='mt-2 list-unstyled'>
                                    <li className='mt-2 text-danger'>$600</li>
                                </ul>
                            </div>
                            {/* <span className='text-end pe-4 '>s<button to="/" type="button" className='btn-wishlist text-decoration-none' onSubmit={formik.handleSubmit}>PLACE ORDER</button></span> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout;

