import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import DraggableItems from './draggable';

const DragDropItems = ({
  currentPage,
  currentStocks,
  financials,
  handleOnDragEnd,
  pageSize,
}) => (
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="droppable">
      {({ droppableProps, innerRef, placeholder }) => (
        <tbody {...droppableProps} ref={innerRef}>
          <DraggableItems
            currentPage={currentPage}
            currentStocks={currentStocks}
            financials={financials}
            pageSize={pageSize}
          />
          {placeholder}
        </tbody>
      )}
    </Droppable>
  </DragDropContext>
);

DragDropItems.propTypes = {
  currentPage: PropTypes.number,
  currentStocks: PropTypes.array,
  handleOnDragEnd: PropTypes.func,
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

DragDropItems.defaultProps = {
  currentPage: 1,
  currentStocks: [],
  handleOnDragEnd: () => {},
  pageSize: 4,
  financials: [],
};

export default DragDropItems;
