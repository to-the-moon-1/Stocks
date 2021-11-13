import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItems = ({ currentPage, currentStocks, pageSize }) => (
  <>
    {currentStocks.map(
      ({ id, reportDate, totalAssets, totalCash, totalDebt }, index) => {
        const idBeforeChange = index + pageSize * currentPage - pageSize;
        const idAfterChange = pageSize * currentPage + index - (pageSize - 1);
        return (
          <Draggable key={id} draggableId={id} index={idBeforeChange}>
            {({ draggableProps, dragHandleProps, innerRef }) => (
              <tr {...draggableProps} {...dragHandleProps} ref={innerRef}>
                <td className="col col-index">{idAfterChange}</td>
                <td className="col">{reportDate}</td>
                <td className="col">{totalAssets}</td>
                <td className="col">{totalCash}</td>
                <td className="col">{totalDebt}</td>
              </tr>
            )}
          </Draggable>
        );
      },
    )}
  </>
);

DraggableItems.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  currentStocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      reportDate: PropTypes.string,
      totalAssets: PropTypes.number,
      totalCash: PropTypes.number,
      totalDebt: PropTypes.number,
    }),
  ),
};

DraggableItems.defaultProps = {
  currentPage: 1,
  pageSize: 4,
  currentStocks: [],
};

export default DraggableItems;
