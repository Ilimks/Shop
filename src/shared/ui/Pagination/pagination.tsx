"use client";

import { useState } from 'react';
import styles from './pagination.module.scss';
import { PaginationProps } from '@/shared/types/types';

export function Pagination<T>({ objects, limit }: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(objects.length / limit);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * limit;
  const currentObjects = objects.slice(start, start + limit);

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__items}>
        {currentObjects.map((item, idx) => (
          <div key={idx} className={styles.pagination__item}>
            {String(item)}
          </div>
        ))}
      </div>

      <div className={styles.pagination__controls}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={styles.pagination__button}
        >
          Пред.
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageClick(idx + 1)}
            className={`${styles.pagination__button} ${currentPage === idx + 1 ? styles.pagination__button__active : ''}`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={styles.pagination__button}
        >
          След.
        </button>
      </div>
    </div>
  );
}

