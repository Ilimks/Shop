'use client';

import style from './Size.module.scss';

interface SizeFilterProps {
  selectedSizes: string[];
  onSelect: (sizes: string[]) => void;
  availableSizes: string[];
}


export const Size: React.FC<SizeFilterProps> = ({ availableSizes, selectedSizes, onSelect }) => {
  const handleClick = (size: string) => {
    if (selectedSizes.includes(size)) {
      onSelect(selectedSizes.filter(s => s !== size));
    } else {
      onSelect([...selectedSizes, size]);
    }
  };
  const handleClickAll = () => {

    if (selectedSizes.length === availableSizes.length) {
      onSelect([]);
    } else {
      onSelect(availableSizes);
    }
  }
 
 
  return (
      <div className={style.filter}>
        <div className={style.filterElement}>
          <input className={style.filterElement__input} checked={selectedSizes.length === availableSizes.length}
            id={`sizeInput`} type="checkbox"
            onChange={handleClickAll}/>
          <label htmlFor={`sizeInput`}
            className={style.filterElement__label} >
            Все
          </label>
        </div>
        {availableSizes.map(size => (
          <div className={style.filterElement} key={size}>
            <input className={style.filterElement__input} checked={selectedSizes.includes(size)}
             id={`sizeInput${size}`} type="checkbox"
              onChange={() => handleClick(size)}/>
            <label
              htmlFor={`sizeInput${size}`}
              className={style.filterElement__label} >
              {size}
            </label>
          </div>
        ))}
      </div>
  );
};

