import React  , {Component}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCoffee , faCrown , faShoppingCart} from '@fortawesome/free-solid-svg-icons';
function Header(){
   return(
     <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1 king">
      <FontAwesomeIcon size = '3x' icon={faCrown} />

      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo" href="/">CROWN</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="iconshop" href="/Order" aria-label="Search">
        <FontAwesomeIcon  size = '2x' icon={faShoppingCart} />
        </a>
      </div>
    </div>
    <div class="nav-scroller py-1 mb-2">
 
  </div>
  
  </header>
  )
}
export default Header;