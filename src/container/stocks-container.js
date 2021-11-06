import { connect } from 'react-redux';

import {
  setCurrentPageAC,
  setStocksAC,
  setStocksFinAC,
} from '../redux/stocks-reducer';

import Stocks from '../components/stocks';

const mapStateToProps = state => {
  return {
    stocks: state.stocksPage.stocks,
    pageSize: state.stocksPage.pageSize,
    currentPage: state.stocksPage.currentPage,
    totalPages: state.stocksPage.totalPages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStocks: stocks => dispatch(setStocksAC(stocks)),
    setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
    setStocksFin: financials => dispatch(setStocksFinAC(financials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
