'use client'
import styles from './Size.module.scss';

interface SizeFilterProps {
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
}

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export const Size: React.FC<SizeFilterProps> = ({ selectedSizes, setSelectedSizes }) => {
  const handleClick = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sizes}>
        {availableSizes.map(size => (
          <div
            key={size}
            className={`${styles.size} ${selectedSizes.includes(size) ? styles.active : ''}`}
            onClick={() => handleClick(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

