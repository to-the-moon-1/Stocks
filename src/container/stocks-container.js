import { connect } from 'react-redux';

import {
  setCurrentPage,
  setStocks,
  setStocksFin,
} from '../redux/stocks-reducer';

import Stocks from '../components/stocks';

const mapStateToProps = ({
  stocksPage: { stocks, pageSize, currentPage, totalPages },
}) => ({ stocks, pageSize, currentPage, totalPages });

const mapDispatchToProps = { setStocks, setCurrentPage, setStocksFin };

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
