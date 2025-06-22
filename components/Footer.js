import styles from '../styles/Footer.module.css';
import {
  FaInstagram,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaApplePay,
  FaGooglePay,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletter}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettà muse.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className={styles.contactCurrency}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3>CURRENCY</h3>
          <p><img src={'/images/USA.png'}/> + USD</p>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <div className={styles.footerColumn}>
          <h4>mettà muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
        <div>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div>
          <h4>mettà muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <FaGooglePay />
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaApplePay />
          </div>
        </div>
        </div>
      </div>

      <div className={styles.footerCopy}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
