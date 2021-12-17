import React from "react";
import propTypes from 'prop-types';
import useSelector from "../../../utils/use-selector";
import './style.css';

const PagBtn = ({changeCurrentPage, data, pageNumber}) => {

  const select = useSelector(state => ({
    activeBtnId: state.catalog.activeBtnId
  }));

  const handleClick = (e) => {
    changeCurrentPage(pageNumber, Number(e.target.dataset.key));
  };

  return (
    <button data-key={data} className={select.activeBtnId === pageNumber ? "Pagination__button Pagination__button-active" : "Pagination__button"} onClick={handleClick}>{pageNumber}</button>
  )
};

PagBtn.propTypes = {
  pageNumber: propTypes.number.isRequired,
  data: propTypes.number.isRequired,
  changeCurrentPage: propTypes.func,
}

export default React.memo(PagBtn);
