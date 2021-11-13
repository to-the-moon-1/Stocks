import React from 'react';
import PropTypes from 'prop-types';

import { baseStocks, pageSize, headTable } from '../consts/initial-state';

import DragDropItems from './drag-drop';

const Table = ({
  currentPage,
  currentStocks,
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
          {headTable.map(({ name }) => (
            <td key={name} className="col col-head">
              {name}
            </td>
          ))}
        </tr>
      </thead>
      <DragDropItems
        currentPage={currentPage}
        currentStocks={currentStocks}
        financials={financials}
        handleOnDragEnd={handleOnDragEnd}
        pageSize={pageSize}
      />
    </table>
  </>
);

Table.propTypes = {
  currentPage: PropTypes.number,
  currentStocks: PropTypes.array,
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
  currentStocks: [],
  pageSize,
  handleOnDragEnd: () => {},
  stocks: baseStocks,
};

export default Table;
