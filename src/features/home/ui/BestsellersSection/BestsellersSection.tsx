"use client"
import styles from './BestsellersSection.module.scss'
import mobile from './BestsellersSectionMobile.module.scss'
import { mockProducts } from '@/mock/productMock'
import { ProductCard } from '@/entities/product/ui/ProductCard'
import { Button } from '@/shared/ui/Buttons/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisibleProducts } from '../../hooks/useVisibleProducts'
import { Product } from '@/entities/product/model/types'

interface NewSectionProps {
  initialProducts: Product[]
}

export const BestsellersSection = ({ initialProducts }: NewSectionProps) => {
    const { visibleCount, isExpanded, handleToggle } = useVisibleProducts(mockProducts);

    return (
        <section className={`${styles.bestsellers} ${mobile.bestsellers}`}>
          <div className={`container ${mobile.container}`}>
            <div className={`${styles.bestsellers__box} ${mobile.bestsellers__box}`}>
              <p className={`${styles.bestsellers__text} ${mobile.bestsellers__text}`}>В этом месяце</p>
              <h3 className={`${styles.bestsellers__title} ${mobile.bestsellers__title}`}>Бестселлеры</h3>
    
              <div className={`${styles.bestsellers__items} ${mobile.bestsellers__items}`}>
                <AnimatePresence>
                  {mockProducts.slice(0, visibleCount).map((el, idx) => (
                    <motion.div
                      key={el.title + idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                    >
                      <ProductCard
                        title={el.title}
                        image={el.image}
                        price={el.price}
                        maker={el.maker}
                        oldPrice={el.oldPrice}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
    
              <div className={`${styles.bestsellers__btn} ${mobile.bestsellers__btn}`}>
                <Button 
                  text={isExpanded ? 'Свернуть' : 'Показать больше'} 
                  onClick={handleToggle}
                  variant="show" 
                  size="showSize"
                />
              </div>
            </div>
          </div>
        </section>
    )
}