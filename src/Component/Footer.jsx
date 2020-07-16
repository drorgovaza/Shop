import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

import { faFacebook ,faAmazon , faTelegram , faTwitter} from '@fortawesome/free-brands-svg-icons';


function Footer(){
return(
    <footer class="C mt-auto py-3">
  <div class="containerFooter">
  <span class="footer-text">follow </span>
  <FontAwesomeIcon className="faAmazon" size = '2x' icon={faAmazon} />
  <FontAwesomeIcon className="faTelegram" size = '2x' icon={faTelegram} />
    <FontAwesomeIcon className="faFacebook" size = '2x' icon={faFacebook} />

    <span class="footer-text"> us</span>




  </div>
</footer>
)
}
export default Footer;