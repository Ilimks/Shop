"use client";

import type { GoodsSexType } from "@/features/filters/hooks/useFilterState";
import style from "./Sex.module.scss";

interface SexProps {
    sexes: GoodsSexType[];
    onSelect: (sex: GoodsSexType[]) => void;
}


const availableSex: GoodsSexType[] = [ "male", "female", "unisex"]

export const Sex = ({sexes, onSelect}: SexProps) => {

    const handleSelect = (sex: GoodsSexType) => {
        if (!sexes.includes(sex)) {
            onSelect([...sexes, sex])
        } else {
            const newSexes = sexes.filter(elem => elem !== sex)
            onSelect(newSexes)
        };
    };

    const handleClickAll = () => {

        if (sexes.length === availableSex.length) {
                onSelect([]);
            } else {
                onSelect(availableSex);
            };
        };


    return (
        <div className={style.filter}>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`sex`} 
                    checked={sexes.length === availableSex.length}
                     onChange={handleClickAll}/>
                <label className={style.filterElement__label} htmlFor={`sex`}>Все</label>
            </div>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`sexFemale`} 
                    checked={sexes.includes("female")} onChange={() => handleSelect("female")}/>
                <label className={style.filterElement__label} htmlFor={`sexFemale`}>Женский</label>
            </div>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`sexMale`} 
                    checked={sexes.includes("male")} onChange={() => handleSelect("male")}/>
                <label className={style.filterElement__label} htmlFor={`sexMale`}>Мужской</label>
            </div>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`sexUnisex`} 
                    checked={sexes.includes("unisex")} onChange={() => handleSelect("unisex")}/>
                <label className={style.filterElement__label} htmlFor={`sexUnisex`}>Унисекс</label>
            </div>
        </div>
    )
}