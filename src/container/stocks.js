import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';

import getDragDropItems from '../utils/get-drag-drop-items';

import { baseStocks, pageSize, totalPages } from '../consts/initial-state';
import URL from '../consts/api';

import Table from '../components/table';
import Pages from '../components/pages';

const Stocks = ({
  currentPage,
  pageSize,
  setCurrentPage,
  setStocks,
  setStocksFinancials,
  stocks,
  totalPages,
}) => {
  useEffect(() => {
    async function getStocks() {
      try {
        const response = await axios.get(URL);
        if (response.status === 200) return setStocks(response.data);
      } catch (err) {
        console.error(err); // eslint-disable-line no-console
      }
      return null;
    }
    getStocks();
  }, [setStocks]);

  const handleOnDragEnd = result => {
    const { financials: items } = stocks;
    setStocksFinancials(getDragDropItems(items, result));
  };

  const pageNumbers = [];
  for (
    let num = 1;
    num <= Math.ceil(stocks.financials.length / pageSize);
    num++
  ) {
    pageNumbers.push(num);
  }

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
        onFirstPage={onFirstPage}
        onLastPage={onLastPage}
        onNextPage={onNextPage}
        onPageChanged={onPageChanged}
        onPrevPage={onPrevPage}
        pageNumbers={pageNumbers}
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
  setStocksFinancials: PropTypes.func,
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
  setStocksFinancials: () => {},
  stocks: baseStocks,
};

export default Stocks;
