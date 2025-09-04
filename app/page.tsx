import styles from './page.module.scss';
import { getProducts } from '@/lib/api';
import { getUserFromCookies } from '@/lib/auth';
import ProductCard from '@/components/ProductCard/ProductCard';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [{ products }, user] = await Promise.all([
    getProducts({ limit: 12 }),
    getUserFromCookies(),
  ]);

  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} showAddToCart={!!user} />
      ))}
    </div>
  );
}
