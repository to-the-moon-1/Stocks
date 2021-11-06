import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';

import URL from '../api/api';

import { initialStocks, pageSize, totalPages } from '../consts/initial-state';

import Table from './table';
import Pages from './pages';

const Stocks = ({
  currentPage,
  pageSize,
  setCurrentPage,
  setStocks,
  setStocksFin,
  stocks,
  totalPages,
}) => {
  useEffect(() => {
    axios.get(URL).then(response => setStocks(response.data));
  }, [setStocks]);

  const handleOnDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(stocks.financials);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setStocksFin(items);
  };

  const onPageChanged = pageNumber => setCurrentPage(+pageNumber.target.id);

  const onFirstPage = () => setCurrentPage(1);

  const onPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    return null;
  };

  const onNextPage = () => {
    if (currentPage < totalPages / pageSize) setCurrentPage(currentPage + 1);
    return null;
  };

  const onLastPage = () => setCurrentPage(Math.ceil(totalPages / pageSize));

  return (
    <div className="main-content">
      <Table
        currentPage={currentPage}
        handleOnDragEnd={handleOnDragEnd}
        pageSize={pageSize}
        stocks={stocks}
      />
      <Pages
        currentPage={currentPage}
        financials={stocks.financials}
        onFirstPage={onFirstPage}
        onLastPage={onLastPage}
        onNextPage={onNextPage}
        onPageChanged={onPageChanged}
        onPrevPage={onPrevPage}
        pageSize={pageSize}
      />
    </div>
  );
};

Stocks.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  totalPages: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setStocks: PropTypes.func,
  setStocksFin: PropTypes.func,
  stocks: PropTypes.shape({
    symbol: PropTypes.string,
    financials: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        reportDate: PropTypes.string,
        totalAssets: PropTypes.number,
        totalCash: PropTypes.number,
        totalDebt: PropTypes.number,
      }),
    ),
  }),
};

Stocks.defaultProps = {
  currentPage: 1,
  pageSize,
  totalPages,
  setCurrentPage: () => {},
  setStocks: () => {},
  setStocksFin: () => {},
  stocks: initialStocks,
};

export default Stocks;
