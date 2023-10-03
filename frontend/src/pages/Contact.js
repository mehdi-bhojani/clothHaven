export default function Contact(){
    return (
<div>


   

  {/*   <!-- Start header area --> */}
    <header  className="header__section">
        <div  className="header__topbar bg__secondary">
            <div  className="container-fluid">
                <div  className="header__topbar--inner d-flex align-items-center justify-content-between">
                    <div  className="header__shipping">
                        <ul  className="header__shipping--wrapper d-flex">
                            <li  className="header__shipping--text text-white">Welcome to Netmark online Store</li>
                            <li  className="header__shipping--text text-white d-sm-2-none"><img  className="header__shipping--text__icon" src="assets/img/icon/bus.png" alt="bus-icon"/> Track Your Order</li>
                            <li  className="header__shipping--text text-white d-sm-2-none"><img  className="header__shipping--text__icon" src="assets/img/icon/email.png" alt="email-icon"/> <a  className="header__shipping--text__link" href="mailto:demo@gmail.com">demo@gmail.com</a></li>
                        </ul>
                    </div>
                    <div  className="language__currency d-none d-lg-block">
                        <ul  className="d-flex align-items-center">
                            <li  className="language__currency--list">
                                <a  className="language__switcher text-white" href="#">
                                    <img  className="language__switcher--icon__img" src="assets/img/icon/language-icon.png" alt="currency"/>
                                    <span>English</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.797" height="9.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div  className="dropdown__language">
                                    <ul>
                                        <li  className="language__items"><a  className="language__text" href="#">France</a></li>
                                        <li  className="language__items"><a  className="language__text" href="#">Russia</a></li>
                                        <li  className="language__items"><a  className="language__text" href="#">Spanish</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li  className="language__currency--list">
                                <a  className="account__currency--link text-white" href="#">
                                    <img src="assets/img/icon/usd-icon.png" alt="currency"/>
                                    <span>$ US Dollar</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.797" height="9.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div  className="dropdown__currency">
                                    <ul>
                                        <li  className="currency__items"><a  className="currency__text" href="#">CAD</a></li>
                                        <li  className="currency__items"><a  className="currency__text" href="#">CNY</a></li>
                                        <li  className="currency__items"><a  className="currency__text" href="#">EUR</a></li>
                                        <li  className="currency__items"><a  className="currency__text" href="#">GBP</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div  className="main__header header__sticky">
            <div  className="container-fluid">
                <div  className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    <div  className="offcanvas__header--menu__open ">
                        <a  className="offcanvas__header--menu__open--btn" href="javascript:void(0)" data-offcanvas>
                            <svg xmlns="http://www.w3.org/2000/svg"  className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span  className="visually-hidden">Menu Open</span>
                        </a>
                    </div>
                    <div  className="main__logo">
                        <a  className="main__logo--link" href="index.html"><img  className="main__logo--img" src="assets/img/logo/nav-log.png" alt="logo-img"/></a>
                    </div>
                    <div  className="header__search--widget header__sticky--none d-none d-lg-block">
                        <form  className="d-flex header__search--form" action="#">
                            <div  className="header__select--categories select">
                                <select  className="header__select--inner">
                                    <option selected value="1">All Categories</option>
                                    <option value="2">Accessories</option>
                                    <option value="3">Accessories & More</option>
                                    <option value="4">Camera & Video </option>
                                    <option value="5">Butters & Eggs </option>
                                </select>
                            </div>
                            <div  className="header__search--box">
                                <label>
                                    <input  className="header__search--input" placeholder="Keyword here..." type="text"/>
                                </label>
                                <button  className="header__search--button bg__secondary text-white" type="submit" aria-label="search button">
                                    <svg  className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="27.51" height="26.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div  className="header__account header__sticky--none">
                        <ul  className="d-flex">
                            <li  className="header__account--items">
                                <a  className="header__account--btn" href="my-account.html">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg> 
                                    <span  className="header__account--btn__text">My Account</span>
                                </a>
                            </li>
                            <li  className="header__account--items d-none d-lg-block">
                                <a  className="header__account--btn" href="wishlist.html">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="28.51" height="23.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>
                                    <span  className="header__account--btn__text"> Wish List</span>
                                    <span  className="items__count wishlist">02</span> 
                                </a>
                            </li>
                            <li  className="header__account--items">
                                <a  className="header__account--btn minicart__open--btn" href="javascript:void(0)" data-offcanvas>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 14.706 13.534">
                                        <g  transform="translate(0 0)">
                                        <g >
                                            <path  data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"/>
                                            <path  data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"/>
                                            <path  data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"/>
                                        </g>
                                        </g>
                                    </svg>
                                    <span  className="header__account--btn__text"> My cart</span>   
                                    <span  className="items__count">02</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div  className="header__menu d-none header__sticky--block d-lg-block">
                        <nav  className="header__menu--navigation">
                            <ul  className="d-flex">
                                <li  className="header__menu--items style2">
                                    <a  className="header__menu--link" href="index.html">Home 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__sub--menu">
                                        <li  className="header__sub--menu__items"><a href="index.html"  className="header__sub--menu__link">Home One</a></li>
                                        <li  className="header__sub--menu__items"><a href="index-2.html"  className="header__sub--menu__link">Home Two</a></li>
                                        <li  className="header__sub--menu__items"><a href="index-3.html"  className="header__sub--menu__link">Home Three</a></li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items mega__menu--items style2">
                                    <a  className="header__menu--link" href="shop.html">Shop 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__mega--menu d-flex">
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column One</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop.html">Shop Left Sidebar</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-grid.html">Shop Grid</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-grid-list.html">Shop Grid List</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-list.html">Shop List</a></li>
                                            </ul>
                                        </li>
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column Two</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-details.html">Product Details</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-video.html">Video Product</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-details.html">Variable Product</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-gallery.html">Product Gallery</a></li>
                                            </ul>
                                        </li>
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column Three</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="my-account.html">My Account</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="my-account-2.html">My Account 2</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="404.html">404 Page</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="login.html">Login Page</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="faq.html">Faq Page</a></li>
                                            </ul>
                                        </li>
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column Four</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="compare.html">Compare Pages</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout.html">Checkout page</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout-2.html">Checkout Style 2</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout-3.html">Checkout Style 3</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout-4.html">Checkout Style 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items style2">
                                    <a  className="header__menu--link" href="about.html">About US </a>  
                                </li>
                                <li  className="header__menu--items style2">
                                    <a  className="header__menu--link" href="blog.html">Blog 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__sub--menu">
                                        <li  className="header__sub--menu__items"><a href="blog.html"  className="header__sub--menu__link">Blog Grid</a></li>
                                        <li  className="header__sub--menu__items"><a href="blog-details.html"  className="header__sub--menu__link">Blog Details</a></li>
                                        <li  className="header__sub--menu__items"><a href="blog-left-sidebar.html"  className="header__sub--menu__link">Blog Left Sidebar</a></li>
                                        <li  className="header__sub--menu__items"><a href="blog-right-sidebar.html"  className="header__sub--menu__link">Blog Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items style2 d-none d-xl-block">
                                    <a  className="header__menu--link" href="shop.html">Categories </a>  
                                </li>
                                <li  className="header__menu--items style2">
                                    <a  className="header__menu--link" href="#">Pages 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__sub--menu">
                                        <li  className="header__sub--menu__items"><a href="about.html"  className="header__sub--menu__link">About Us</a></li>
                                        <li  className="header__sub--menu__items"><a href="contact.html"  className="header__sub--menu__link">Contact Us</a></li>
                                        <li  className="header__sub--menu__items"><a href="cart.html"  className="header__sub--menu__link">Cart Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="portfolio.html"  className="header__sub--menu__link">Portfolio Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="wishlist.html"  className="header__sub--menu__link">Wishlist Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="login.html"  className="header__sub--menu__link">Login Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="404.html"  className="header__sub--menu__link">Error Page</a></li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items style2">
                                    <a  className="header__menu--link" href="contact.html">Contact </a>  
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div  className="header__account header__account2 header__sticky--block">
                        <ul  className="d-flex">
                            <li  className="header__account--items header__account2--items  header__account--search__items d-none d-lg-block">
                                <a  className="header__account--btn search__open--btn" href="javascript:void(0)" data-offcanvas>
                                    <svg  className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>  
                                    <span  className="visually-hidden">Search</span>
                                </a>
                            </li>
                            <li  className="header__account--items header__account2--items">
                                <a  className="header__account--btn" href="my-account.html">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                                    <span  className="visually-hidden">My Account</span>
                                </a>
                            </li>
                            <li  className="header__account--items header__account2--items d-none d-lg-block">
                                <a  className="header__account--btn" href="wishlist.html">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="28.51" height="23.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>
                                    <span  className="items__count  wishlist style2">02</span> 
                                </a>
                            </li>
                            <li  className="header__account--items header__account2--items">
                                <a  className="header__account--btn minicart__open--btn" href="javascript:void(0)" data-offcanvas>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 14.706 13.534">
                                        <g  transform="translate(0 0)">
                                        <g >
                                            <path  data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"/>
                                            <path  data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"/>
                                            <path  data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"/>
                                        </g>
                                        </g>
                                    </svg>
                                    <span  className="items__count style2">02</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div  className="header__bottom">
            <div  className="container-fluid">
                <div  className="header__bottom--inner position__relative d-none d-lg-flex justify-content-between align-items-center">
                    <div  className="header__menu">
                        <nav  className="header__menu--navigation">
                            <ul  className="d-flex">
                                <li  className="header__menu--items">
                                    <a  className="header__menu--link" href="index.html">Home 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__sub--menu">
                                        <li  className="header__sub--menu__items"><a href="index.html"  className="header__sub--menu__link">Home One</a></li>
                                        <li  className="header__sub--menu__items"><a href="index-2.html"  className="header__sub--menu__link">Home Two</a></li>
                                        <li  className="header__sub--menu__items"><a href="index-3.html"  className="header__sub--menu__link">Home Three</a></li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items mega__menu--items">
                                    <a  className="header__menu--link" href="shop.html">Shop 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__mega--menu d-flex">
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column One</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop.html">Shop Left Sidebar</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-grid.html">Shop Grid</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-grid-list.html">Shop Grid List</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="shop-list.html">Shop List</a></li>
                                            </ul>
                                        </li>
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column Two</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-details.html">Product Details</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-video.html">Video Product</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-details.html">Variable Product</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="product-gallery.html">Product Gallery</a></li>
                                            </ul>
                                        </li>
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column Three</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="my-account.html">My Account</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="my-account-2.html">My Account 2</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="404.html">404 Page</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="login.html">Login Page</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="faq.html">Faq Page</a></li>
                                            </ul>
                                        </li>
                                        <li  className="header__mega--menu__li">
                                            <span  className="header__mega--subtitle">Column Four</span>
                                            <ul  className="header__mega--sub__menu">
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="compare.html">Compare Pages</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout.html">Checkout page</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout-2.html">Checkout Style 2</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout-3.html">Checkout Style 3</a></li>
                                                <li  className="header__mega--sub__menu_li"><a  className="header__mega--sub__menu--title" href="checkout-4.html">Checkout Style 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items">
                                    <a  className="header__menu--link" href="about.html">About US </a>  
                                </li>
                                <li  className="header__menu--items">
                                    <a  className="header__menu--link" href="blog.html">Blog 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__sub--menu">
                                        <li  className="header__sub--menu__items"><a href="blog.html"  className="header__sub--menu__link">Blog Grid</a></li>
                                        <li  className="header__sub--menu__items"><a href="blog-details.html"  className="header__sub--menu__link">Blog Details</a></li>
                                        <li  className="header__sub--menu__items"><a href="blog-left-sidebar.html"  className="header__sub--menu__link">Blog Left Sidebar</a></li>
                                        <li  className="header__sub--menu__items"><a href="blog-right-sidebar.html"  className="header__sub--menu__link">Blog Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items d-none d-xl-block">
                                    <a  className="header__menu--link" href="shop.html">Categories </a>  
                                </li>
                                <li  className="header__menu--items">
                                    <a  className="header__menu--link" href="#">Pages 
                                        <svg  className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul  className="header__sub--menu">
                                        <li  className="header__sub--menu__items"><a href="about.html"  className="header__sub--menu__link">About Us</a></li>
                                        <li  className="header__sub--menu__items"><a href="contact.html"  className="header__sub--menu__link">Contact Us</a></li>
                                        <li  className="header__sub--menu__items"><a href="cart.html"  className="header__sub--menu__link">Cart Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="portfolio.html"  className="header__sub--menu__link">Portfolio Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="wishlist.html"  className="header__sub--menu__link">Wishlist Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="login.html"  className="header__sub--menu__link">Login Page</a></li>
                                        <li  className="header__sub--menu__items"><a href="404.html"  className="header__sub--menu__link">Error Page</a></li>
                                    </ul>
                                </li>
                                <li  className="header__menu--items">
                                    <a  className="header__menu--link" href="contact.html">Contact </a>  
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <p  className="header__discount--text"><img  className="header__discount--icon__img" src="assets/img/icon/lamp.png" alt="lamp-img"/> Special up to 60% Off all item</p>
                </div>
            </div>
        </div>

      {/*   <!-- Start Offcanvas header menu --> */}
        <div  className="offcanvas__header">
            <div  className="offcanvas__inner">
                <div  className="offcanvas__logo">
                    <a  className="offcanvas__logo_link" href="index.html">
                        <img src="assets/img/logo/nav-log.png" alt="Grocee Logo" width="158" height="36"/>
                    </a>
                    <button  className="offcanvas__close--btn" data-offcanvas>close</button>
                </div>
                <nav  className="offcanvas__menu">
                    <ul  className="offcanvas__menu_ul">
                        <li  className="offcanvas__menu_li">
                            <a  className="offcanvas__menu_item" href="index.html">Home</a>
                            <ul  className="offcanvas__sub_menu">
                                <li  className="offcanvas__sub_menu_li"><a href="index.html"  className="offcanvas__sub_menu_item">Home One</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="index-2.html"  className="offcanvas__sub_menu_item">Home Two</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="index-3.html"  className="offcanvas__sub_menu_item">Home Three</a></li>
                            </ul>
                        </li>
                        <li  className="offcanvas__menu_li">
                            <a  className="offcanvas__menu_item" href="#">Shop</a>
                            <ul  className="offcanvas__sub_menu">
                                <li  className="offcanvas__sub_menu_li">
                                    <a href="#"  className="offcanvas__sub_menu_item">Column One</a>
                                    <ul  className="offcanvas__sub_menu">
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="shop.html">Shop Left Sidebar</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="shop-grid.html">Shop Grid</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="shop-grid-list.html">Shop Grid List</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="shop-list.html">Shop List</a></li>
                                    </ul>
                                </li>
                                <li  className="offcanvas__sub_menu_li">
                                    <a href="#"  className="offcanvas__sub_menu_item">Column Two</a>
                                    <ul  className="offcanvas__sub_menu">
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="product-details.html">Product Details</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="product-video.html">Video Product</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="product-details.html">Variable Product</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="product-gallery.html">Product Gallery</a></li>
                                    </ul>
                                </li>
                                <li  className="offcanvas__sub_menu_li">
                                    <a href="#"  className="offcanvas__sub_menu_item">Column Three</a>
                                    <ul  className="offcanvas__sub_menu">
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="my-account.html">My Account</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="my-account-2.html">My Account 2</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="404.html">404 Page</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="login.html">Login Page</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="faq.html">Faq Page</a></li>
                                    </ul>
                                </li>
                                <li  className="offcanvas__sub_menu_li">
                                    <a href="#"  className="offcanvas__sub_menu_item">Column Three</a>
                                    <ul  className="offcanvas__sub_menu">
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="compare.html">Compare Pages</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="checkout.html">Checkout page</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="checkout-2.html">Checkout Style 2</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="checkout-3.html">Checkout Style 3</a></li>
                                        <li  className="offcanvas__sub_menu_li"><a  className="offcanvas__sub_menu_item" href="checkout-4.html">Checkout Style 4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li  className="offcanvas__menu_li">
                            <a  className="offcanvas__menu_item" href="#">Blog</a>
                            <ul  className="offcanvas__sub_menu">
                                <li  className="offcanvas__sub_menu_li"><a href="blog.html"  className="offcanvas__sub_menu_item">Blog Grid</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="blog-details.html"  className="offcanvas__sub_menu_item">Blog Details</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="blog-left-sidebar.html"  className="offcanvas__sub_menu_item">Blog Left Sidebar</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="blog-right-sidebar.html"  className="offcanvas__sub_menu_item">Blog Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li  className="offcanvas__menu_li">
                            <a  className="offcanvas__menu_item" href="#">Pages</a>
                            <ul  className="offcanvas__sub_menu">
                                <li  className="offcanvas__sub_menu_li"><a href="about.html"  className="offcanvas__sub_menu_item">About Us</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="contact.html"  className="offcanvas__sub_menu_item">Contact Us</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="cart.html"  className="offcanvas__sub_menu_item">Cart Page</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="portfolio.html"  className="offcanvas__sub_menu_item">Portfolio Page</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="wishlist.html"  className="offcanvas__sub_menu_item">Wishlist Page</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="login.html"  className="offcanvas__sub_menu_item">Login Page</a></li>
                                <li  className="offcanvas__sub_menu_li"><a href="404.html"  className="offcanvas__sub_menu_item">Error Page</a></li>
                            </ul>
                        </li>
                        <li  className="offcanvas__menu_li"><a  className="offcanvas__menu_item" href="about.html">About</a></li>
                        <li  className="offcanvas__menu_li"><a  className="offcanvas__menu_item" href="contact.html">Contact</a></li>
                    </ul>
                    <div  className="offcanvas__account--items">
                        <a  className="offcanvas__account--items__btn d-flex align-items-center" href="login.html">
                        <span  className="offcanvas__account--items__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg> 
                            </span>
                        <span  className="offcanvas__account--items__label">Login / Register</span>
                        </a>
                    </div>
                    <div  className="language__currency">
                        <ul  className="d-flex align-items-center">
                            <li  className="language__currency--list">
                                <a  className="offcanvas__language--switcher" href="#">
                                    <img  className="language__switcher--icon__img" src="assets/img/icon/language-icon.png" alt="currency"/>
                                    <span>English</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.797" height="9.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div  className="offcanvas__dropdown--language">
                                    <ul>
                                        <li  className="language__items"><a  className="language__text" href="#">France</a></li>
                                        <li  className="language__items"><a  className="language__text" href="#">Russia</a></li>
                                        <li  className="language__items"><a  className="language__text" href="#">Spanish</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li  className="language__currency--list">
                                <a  className="offcanvas__account--currency__menu" href="#">
                                    <img src="assets/img/icon/usd-icon.png" alt="currency"/>
                                    <span>$ US Dollar</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.797" height="9.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div  className="offcanvas__account--currency__submenu">
                                    <ul>
                                        <li  className="currency__items"><a  className="currency__text" href="#">CAD</a></li>
                                        <li  className="currency__items"><a  className="currency__text" href="#">CNY</a></li>
                                        <li  className="currency__items"><a  className="currency__text" href="#">EUR</a></li>
                                        <li  className="currency__items"><a  className="currency__text" href="#">GBP</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
       {/*  <!-- End Offcanvas header menu -->

        <!-- Start Offcanvas stikcy toolbar --> */}
        <div  className="offcanvas__stikcy--toolbar">
            <ul  className="d-flex justify-content-between">
                <li  className="offcanvas__stikcy--toolbar__list">
                    <a  className="offcanvas__stikcy--toolbar__btn" href="index.html">
                    <span  className="offcanvas__stikcy--toolbar__icon"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21.51" height="21.443" viewBox="0 0 22 17"><path fill="currentColor" d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"></path></svg>
                        </span>
                    <span  className="offcanvas__stikcy--toolbar__label">Home</span>
                    </a>
                </li>
                <li  className="offcanvas__stikcy--toolbar__list">
                    <a  className="offcanvas__stikcy--toolbar__btn" href="shop.html">
                    <span  className="offcanvas__stikcy--toolbar__icon"> 
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18.51" height="17.443" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path></svg>
                        </span>
                    <span  className="offcanvas__stikcy--toolbar__label">Shop</span>
                    </a>
                </li>
                <li  className="offcanvas__stikcy--toolbar__list ">
                    <a  className="offcanvas__stikcy--toolbar__btn search__open--btn" href="javascript:void(0)" data-offcanvas>
                        <span  className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>   
                        </span>
                    <span  className="offcanvas__stikcy--toolbar__label">Search</span>
                    </a>
                </li>
                <li  className="offcanvas__stikcy--toolbar__list">
                    <a  className="offcanvas__stikcy--toolbar__btn minicart__open--btn" href="javascript:void(0)" data-offcanvas>
                        <span  className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.51" height="15.443" viewBox="0 0 18.51 15.443">
                            <path  d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z" transform="translate(-62.393 -135.3)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span  className="offcanvas__stikcy--toolbar__label">Cart</span>
                        <span  className="items__count">3</span> 
                    </a>
                </li>
                <li  className="offcanvas__stikcy--toolbar__list">
                    <a  className="offcanvas__stikcy--toolbar__btn" href="wishlist.html">
                        <span  className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.541" height="15.557" viewBox="0 0 18.541 15.557">
                            <path  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z" transform="translate(-62.498 -132.915)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span  className="offcanvas__stikcy--toolbar__label">Wishlist</span>
                        <span  className="items__count">3</span> 
                    </a>
                </li>
            </ul>
        </div>
     {/*    <!-- End Offcanvas stikcy toolbar -->

        <!-- Start offCanvas minicart --> */}
        <div  className="offCanvas__minicart">
            <div  className="minicart__header ">
                <div  className="minicart__header--top d-flex justify-content-between align-items-center">
                    <h2  className="minicart__title h3"> Shopping Cart</h2>
                    <button  className="minicart__close--btn" aria-label="minicart close button" data-offcanvas> 
                        <svg  className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <p  className="minicart__header--desc">Clothing and fashion products are limited</p>
            </div>
            <div  className="minicart__product">
                <div  className="minicart__product--items d-flex">
                    <div  className="minicart__thumb">
                        <a href="product-details.html"><img src="assets/img/product/product1.png" alt="prduct-img"/></a>
                    </div>
                    <div  className="minicart__text">
                        <h3  className="minicart__subtitle h4"><a href="product-details.html">Oversize Cotton Dress</a></h3>
                        <span  className="color__variant"><b>Color:</b> Beige</span>
                        <div  className="minicart__price">
                            <span  className="current__price">$125.00</span>
                            <span  className="old__price">$140.00</span>
                        </div>
                        <div  className="minicart__text--footer d-flex align-items-center">
                            <div  className="quantity__box minicart__quantity">
                                <button type="button"   className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number"  className="quantity__number" value="1" data-counter />
                                </label>
                                <button type="button"  className="quantity__value increase"  value="Increase Value">+</button>
                            </div>
                            <button  className="minicart__product--remove">Remove</button>
                        </div>
                    </div>
                </div>
                <div  className="minicart__product--items d-flex">
                    <div  className="minicart__thumb">
                        <a href="product-details.html"><img src="assets/img/product/product2.png" alt="prduct-img"/></a>
                    </div>
                    <div  className="minicart__text">
                        <h3  className="minicart__subtitle h4"><a href="product-details.html">Boxy Denim Jacket</a></h3>
                        <span  className="color__variant"><b>Color:</b> Green</span>
                        <div  className="minicart__price">
                            <span  className="current__price">$115.00</span>
                            <span  className="old__price">$130.00</span>
                        </div>
                        <div  className="minicart__text--footer d-flex align-items-center">
                            <div  className="quantity__box minicart__quantity">
                                <button type="button"  className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number"  className="quantity__number" value="1" data-counter />
                                </label>
                                <button type="button"  className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button  className="minicart__product--remove">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="minicart__amount">
                <div  className="minicart__amount_list d-flex justify-content-between">
                    <span>Sub Total:</span>
                    <span><b>$240.00</b></span>
                </div>
                <div  className="minicart__amount_list d-flex justify-content-between">
                    <span>Total:</span>
                    <span><b>$240.00</b></span>
                </div>
            </div>
            <div  className="minicart__conditions text-center">
                <input  className="minicart__conditions--input" id="accept" type="checkbox"/>
                <label  className="minicart__conditions--label" for="accept">I agree with the <a  className="minicart__conditions--link" href="privacy-policy.html">Privacy and Policy</a></label>
            </div>
            <div  className="minicart__button d-flex justify-content-center">
                <a  className="primary__btn minicart__button--link" href="cart.html">View cart</a>
                <a  className="primary__btn minicart__button--link" href="checkout.html">Checkout</a>
            </div>
        </div>
      {/*   <!-- End offCanvas minicart -->

        <!-- Start serch box area --> */}
        <div  className="predictive__search--box ">
            <div  className="predictive__search--box__inner">
                <h2  className="predictive__search--title">Search Products</h2>
                <form  className="predictive__search--form" action="#">
                    <label>
                        <input  className="predictive__search--input" placeholder="Search Here" type="text"/>
                    </label>
                    <button  className="predictive__search--button" aria-label="search button" type="submit"><svg  className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>  </button>
                </form>
            </div>
            <button  className="predictive__search--close__btn" aria-label="search close button" data-offcanvas>
                <svg  className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        </div>
    {/*     <!-- End serch box area --> */}

    </header>
  {/*   <!-- End header area --> */}

    <main  className="main__content_wrapper">
        
     {/*    <!-- Start breadcrumb section --> */}
        <section  className="breadcrumb__section breadcrumb__bg">
            <div  className="container">
                <div  className="row row-cols-1">
                    <div  className="col">
                        <div  className="breadcrumb__content text-center">
                            <h1  className="breadcrumb__content--title text-white mb-25">Contact Us</h1>
                            <ul  className="breadcrumb__content--menu d-flex justify-content-center">
                                <li  className="breadcrumb__content--menu__items"><a  className="text-white" href="index.html">Home</a></li>
                                <li  className="breadcrumb__content--menu__items"><span  className="text-white">Contact Us</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  <!-- End breadcrumb section -->

        <!-- Start contact section --> */}
        <section  className="contact__section section--padding">
            <div  className="container">
                <div  className="section__heading text-center mb-40">
                    <h2  className="section__heading--maintitle">Get In Touch</h2>
                </div>
                <div  className="main__contact--area position__relative">
                    
                    <div  className="contact__form">
                        <h3  className="contact__form--title mb-40">Contact Me</h3>
                        <form  className="contact__form--inner" action="#">
                            <div  className="row">
                                <div  className="col-lg-6 col-md-6">
                                    <div  className="contact__form--list mb-20">
                                        <label  className="contact__form--label" for="input1">First Name <span  className="contact__form--label__star">*</span></label>
                                        <input  className="contact__form--input" name="firstname" id="input1" placeholder="Your First Name" type="text"/>
                                    </div>
                                </div>
                                <div  className="col-lg-6 col-md-6">
                                    <div  className="contact__form--list mb-20">
                                        <label  className="contact__form--label" for="input2">Last Name <span  className="contact__form--label__star">*</span></label>
                                        <input  className="contact__form--input" name="lastname" id="input2" placeholder="Your Last Name" type="text"/>
                                    </div>
                                </div>
                                <div  className="col-lg-6 col-md-6">
                                    <div  className="contact__form--list mb-20">
                                        <label  className="contact__form--label" for="input3">Phone Number <span  className="contact__form--label__star">*</span></label>
                                        <input  className="contact__form--input" name="number" id="input3" placeholder="Phone number" type="text"/>
                                    </div>
                                </div>
                                <div  className="col-lg-6 col-md-6">
                                    <div  className="contact__form--list mb-20">
                                        <label  className="contact__form--label" for="input4">Email <span  className="contact__form--label__star">*</span></label>
                                        <input  className="contact__form--input" name="email" id="input4" placeholder="Email" type="email"/>
                                    </div>
                                </div>
                                <div  className="col-12">
                                    <div  className="contact__form--list mb-15">
                                        <label  className="contact__form--label" for="input5">Write Your Message <span  className="contact__form--label__star">*</span></label>
                                        <textarea  className="contact__form--textarea" name="message" id="input5" placeholder="Write Your Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button  className="contact__form--btn primary__btn" type="submit">Submit Now</button>  
                        </form>
                    </div>
                    <div  className="contact__info border-radius-5">
                        <div  className="contact__info--items">
                            <h3  className="contact__info--content__title text-white mb-15">Contact Us</h3>
                            <div  className="contact__info--items__inner d-flex">
                                <div  className="contact__info--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.568" height="31.128" viewBox="0 0 31.568 31.128">
                                        <path id="ic_phone_forwarded_24px" d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" transform="translate(-3 -1)" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div  className="contact__info--content">
                                    <p  className="contact__info--content__desc text-white">Change the design through a range <br/> <a href="tel:+01234-567890">+01234-567890</a> <a href="tel:++01234-5688765">+01234-5688765</a>   </p>
                                </div>
                            </div>
                        </div>
                        <div  className="contact__info--items">
                            <h3  className="contact__info--content__title text-white mb-15">Email Address</h3>
                            <div  className="contact__info--items__inner d-flex">
                                <div  className="contact__info--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                                        <path id="ic_email_24px" d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" fill="currentColor"/>
                                    </svg>  
                                </div>
                                <div  className="contact__info--content">
                                    <p  className="contact__info--content__desc text-white"> <a href="mailto:info@example.com">info@example.com</a> <br/> <a href="mailto:info@example.com">info@example.com</a></p> 
                                </div>
                            </div>
                        </div>
                        <div  className="contact__info--items">
                            <h3  className="contact__info--content__title text-white mb-15">Office Location</h3>
                            <div  className="contact__info--items__inner d-flex">
                                <div  className="contact__info--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                                        <path id="ic_account_balance_24px" d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" fill="currentColor"/>
                                    </svg> 
                                </div>
                                <div  className="contact__info--content">
                                    <p  className="contact__info--content__desc text-white">  123 Stree New York City ,
                                        United States Of America
                                        NY 750065.</p> 
                                </div>
                            </div>
                        </div>
                        <div  className="contact__info--items">
                            <h3  className="contact__info--content__title text-white mb-15">Follow Us</h3>
                            <ul  className="contact__info--social d-flex">
                                <li  className="contact__info--social__list">
                                    <a  className="contact__info--social__icon" target="_blank" href="https://www.facebook.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                            <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"></path>
                                        </svg>
                                        <span  className="visually-hidden">Facebook</span>
                                    </a>
                                </li>
                                <li  className="contact__info--social__list">
                                    <a  className="contact__info--social__icon" target="_blank" href="https://twitter.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                            <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"></path>
                                        </svg>
                                        <span  className="visually-hidden">Twitter</span>
                                    </a>
                                </li>
                                <li  className="contact__info--social__list">
                                    <a  className="contact__info--social__icon" target="_blank" href="https://www.instagram.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
                                            <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"/>
                                        </svg>
                                        <span  className="visually-hidden">Instagram</span>
                                    </a>
                                </li>
                                <li  className="contact__info--social__list">
                                    <a  className="contact__info--social__icon" target="_blank" href="https://www.youtube.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                            <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"></path>
                                        </svg>
                                        <span  className="visually-hidden">Youtube</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/*     <!-- End contact section -->

        <!-- Start contact map area --> */}
        <div  className="contact__map--area section--padding pt-0">
            <iframe  className="contact__map--iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7887.465355142307!2d-0.13384360843222626!3d51.4876034467734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760532743b90e1%3A0x790260718555a20c!2sU.S.%20Embassy%2C%20London!5e0!3m2!1sen!2sbd!4v1632035375945!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy"></iframe>
        </div>
      {/*   <!-- End contact map area -->

         <!-- Start brand logo section --> */}
         <div  className="brand__logo--section bg__secondary section--padding">
            <div  className="container-fluid">
                <div  className="row row-cols-1">
                    <div  className="col">
                        <div  className="brand__logo--section__inner d-flex justify-content-center align-items-center">
                            <div  className="brand__logo--items">
                                <img  className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo1.png" alt="brand logo"/>
                            </div>
                            <div  className="brand__logo--items">
                                <img  className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo2.png" alt="brand logo"/>
                            </div>
                            <div  className="brand__logo--items">
                                <img  className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo3.png" alt="brand logo"/>
                            </div>
                            <div  className="brand__logo--items">
                                <img  className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo4.png" alt="brand logo"/>
                            </div>
                            <div  className="brand__logo--items">
                                <img  className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo5.png" alt="brand logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/*   <!-- End brand logo section -->

        <!-- Start shipping section --> */}
        <section  className="shipping__section2 shipping__style3 section--padding">
            <div  className="container">
                <div  className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
                    <div  className="shipping__items2 d-flex align-items-center">
                        <div  className="shipping__items2--icon">
                            <img src="assets/img/other/shipping1.png" alt=""/>
                        </div>
                        <div  className="shipping__items2--content">
                            <h2  className="shipping__items2--content__title h3">Shipping</h2>
                            <p  className="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div  className="shipping__items2 d-flex align-items-center">
                        <div  className="shipping__items2--icon">
                            <img src="assets/img/other/shipping2.png" alt=""/>
                        </div>
                        <div  className="shipping__items2--content">
                            <h2  className="shipping__items2--content__title h3">Payment</h2>
                            <p  className="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div  className="shipping__items2 d-flex align-items-center">
                        <div  className="shipping__items2--icon">
                            <img src="assets/img/other/shipping3.png" alt=""/>
                        </div>
                        <div  className="shipping__items2--content">
                            <h2  className="shipping__items2--content__title h3">Return</h2>
                            <p  className="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div  className="shipping__items2 d-flex align-items-center">
                        <div  className="shipping__items2--icon">
                            <img src="assets/img/other/shipping4.png" alt=""/>
                        </div>
                        <div  className="shipping__items2--content">
                            <h2  className="shipping__items2--content__title h3">Support</h2>
                            <p  className="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     {/*    <!-- End shipping section --> */}

    </main>

   

</div>
    );
}