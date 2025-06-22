import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  const [isSelected,setIsSelected] = useState(false);
  return (
    <>
      <div className={styles.card}>
      {product.status != 'In Stock' && <div className={styles.outOfStock}><div>{product.status}</div></div>}
        <img src={product.image} alt={product.name} className={styles.image} />
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}<img src={isSelected?'/images/redheart.png':'/images/heart.png'} onClick={()=>setIsSelected(!isSelected)}/></p>
      </div>
    </>
  );
}
