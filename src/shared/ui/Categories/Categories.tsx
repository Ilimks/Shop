"use client";
import { useTranslator } from "@/features/filters/hooks/useTranslator";
import style from "./Categories.module.scss";

interface CategoriesProps {
    availableCategories: string[];
    categories: string[];
    onSelect: (category: string[]) => void;
}



export const Categories = ({categories, availableCategories, onSelect}: CategoriesProps) => {


    const t = useTranslator()

    const handleSelect = (category: string) => {
        if (!categories.includes(category)) {
            onSelect([...categories, category])
        } else {
            const newCategories = categories.filter(elem => elem !== category)
            onSelect(newCategories)
        };
    };

    const handleClickAll = () => {

        if (categories.length === availableCategories.length) {
                onSelect([]);
            } else {
                onSelect(availableCategories);
            };
        };


    return (
        <div className={style.filter}>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`category`} 
                    checked={categories.length === availableCategories.length}
                     onChange={handleClickAll}/>
                <label className={style.filterElement__label} htmlFor={`category`}>Все</label>
            </div>
            {availableCategories.map((elem ) =>  (
                <div className={style.filterElement} key={elem}>
                    <input className={style.filterElement__input} type="checkbox" id={`category${t(elem, "ru")}`} 
                        checked={categories.includes(elem)} onChange={() => handleSelect(elem)}/>
                    <label className={style.filterElement__label} htmlFor={`category${t(elem, "ru")}`}>{elem}</label>
                </div>
            ))}
        </div>
    )
}