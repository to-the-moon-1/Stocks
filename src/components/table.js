import React from 'react';
import PropTypes from 'prop-types';

import { initialStocks, pageSize } from '../consts/initial-state';

import DragDropItems from './drag-drop';

const Table = ({
  currentPage,
  handleOnDragEnd,
  pageSize,
  stocks: { financials, symbol },
}) => (
  <>
    <h1 className="header">Symbol: {symbol}</h1>
    <table className="table">
      <thead className="thead">
        <tr>
          <td className="col col-head col-number">#</td>
          <td className="col col-head">Report date</td>
          <td className="col col-head">Total assets</td>
          <td className="col col-head">Total cash</td>
          <td className="col col-head">Total debt</td>
        </tr>
      </thead>
      <DragDropItems
        currentPage={currentPage}
        financials={financials}
        handleOnDragEnd={handleOnDragEnd}
        pageSize={pageSize}
      />
    </table>
  </>
);

Table.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  handleOnDragEnd: PropTypes.func,
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

Table.defaultProps = {
  currentPage: 1,
  pageSize,
  handleOnDragEnd: () => {},
  stocks: initialStocks,
};

export default Table;
