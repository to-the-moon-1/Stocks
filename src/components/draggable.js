import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItems = ({ currentPage, financials, pageSize }) => {
  const indexOfLastStocks = currentPage * pageSize;
  const indexOfFirstStocks = indexOfLastStocks - pageSize;
  const currentStocks = financials.slice(indexOfFirstStocks, indexOfLastStocks);

  return (
    <>
      {currentStocks.map(
        ({ id, reportDate, totalAssets, totalCash, totalDebt }, index) => (
          <Draggable
            key={id}
            draggableId={id}
            index={index + pageSize * currentPage - pageSize}
          >
            {provided => (
              <tr
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <td className="col col-index">
                  {pageSize * currentPage + index - (pageSize - 1)}
                </td>
                <td className="col">{reportDate}</td>
                <td className="col">{totalAssets}</td>
                <td className="col">{totalCash}</td>
                <td className="col">{totalDebt}</td>
              </tr>
            )}
          </Draggable>
        ),
      )}
    </>
  );
};

DraggableItems.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  financials: PropTypes.arrayOf(
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
  financials: [],
};

export default DraggableItems;
