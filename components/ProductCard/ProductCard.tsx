import Image from 'next/image';
import styles from './ProductCard.module.scss';
import type { Product } from '@/lib/types';

export default function ProductCard({
  product,
  showAddToCart,
}: {
  product: Product;
  showAddToCart: boolean;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 600px) 100vw, 25vw"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <h3 className={styles.title}>{product.title}</h3>
          <span className={styles.price}>${product.price}</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.meta}>
            <span className={styles.category}>{product.category}</span>
          </div>
          {showAddToCart && (
            <button className={styles.cartBtn} type="button">
              Добавить в корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
