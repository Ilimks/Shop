"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterState } from "@/features/filters";
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




export const FilterAside = () => {
  const [openAll, setOpenAll] = useState(true);
  const { filters, availableCategories, availableSizes, availableColors, availableCountries,
     setColor, setSizes, setPriceRange,
      clearFilters, setPriority,
      setCategoryes, setCountry, setSex } = useFilterState();

  const OpenAll = () => setOpenAll((prev) => !prev);




  return (
    <aside className={styles.aside}>
      <div className={styles.aside__header}>
        <h3 onClick={OpenAll} className={styles.aside__header__name}>
          Фильтр
        </h3>
        <FilterButton className={styles.aside__header__button} action={clearFilters}>Сбросить всё</FilterButton>
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

            <Accordion onClose={() => setPriority("newest")} title="Сортировка">
              <GoodsPriority priority={filters.priority} onSelect={setPriority}/>
            </Accordion>

            <Accordion title="Цена">
              <div className={styles.aside__price}>
                <div className={styles.aside__price__cell}>{filters.minPrice} сом</div>
                <div className={styles.aside__price__cell}>{filters.maxPrice} сом</div>
              </div>

              <Range
                min={0}
                max={5000}
                initialMin={filters.minPrice}
                initialMax={filters.maxPrice}
                onChange={(min, max) => setPriceRange(min, max)}
              />
            </Accordion>


            <Accordion onClose={() => setSizes([])} title="Размер">
              <Size 
                availableSizes={availableSizes}
                selectedSizes={filters.sizes}
                onSelect={setSizes} 
              />
            </Accordion>


            <Accordion title="Категория">
              <Categories 
                categories={filters.categoryes} 
                availableCategories={availableCategories} 
                onSelect={setCategoryes}
              />
            </Accordion>


            <Accordion title="Страна">
              <Country 
                countries={filters.country}
                availableCountries={availableCountries}
                onSelect={setCountry}
              />
            </Accordion>

            <Accordion title="Пол">
              <Sex sexes={filters.sex} onSelect={setSex} />
            </Accordion>

            <Accordion title="Цвет">
              <Color
                availableColors={availableColors}
                colors={filters.color}
                onSelect={setColor}
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
