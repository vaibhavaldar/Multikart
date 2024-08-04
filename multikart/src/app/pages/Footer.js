import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Correct import
import '../../assets/css/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubscribe = () => {
        const isEmailValid = /^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(email);

        if (isEmailValid) {
            setEmail('');
            console.log(email);
            alert('Subscribed!');
            setSubscribed(true);
        }
    };

    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4>KNOW IT ALL FIRST!</h4>
                            <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            {/* Subscribe with subscribed button option 2 */}
                            <form className="form-css" onSubmit={handleSubmit}>
                                {!subscribed ? (
                                    <div className="d-flex">
                                        <div className="col-lg-8 col-sm-12">
                                            <input
                                                className="input-email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <button
                                                className="subcribe-btn"
                                                onClick={handleSubscribe}
                                                type="submit"
                                            >
                                                SUBSCRIBE
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="col-lg-4 display-center col-sm-12">
                                        <button className="subcribe-btn">Subscribed</button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4">
                        <div className="footer-title footer-mobile-title">
                            <h4>
                                <span className="according-menu"></span>
                            </h4>
                        </div>
                        <div className="">
                            <div className="footer-contant">
                                <div className="footer-logo">
                                    <Link to="/">
                                        {/* Use Link here */}
                                        <img
                                            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>
                                <p style={{ padding: '5px', margin: '10px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                                <div className="icons">
                                    <Link to="https://www.facebook.com" target="_self">
                                        <i className="fa-brands fa-facebook social-icons"></i>
                                    </Link>

                                    <Link href="https://plus.google.com" target="_self">
                                        <i className="fa-brands fa-google-plus-g social-icons"></i>
                                    </Link>
                                    <Link href="https://twitter.com" target="_self">
                                        <i className="fa-brands fa-twitter social-icons"></i>
                                    </Link>
                                    <Link href="https://www.instagram.com" target="_self">
                                        <i className="fa-brands fa-instagram social-icons"></i>
                                    </Link>
                                    <Link href="https://rss.com" >
                                        <i className="fa-solid fa-rss social-icons"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="footer-widget">
                            <h4>MY ACCOUNT</h4>
                            <ul className="ul1 li1 a1">
                                <li className="li1">
                                    <Link className ="li2" to="/">Womens</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Clothing</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Accessories</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Featured</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-widget">
                            <h4>WHY WE CHOOSE</h4>
                            <ul className="ul1">
                                <li className="li1">
                                    <Link className ="li2" to="/">Shipping & Return</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Secure Shopping</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Gallary</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Affiliates</Link>
                                </li>
                                <li className="li1">
                                    <Link className ="li2" to="/">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-widget">
                            <h4>STORE INFORMATION</h4>
                            <table className="table-change">
                                <tbody>
                                    <tr>
                                        <td>
                                            <i className="fa-solid fa-location-dot contact-icon"></i>
                                        </td>
                                        <td>Multikart Demo Store,</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Demo Store India 345-659</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa-solid fa-phone contact-icon"></i>
                                        </td>
                                        <td>Call Us: 123-456-7898</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa-regular fa-envelope contact-icon"></i>
                                        </td>
                                        <td>Email Us: Support@Fiot.Com</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa-solid fa-fax contact-icon"></i>
                                        </td>
                                        <td>Fax: 123456</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container row">
                <div className="col-lg-6">
                    <p>©2023-24 themeforest powered by pixelstrap</p>
                </div>
                <div className="col-lg-6">
                    <ul className="ul2 footer-payment-icons">
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-amex text-danger i1"></i>
                            </Link>
                        </li>
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-mastercard text-danger"></i>
                            </Link>
                        </li>
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-diners-club text-danger"></i>
                            </Link>
                        </li>
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-discover text-danger"></i>
                            </Link>
                        </li>
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-paypal text-danger"></i>
                            </Link>
                        </li>
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-stripe text-danger"></i>
                            </Link>
                        </li>
                        <li className="i1">
                            <Link to="/" target="_self">
                                <i className="fab fa-cc-visa text-danger"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
