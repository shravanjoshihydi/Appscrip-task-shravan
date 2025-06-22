// components/Header.js
import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.topStrip}>
        <span><img src=" /images/element-4.png" alt="logo"/>Lorem ipsum dolor</span>
        <span><img src="/images/element-4.png" alt="logo"/>Lorem ipsum dolor</span>
        <span><img src="/images/element-4.png" alt="logo"/>Lorem ipsum dolor</span>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Site Logo" />
        </div>
        
        <div className={styles.logoText}>LOGO</div>

        <div className={styles.icons}>
          <span><img src="/images/search-normal.png" alt="search" width={20} height={20}/></span>
          <span><img src="/images/heart.png" alt="like" width={20} height={20}/></span>
          <span><img src="/images/shopping-bag.png" alt="cart" width={20} height={20}/></span>
          <span><img src="/images/profile.png" alt="profile" width={20} height={20}/></span>
          <span>ENG <img src="/images/arrow-left.png" alt="arrow" width={20} height={20}/></span>
        </div>
      </div>
      <div className={styles.nav}>
        <nav className={styles.navLinks}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
      <hr/>
    </header>
  );
}
