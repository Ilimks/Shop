"use client";
import { motion, AnimatePresence,} from "framer-motion";
import { Range } from "@/shared/ui/Range";
import { Color } from "@/shared/ui/Color";
import { Size } from "@/shared/ui/Size";
import { Accordion } from "@/shared/ui/Accordion";
import styles from "./FilterAside.module.scss";
import { useState } from "react";
import { GoodsPriority } from "@/shared/ui/GoodsPriority/GoodsPriority";
import { Categories } from "@/shared/ui/Categories/Categories";
import { Country } from "@/shared/ui/Country/Country";
import { Sex } from "@/shared/ui/Sex/Sex";
import { FilterButton } from "@/shared/ui/Buttons/ui/FilterButton";
import { resetFilter, setPriority, setPriceRange,
   setSizes, setColor, setCategories, setCountry,
   setSex,}  from '@/store/slices/filterSlice';
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux/hooks";
import { availableCountries, availableCategories,
   availableColors, availableSizes } from "@/store/slices/filterSlice";



export const FilterAside = () => {
  const [openAll, setOpenAll] = useState(true);
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.filter)
  


  const OpenAll = () => setOpenAll((prev) => !prev);




  return (
    <aside className={styles.aside}>
      <div className={styles.aside__header}>
        <h3 onClick={OpenAll} className={styles.aside__header__name}>
          Фильтр
        </h3>
        <FilterButton className={styles.aside__header__button} action={() => dispatch(resetFilter(null))}>Сбросить всё</FilterButton>
      </div>

      <AnimatePresence initial={false}>
        {openAll && (
          <motion.div
            key="all"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >

            <Accordion onClose={() => dispatch(setPriority("newest"))} title="Сортировка">
              <GoodsPriority priority={filter.priority} onSelect={(value) => dispatch(setPriority(value))}/>
            </Accordion>

            <Accordion title="Цена">
              <div className={styles.aside__price}>
                <div className={styles.aside__price__cell}>{filter.minPrice} сом</div>
                <div className={styles.aside__price__cell}>{filter.maxPrice} сом</div>
              </div>

              <Range
                min={0}
                max={5000}
                initialMin={filter.minPrice}
                initialMax={filter.maxPrice}
                onChange={(min, max) => dispatch(setPriceRange({minPrice: min, maxPrice: max})) }
              />
            </Accordion>


            <Accordion onClose={() => dispatch(setSizes([]))} title="Размер">
              <Size 
                availableSizes={availableSizes}
                selectedSizes={filter.sizes}
                onSelect={(value) => dispatch(setSizes(value))} 
              />
            </Accordion>


            <Accordion title="Категория">
              <Categories 
                categories={filter.categories} 
                availableCategories={availableCategories} 
                onSelect={(value)=>dispatch(setCategories(value))}
              />
            </Accordion>


            <Accordion title="Страна">
              <Country 
                countries={filter.country}
                availableCountries={availableCountries}
                onSelect={(value)=> dispatch(setCountry(value))}
              />
            </Accordion>

            <Accordion title="Пол">
              <Sex sexes={filter.sex} onSelect={(value) => dispatch(setSex(value))} />
            </Accordion>

            <Accordion title="Цвет">
              <Color
                availableColors={availableColors}
                colors={filter.color}
                onSelect={(color)=>dispatch(setColor(color))}
              />
            </Accordion>





            {/* <Button
              text="Применить фильтр"
              onClick={applyFilters}
              variant="filter"
              size="filterSize"
            /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
