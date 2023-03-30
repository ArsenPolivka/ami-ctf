import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import { TaskCard } from '../../components/TaskCard';

import { mockedTasks } from './mockedTaskCollection';

import styles from './TaskCollection.module.css';
import './pagination.css';

const TASKS_PER_PAGE = 4;

export const TaskCollection = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + TASKS_PER_PAGE;

    setCurrentItems(mockedTasks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(mockedTasks.length / TASKS_PER_PAGE));
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * TASKS_PER_PAGE % mockedTasks.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <h2 className="visually-hidden">Task Collection</h2>

      {currentItems?.length ? (
        <ul className={styles.collection}>
          {currentItems.map(({ id, title, description }) => {
            return (
              <li key={id} className={styles.item}>
                <TaskCard
                  id={id}
                  name={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : null}

      <div className="pagination-wrapper">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous"
          previousLinkClassName="page-link"
          nextClassName="page-item next"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          disabledClassName="disabled"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
