"use client";
import { useTranslator } from "@/shared/functions/useTranslator";
import style from "./Country.module.scss";



interface CountryProps {
    availableCountries: string[];
    countries: string[];
    onSelect: (category: string[]) => void;
}



export const Country = ({countries, availableCountries, onSelect}: CountryProps) => {
    

    const t = useTranslator()

    const handleSelect = (country: string) => {
        if (!countries.includes(country)) {
            onSelect([...countries, country])
        } else {
            const newCountries = countries.filter(elem => elem !== country)
            onSelect(newCountries)
        };
    };

    const handleClickAll = () => {

        if (countries.length === availableCountries.length) {
                onSelect([]);
            } else {
                onSelect(availableCountries);
            };
        };


    return (
        <div className={style.filter}>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`country`} 
                    checked={countries.length === availableCountries.length}
                     onChange={handleClickAll}/>
                <label className={style.filterElement__label} htmlFor={`country`}>Все</label>
            </div>
            {availableCountries.map((elem ) =>  (
                <div className={style.filterElement} key={elem}>
                    <input className={style.filterElement__input} type="checkbox" id={`country${t(elem, "ru")}`} 
                        checked={countries.includes(elem)} onChange={() => handleSelect(elem)}/>
                    <label className={style.filterElement__label} htmlFor={`country${t(elem, "ru")}`}>{elem}</label>
                </div>
            ))}
        </div>
    )
}