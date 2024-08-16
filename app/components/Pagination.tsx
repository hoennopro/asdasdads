import { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`${styles.pageButton} ${
            currentPage === index + 1 ? styles.active : ""
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={styles.pageButton}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
