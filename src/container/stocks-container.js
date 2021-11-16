import { connect } from 'react-redux';

import {
  setCurrentPage,
  setStocks,
  setStocksFinancials,
} from '../reducers/stocks-reducer';

import Stocks from './stocks';

const mapStateToProps = ({
  stocksPage: { stocks, pageSize, currentPage, totalPages },
}) => ({ stocks, pageSize, currentPage, totalPages });

const mapDispatchToProps = { setStocks, setCurrentPage, setStocksFinancials };

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
