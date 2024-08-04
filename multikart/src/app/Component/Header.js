import React from 'react';
import "../../assets/css/Header.css"
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'



function Header() {
  const cartItem = useSelector(state => state.cart)
  const wishListItem = useSelector(state => state.wishlist)


  return (
    <>
      <div id='navbardk' className='container-fluiddk'>

        <div id='navbar1dk'>
          Welcome to Our store Multikart
        </div>
        <div className='container2dk' id='navbardk'>call Us -123-456-7890</div>

        <div className='link1dk'><i className="fa-sharp fa-solid fa-heart fs-5 me-2" style={{color: "#f10404"}}></i><Link to={"/Wishlist"} className="text-decoration-none fw-bolder" >Wishlist {wishListItem.length}</Link></div>

        <div className="dropdown">
          <div className="dropbtn"><img src='https://w7.pngwing.com/pngs/129/350/png-transparent-contact-friend-icon-pawn-person-symbol-thumbnail.png' width='13' height='13' />My Account</div>
          <div className="dropdown-content">
            <Link to={"/Login"} >Login</Link>
            <Link to={"/Wishlist"} >Wishlist</Link>
            <Link to={"/Cart"} >Cart</Link>
            <Link to={"/clothing"} className='text-dark offset-9 text-decoration-none'>CartItem:{cartItem.length}</Link>
            <Link to={"/Register"} >Register</Link>
            <Link to={"/"} >Logout</Link>
            {/* <Link to="/"><h6>Login</h6></Link>
            <Link to="/"><h6>Register</h6></Link>
            <Link to="/"><h6>Log Out</h6></Link> */}
          </div>
        </div>

      </div>


      <div className='container3dk container'>
        <div className='row'>

          <nav className='homepagenav'>
            <div className='homepagedisplayflex btn-group' col-1 >

              {/* Offcanvas Sidebar  */}
              <div className="offcanvas offcanvas-start" id="demo"  >
                <div className="offcanvas-header">
                  <h1 className="offcanvas-title" data-bs-dismiss="offcanvas"> Back</h1>
                  <hr></hr>
                </div>
                <div className="offcanvas-body">
                  <h5><Link to="/clothing" className='text-decoration-none text-dark' >CLOTHING</Link></h5><br></br>
                  <h5><Link to="/furniture" className='text-decoration-none text-dark'>FURNITURE</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>FOOTWEAR</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>WATCHES</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>ACCESSORIES</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>HOUSE OF DESIGN</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>BEAUTY AND PERSONAL CARE</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>HOME AND DECOR</Link></h5><br></br>
                  <h5><Link to="/" className='text-decoration-none text-dark'>KITCHEN</Link></h5>


                </div>
              </div>


              <div id="myNav" class="overlay">

              </div>

              {/* Button to open the offcanvas sidebar  */}
              <Link className="btn btn-default" to="/" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <i className="fa fa-align-justify" title="Align Justify" ></i>
              </Link>
            </div>
            <div className='homepagedisplayflexdk' col-2>
              <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png' />

            </div>

            <div className='homepagedisplayflexdk' col-1 id='homepage_navbar'>
              <div className="btn-group">

                <div className="nav-item  dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item Linkk" to="/">New Demo New</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/clothing">Clothing</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Basics</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Beauty</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Electronic</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/furniture">Furniture</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/vegetable">Vegetables</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Watch</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Lights</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Goggles</Link></li>

                  </ul>
                </div>
              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item  dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                  </Link>
                  <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item Linkk" to="/">Left Sidebar</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Right Sidebar</Link></li>

                    <li><Link className="dropdown-item Linkk" to="/">No Sidebar</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Sidebar Popup</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Metro New</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Full Width New</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">3 Grid</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">6 Grid</Link></li>
                    vercel<li><Link className="dropdown-item Linkk" to="/">List View</Link></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item  dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTS
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item Linkk" to="/">Sidebar</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Thumbnail Image</Link></li>

                    <li><Link className="dropdown-item Linkk" to="/">3-Column</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">4 Image</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Bundle Product</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Sticky</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Accordian</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Image Swatch</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Accordian</Link></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>

              <div className="btn-group">
                <div className="nav-item  dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Furnitures
                  </Link>
                  <ul className="dropdown-menu">
                    <h5 id='middledk'>Portfolio</h5>
                    <li><Link className="dropdown-item Linkk" to="/">Portfolio Grid 2</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Portfolio Grid 3</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Portfolio Grid 4</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Masonry Grid 2</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Masonry Grid 3</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Masonry Grid 4</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Masonry Full Width</Link></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item  dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </Link>
                  <ul className="dropdown-menu    ">
                    <li><Link className="dropdown-item Linkk" to="/">Vendor NEW</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Account</Link>
                      
                    </li>

                    <li><Link className="dropdown-item Linkk" to="/">About-us</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Search</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Typography NEW</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Review</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Order-Success</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Compare</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Collection</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Lookbook</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Site-Map</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">404</Link></li>

                  </ul>
                </div>
              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">


                <div className="nav-item  dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    BLOGS
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item Linkk" to="/">Blog Left Sidebar</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Blog Right Sidebar</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">No Sidebar</Link></li>
                    <li><Link className="dropdown-item Linkk" to="/">Blog Detail</Link></li>
                  </ul>
                </div>
              </div>

            </div>


            <div className='homepagedisplayflexdk' id='size' col-1>
              <img src='https://w7.pngwing.com/pngs/198/609/png-transparent-computer-icons-symbol-search-box-magnifying-glass-search-miscellaneous-black-zooming-user-interface-thumbnail.png' height='25' width='25' />
            </div>



            <div className="dropdown  homepagedisplayflexdk" id='size' col-1>
              <div className="dropbtn"><img src='https://w7.pngwing.com/pngs/563/496/png-transparent-computer-icons-gear-setting-area-setting-set-thumbnail.png' height='25' width='25' /></div>
              <div className="dropdown-content">
                <h4>Languages</h4>
                <Link to="/">English</Link>
                <Link to="/">Franch</Link><br />
                <h4>Currency</h4>
                <Link to="/">$USD</Link>
                <Link to="/">$IND</Link>
                <Link to="/">$EUR</Link>
                <Link to="/">$GBP</Link>
              </div>
            </div>
            <div className='homepagedisplayflexdk' id='size' col-1>

              <Link to={"/Cart"} className='text-dark text-decoration-none'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzsHdivSzgnGmBt5up1Qz6IZuK20equGS3t5Yi3oXbpeP500N_dv5LSoH6ql-mhe8pQQ&usqp=CAU' height='37' width='37' /><span className='border border-2 text-bg-warning rounded-5 p-2'>{cartItem.length}</span></Link>
            </div>

          </nav>
        </div>

      </div>


    </>



  )
}
export default Header

