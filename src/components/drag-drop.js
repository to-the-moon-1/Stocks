import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import DraggableItems from './draggable';

const DragDropItems = ({
  currentPage,
  financials,
  handleOnDragEnd,
  pageSize,
}) => (
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="droppable">
      {provided => (
        <tbody {...provided.droppableProps} ref={provided.innerRef}>
          <DraggableItems
            currentPage={currentPage}
            financials={financials}
            pageSize={pageSize}
          />
          {provided.placeholder}
        </tbody>
      )}
    </Droppable>
  </DragDropContext>
);

DragDropItems.propTypes = {
  currentPage: PropTypes.number,
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
  handleOnDragEnd: () => {},
  pageSize: 4,
  financials: [],
};

export default DragDropItems;
