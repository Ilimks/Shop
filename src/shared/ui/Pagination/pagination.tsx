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

  const handleStart = () => {
    setCurrentPage(1);
  };
  const handleEnd = () => {
    setCurrentPage(totalPages);
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
          onClick={handleStart}
          disabled={currentPage === 1}
          className={styles.pagination__button}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 5 8">
            <path stroke="#151515" strokeLinecap="round" d="M4 7 1.354 4.354a.5.5 0 0 1 0-.708L4 1" />
          </svg><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 5 8">
            <path stroke="#151515" strokeLinecap="round" d="M4 7 1.354 4.354a.5.5 0 0 1 0-.708L4 1" />
          </svg>
        </button>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={styles.pagination__button}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 5 8">
            <path stroke="#151515" strokeLinecap="round" d="M4 7 1.354 4.354a.5.5 0 0 1 0-.708L4 1" />
          </svg>
        </button>

        <button
          onClick={() => handlePageClick(1)}
          className={`${styles.pagination__button} ${currentPage === 1 ? styles.pagination__button__active : ''}`}
        >
          1
        </button>
        {currentPage > 3 && <span className={styles.pagination__dots}>...</span>}
        {Array.from({ length: 3 }, (_, idx) => {
          const page = currentPage > 3 ? currentPage - 2 + idx : idx + 2;
          return (
            page < totalPages && (
              <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`${styles.pagination__button} ${currentPage === page ? styles.pagination__button__active : ''}`}
              >
          {page}
              </button>
            )
          );
        })}
        {currentPage < totalPages - 1 && <span className={styles.pagination__dots}>...</span>}
        <button
          onClick={() => handlePageClick(totalPages)}
          className={`${styles.pagination__button} ${currentPage === totalPages ? styles.pagination__button__active : ''}`}
        >
          {totalPages}
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={styles.pagination__button}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 5 8">
            <path stroke="#151515" strokeLinecap="round" d="m1 7 2.646-2.646a.5.5 0 0 0 0-.708L1 1" />
          </svg>

        </button>
        <button
          onClick={handleEnd}
          disabled={currentPage === totalPages}
          className={styles.pagination__button}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 5 8">
            <path stroke="#151515" strokeLinecap="round" d="m1 7 2.646-2.646a.5.5 0 0 0 0-.708L1 1" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 5 8">
            <path stroke="#151515" strokeLinecap="round" d="m1 7 2.646-2.646a.5.5 0 0 0 0-.708L1 1" />
          </svg>

        </button>
      </div>
    </div>
  );
}

