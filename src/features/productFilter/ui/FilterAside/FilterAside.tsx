"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterState } from "@/features/filters"; 
import { Range } from "@/shared/ui/Range";
import { Button } from "@/shared/ui/Button";
import { Color } from "@/shared/ui/Color";
import { Size } from "@/shared/ui/Size";
import { Accordion } from "@/shared/ui/Accordion"; 
import styles from "./FilterAside.module.scss";
import { useState } from "react";

export const FilterAside = () => {
  const [openAll, setOpenAll] = useState(true)
  const {
    filters,
    setColor,
    setSizes,
    setPriceRange,
    applyFilters,
  } = useFilterState();

  const colors = [
    "#00C853", "#D50000", "#FFD600", "#FF6D00", "#00B8D4",
    "#2962FF", "#AA00FF", "#F500A1", "#eee", "#000",
  ];

  const OpenAll = () => setOpenAll((prev) => !prev);

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__header}>
        <h3 onClick={OpenAll} className={styles.aside__header__name}>Фильтр</h3>
        <Image onClick={OpenAll} className={styles.aside__header__icon} src="/assets/icons/Filter.svg" alt='Иконка фильтра' width={24} height={24} />
      </div>

      <AnimatePresence initial={false}>
        {openAll && (
         <motion.div
         key="all"
         initial={{ height: 0, opacity: 0 }}
         animate={{ height: 'auto', opacity: 1 }}
         exit={{ height: 0, opacity: 0 }}
         transition={{ duration: 0.3 }}
        > 

      <div className={styles.aside__line}></div>

      <Accordion title="Цена">
        <Range
          min={0}
          max={5000}
          initialMin={filters.minPrice}
          initialMax={filters.maxPrice}
          onChange={(min, max) => setPriceRange(min, max)}
        />
      </Accordion>

      <div className={styles.aside__line}></div>

      <Accordion title="Цвет">
        <Color
          colors={colors}
          selectedColor={filters.color}
          onSelect={setColor}
        />
      </Accordion>

      <div className={styles.aside__line}></div>

      <Accordion title="Размер">
        <Size
          selectedSizes={filters.sizes}
          setSelectedSizes={setSizes}
        />
      </Accordion>

      <div className={styles.aside__line}></div>

      <Button
        text="Применить фильтр"
        onClick={applyFilters}
        variant="filter"
        size="filterSize"
      />
      </motion.div>
      )}
      </AnimatePresence>
    </aside>
  );
};