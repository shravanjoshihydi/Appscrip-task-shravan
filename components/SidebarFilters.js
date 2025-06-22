import { useState } from 'react';
import styles from '../styles/SidebarFilters.module.css';

export default function SidebarFilters({ categories = [], selected, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <aside className={styles.sidebar}>
      <div onClick={()=>setIsSelected(!isSelected)}><span>Ideal For</span><img src="/images/arrow-left.png" className={`${isSelected? styles.invertArrow:''}`}/></div>
      <p>{selected || 'All'}</p>
      <ul className={`${isSelected? styles.show:styles.hide}`}>
        <li
          className={!selected ? styles.active : ''}
          onClick={() => onSelect(null)}
        >All</li>
        {categories.map(cat => (
          <li
            key={cat}
            className={selected === cat ? styles.active : ''}
            onClick={() => onSelect(cat)}
          >{cat}</li>
        ))}
      </ul>
    </aside>
  );
}
