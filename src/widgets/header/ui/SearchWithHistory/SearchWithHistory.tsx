"use client";
import styles from "./SearchWithHistory.module.scss";
import Image from "next/image";
import { Input } from "@/shared/ui/Inputs/Input/Input";
import { useSearchWithHistory } from "../../hooks/SearchWithHistory";
import { SearchWithHistoryProps } from "@/shared/types/types";

export const SearchWithHistory: React.FC<SearchWithHistoryProps> = ({ inputProps }) => {

  const { value, handleChange, handleFocus, handleBlur, showHistory, showResults, history, filteredProducts, handleDelete } = useSearchWithHistory();

  const renderList = () => {
    if (showHistory) {
      return history.map((item, idx) => (
        <li key={`history-${idx}`} className={styles.resultItem}>
          <Image src="/assets/icons/ClockHeader.svg" alt="История" width={24} height={24} />
          <span>{item}</span>
          <div onClick={() => handleDelete(item)} className={styles.deleteButton}>
            <Image src="/assets/icons/DeleteHeader.svg" alt="Удалить" width={24} height={24} />
          </div>
        </li>
      ));
    }
    if (showResults) {
      return filteredProducts.map((item, idx) => (
        <li key={`result-${idx}`} className={styles.resultItem}>
          <Image src="/assets/icons/gaga.svg" alt="Результат" width={18} height={18} />
          <span>{item.title}</span>
        </li>
      ));
    }
    return null;
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputBox}>
        <Input
          name="search"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Поиск..."
          variant="headerSearch"
          inputSize="headerSearchSize"
          {...inputProps}
        />
      </div>

      {(showHistory || showResults) && (
        <ul className={styles.resultList}>
          {renderList()}
        </ul>
      )}
    </div>
  );
};

