import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Page.css";

const Pagination = ({ publicRepos, setCurrentPage }) => {
  const [page, setPage] = useState(1);

  const handleChange = (data) => {
    const selectedPage = data.selected + 1;

    setCurrentPage(selectedPage);
    setPage(selectedPage);
  };

  return (
    <div className="page">
      <p className="page_info">
        {page * 4 - 3}-{page * 4 < publicRepos ? page * 4 : publicRepos} of{" "}
        {publicRepos} items
      </p>

      <ReactPaginate
        previousLabel="&#10094;"
        nextLabel="&#10095;"
        breakLabel="..."
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(publicRepos / 4)}
        containerClassName="page_menu"
        pageClassName="page_page"
        activeClassName="page_page_active"
        previousClassName="page_previous"
        nextClassName="page_next"
        breakClassName="page_break"
        onPageChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
