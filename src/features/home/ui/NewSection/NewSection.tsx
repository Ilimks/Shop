'use client'
import { ProductCard } from '@/entities/product/ui/ProductCard'
import styles from './NewSection.module.scss'
import mobile from './NewSectionMobile.module.scss'
import { mockProducts } from '@/mock/productMock'
import { Button } from '@/shared/ui/Buttons/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisibleProducts } from '../../hooks/useVisibleProducts'
import { Product } from '@/entities/product/model/types'

interface NewSectionProps {
  initialProducts: Product[]
}

export const NewSection = ({ initialProducts }: NewSectionProps) => {
  const { visibleCount, isExpanded, handleToggle } = useVisibleProducts(mockProducts);

  return (
    <section className={`${styles.new} ${mobile.new}`}>
      <div className="container">
        <div className={`${styles.new__box} ${mobile.new__box}`}>
          <p className={`${styles.new__text} ${mobile.new__text}`}>На этой неделе</p>
          <h3 className={`${styles.new__title} ${mobile.new__title}`}>Новое поступление</h3>
    
          <div className={`${styles.new__items} ${mobile.new__items}`}>
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
    
          <div className={`${styles.new__btn} ${mobile.new__btn}`}>
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
