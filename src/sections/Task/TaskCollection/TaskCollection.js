import { useState, useEffect, useMemo, useContext } from "react";
import ReactPaginate from 'react-paginate';

import { TaskCard } from '../../../components/TaskCard';
import { Loader } from '../../../components/Loader';
import { useSetSidebarConfig } from "../../../hooks/useSidebarConfig";
import { TaskContext } from '../../../context/task/context';

import styles from './TaskCollection.module.css';
import './pagination.css';

const TASKS_PER_PAGE = 4;

export const TaskCollection = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const setSidebarConfig = useSetSidebarConfig();

  const { taskCollection } = useContext(TaskContext);

  const items = useMemo(() => {
    return taskCollection?.content ?? [];
  }, [taskCollection]);

  useEffect(() => {
    // Set the sidebar configuration for the TaskSingle page
    setSidebarConfig({ showRatingCard: true });

    // Reset the sidebar configuration when the component is unmounted
    return () => {
      setSidebarConfig({ showRatingCard: false });
    };
  }, [setSidebarConfig]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + TASKS_PER_PAGE;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / TASKS_PER_PAGE));
  }, [itemOffset, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * TASKS_PER_PAGE % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">Task Collection</h2>

      <ul className={styles.collection}>
        {items.length ? currentItems.map(({ id, name, description }) => {
          return (
            <li key={id} className={styles.item}>
              <TaskCard
                id={id}
                name={name}
                description={description}
              />
            </li>
          );
        }) : null}
      </ul>

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
