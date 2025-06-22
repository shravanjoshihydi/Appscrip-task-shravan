import styles from '../styles/Sort.module.css'

export default function Sort({ onSortChange }) {
  return (
    <select className={styles.sortSelect} onChange={(e) => onSortChange(e.target.value)}>
      <option value="">Recommended</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
}
