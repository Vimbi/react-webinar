import React from "react";
import PagBtn from "./pag-btn";
import './style.css';

const Pagination = ({btns, changeCurrentPage}) => {
  return (
    <div className="Pagination">
      {btns.map((pageNumber, index) => <PagBtn
        key={index}
        data={index}
        changeCurrentPage={changeCurrentPage}
        pageNumber={pageNumber} />
        )}
    </div>
  )
};

export default React.memo(Pagination);
