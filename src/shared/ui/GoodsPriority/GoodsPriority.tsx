'use client';

import style from './GoodsPriority.module.scss';
import type { GoodsPriorityType } from "@/features/filters/hooks/useFilterState"

interface GoodsPriorityProps  {
    onSelect: (priority: GoodsPriorityType) => void;
    priority: GoodsPriorityType;
}

export const GoodsPriority = ({priority, onSelect}: GoodsPriorityProps) => {


    const handleSeclect = (priority: GoodsPriorityType) => {
        onSelect(priority)
    };

    return (
        <div className={style.filter}>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} checked={priority === "mostPopular"} onChange={() => handleSeclect("mostPopular")}
                 name="goodsPriority" type="radio" id="mostPopular" />

                <label className={style.filterElement__label} htmlFor="mostPopular">Популярное</label>
            </div>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} checked={priority === "mostExpensive"} onChange={() => handleSeclect("mostExpensive")}
                 name="goodsPriority" type="radio" id="mostExpensive" />

                <label className={style.filterElement__label} htmlFor="mostExpensive">Дороже</label>
            </div>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} checked={priority ===  "cheapest"} onChange={() => handleSeclect("cheapest")}
                 name="goodsPriority" type="radio" id="cheapest" />

                <label className={style.filterElement__label} htmlFor="cheapest">Дешевле</label>
            </div>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} checked={priority === "newest"} onChange={() => handleSeclect("newest")}
                 name="goodsPriority" type="radio" id="newest" />

                <label className={style.filterElement__label} htmlFor="newest">Новинки</label>
            </div>
        </div>
    );
};