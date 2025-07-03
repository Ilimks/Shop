"use client"
import { FilterAside } from '@/features/productFilter/ui/FilterAside/FilterAside'
import styles from './FilterPajamasSection.module.scss'
import { mockProducts } from "@/mock/productMock";
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { useSearchParams } from 'next/navigation';
import { useFilterState } from '@/features/filters';

export const FilterPajamasSection: React.FC = () => {

    const searchParams = useSearchParams();

    // Получаем фильтры из URL
    const minPrice = Number(searchParams.get("minPrice")) || 0;
    const maxPrice = Number(searchParams.get("maxPrice")) || 5000;
    const color = searchParams.get("color");
    const sizes = searchParams.get("sizes")?.split(",") || [];
  
    // Фильтруем продукты
    const filteredProducts = mockProducts.filter((product) => {
      const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    //   const matchColor = color ? product.color === color : true;
    //   const matchSize = sizes.length > 0 ? sizes.includes(product.size) : true;
      return matchPrice ;
    });
    return (
        <section className={styles.filterPajamas}>
            <div className="container">
                <h1 className={styles.filterPajamas__name}>Пижамы</h1>
                <div className={styles.filterPajamas__box}>
                    <FilterAside/>
                    <div className={styles.filterPajamas__box__products}>
                        {filteredProducts.map((el,idx) => (
                            <ProductCard
                                sizes={el.sizes}
                                colors={el.colors}
                                title={el.title}
                                image={el.image}
                                price={el.price}
                                maker={el.maker}
                                key={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}