import { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SidebarFilters from '../components/SidebarFilters';
import Sort from '../components/Sort';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
const products = [
  { id: 1, name: 'White Hat', image: '/images/products/whitecap.jpg', status: 'In Stock', category: 'Men', description: 'Sign in or create account to see pricing', price: 499 },
  { id: 2, name: 'Grey Backpack', image: '/images/products/greybag.jpg', status: 'In Stock', category: 'Women', description: 'Sign in or create account to see pricing', price: 1499 },
  { id: 3, name: 'Plush Toy - Dinosaur', image: '/images/products/plushytoy.jpg', status: 'Out of Stock', category: 'Kids', description: 'Sign in or create account to see pricing', price: 799 },
  { id: 4, name: 'Handbag', image: '/images/products/handbag.jpg', status: 'In Stock', category: 'Women', description: 'Sign in or create account to see pricing', price: 1299 },  
  { id: 5, name: 'Bracelet', image: '/images/products/bracelet.jpg', status: 'In Stock', category: 'Men', description: 'Sign in or create account to see pricing', price: 599 },
  { id: 6, name: 'Grey Backpack', image: '/images/products/greybag.jpg', status: 'In Stock', category: 'Women', description: 'Sign in or create account to see pricing', price: 1599 },
  { id: 7, name: 'Kid Purse', image: '/images/products/minipurse.jpg', status: 'In Stock', category: 'Kids', description: 'Sign in or create account to see pricing', price: 799 },
  { id: 8, name: 'Plush Toy - Dinosaur', image: '/images/products/plushytoy.jpg', status: 'Out of Stock', category: 'Kids', description: 'Sign in or create account to see pricing', price: 799 },
  { id: 9, name: 'White Hat', image: '/images/products/whitecap.jpg', status: 'In Stock', category: 'Men', description: 'Sign in or create account to see pricing', price: 549 },
  { id: 10, name: 'Handbag', image: '/images/products/handbag.jpg', status: 'In Stock', category: 'Women', description: 'Sign in or create account to see pricing', price: 1499 },
  { id: 11, name: 'Kid Purse', image: '/images/products/minipurse.jpg', status: 'In Stock', category: 'Kids', description: 'Sign in or create account to see pricing', price: 799 },
  { id: 12, name: 'Grey Backpack', image: '/images/products/greybag.jpg', status: 'In Stock', category: 'Women', description: 'Sign in or create account to see pricing', price: 1399 },
  { id: 13, name: 'Bracelet', image: '/images/products/bracelet.jpg', status: 'In Stock', category: 'Men', description: 'Sign in or create account to see pricing', price: 599 },
  { id: 14, name: 'White Hat', image: '/images/products/whitecap.jpg', status: 'In Stock', category: 'Men', description: 'Sign in or create account to see pricing', price: 499 },
];

  const categories = [...new Set(products.map(p => p.category))];

  return { props: { products, categories } };
}

export default function Home({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, isShowFilters] = useState(true);
  const [sortOrder, setSortOrder] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory
      ? products.filter(p => p.category === selectedCategory)
      : products;

    if (sortOrder === 'asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [sortOrder, selectedCategory]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  } 
  return (
    <>
      <Head>
        <title>Apprite</title>
        <meta name="description" content="Browse curated artisan-crafted'Women, Kids, and Men at our store." />
        <link href="https://db.onlinewebfonts.com/c/ca671f001f1c1ac07ba12ef439e7e65a?family=Simplon+Norm" rel="stylesheet"></link>
      </Head>

      <Header />

      <main className={styles.container}>
        

        <div className={styles.mainContent}>
          <div className={styles.heroSection}>
            <h1>Discover Our Products</h1>
            <h2>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>
          </div>
          <div className={styles.topFilter}>
            <div>
              <span className={styles.count}>{filteredProducts.length} Items</span>
              <span className={styles.hideFilters} onClick={() => isShowFilters(!showFilters)}><img className={`${showFilters?styles.arrowLeft:styles.arrowRight}`} src='/images/arrow-left.png'/> {showFilters?'Hide':'Show'} Filters section</span>
            </div>
            <div>
              <Sort onSortChange={handleSortChange}/>
            </div>
          </div>
            <div className={styles.productsGrid}>
            {showFilters && <SidebarFilters
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />}
            <div className={styles.cards}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} className={styles.productCard}/>
              ))}</div>
            </div>
          
        </div>
      </main>

      <Footer />
    </>
  );
}
