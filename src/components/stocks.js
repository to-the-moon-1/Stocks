import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';

import { baseStocks, pageSize, totalPages, URL } from '../consts/initial-state';

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
    async function getStocks() {
      const response = await axios.get(URL);
      if (response.status === 200) return setStocks(response.data);
      throw new Error(response.status);
    }
    getStocks();
  }, [setStocks]);

  const handleOnDragEnd = ({ destination, source }) => {
    if (!destination) return;
    const items = stocks.financials;
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
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

  const idLastStock = currentPage * pageSize;
  const idFirstStock = idLastStock - pageSize;
  const currentStocks = stocks.financials.slice(idFirstStock, idLastStock);

  return (
    <div className="main-content">
      <Table
        currentPage={currentPage}
        currentStocks={currentStocks}
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
  stocks: baseStocks,
};

export default Stocks;
