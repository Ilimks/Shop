"use client";
import { useTranslator } from "@/shared/functions/useTranslator";
import style from "./Color.module.scss";

interface ColorProps {
    availableColors: string[];
    colors: string[];
    onSelect: (color: string[]) => void;
}



export const Color = ({colors, availableColors, onSelect}: ColorProps) => {


    const t = useTranslator()

    const handleSelect = (color: string) => {
        if (!colors.includes(color)) {
            onSelect([...colors, color])
        } else {
            const newColors = colors.filter(elem => elem !== color)
            onSelect(newColors)
        };
    };

    const handleClickAll = () => {

        if (colors.length === availableColors.length) {
                onSelect([]);
            } else {
                onSelect(availableColors);
            };
        };


    return (
        <div className={style.filter}>
            <div className={style.filterElement}>
                <input className={style.filterElement__input} type="checkbox" id={`color`} 
                    checked={colors.length === availableColors.length}
                     onChange={handleClickAll}/>
                <label className={style.filterElement__label} htmlFor={`color`}>Все</label>
            </div>
            {availableColors.map((elem ) =>  (
                <div className={style.filterElement} key={elem}>
                    <input className={style.filterElement__input} type="checkbox" id={`color${t(elem, "ru")}`} 
                        checked={colors.includes(elem)} onChange={() => handleSelect(elem)}/>
                    <label className={style.filterElement__label} htmlFor={`color${t(elem, "ru")}`}>{elem}</label>
                </div>
            ))}
        </div>
    )
}