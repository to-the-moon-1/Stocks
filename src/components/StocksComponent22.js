// import React from "react";
// import './table.css';
// import 'font-awesome/css/font-awesome.min.css';
// import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
//
// const StocksComponent22 = (props) => {
//     const indexOfLastStocks = props.currentPage * props.pageSize;
//
//     const indexOfFirstStocks = indexOfLastStocks - props.pageSize;
//
//     const currentStocks = props.stocks.financials.slice(indexOfFirstStocks, indexOfLastStocks);
//
//     const renderStocks = currentStocks.map((item, index) => (
//         <Draggable key={item.id} draggableId={item.id} index={index}>
//             {(provided) => (
//                 <tr {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
//                     <td className='col index'>{((props.pageSize * props.currentPage) + index) - (props.pageSize - 1)}</td>
//                     <td className='col'>{item.reportDate}</td>
//                     <td className='col'>{item.totalAssets}</td>
//                     <td className='col'>{item.totalCash}</td>
//                     <td className='col'>{item.totalDebt}</td>
//                 </tr>
//             )}
//         </Draggable>
//     ));
//
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(props.stocks.financials.length / props.pageSize); i++) {
//         pageNumbers.push(i);
//     }
//
//     const renderPageNumbers = pageNumbers.map((number, index) => {
//         return (
//             <span
//                 className={props.currentPage === number ? 'page selectedPage' : 'page'}
//                 key={number}
//                 id={number}
//                 onClick={props.onPageChanged}
//             >
//                 {number}
//             </span>
//         );
//     });
//
//     const handleOnDragEnd = (result) => {
//         const items = Array.from(currentStocks);
//         const [reorderedItem] = items.splice(result.source.index, 1);
//         items.splice(result.destination.index, 0, reorderedItem);
//         props.setStocks(items)
//         console.log(result)
//     }
//
//     return <div className='main-content'>
//         <h1>Symbol: {props.stocks.symbol}</h1>
//         <table>
//             <thead>
//             <tr>
//                 <td className='col head number'>#</td>
//                 <td className='col head'>Report date</td>
//                 <td className='col head'>Total assets</td>
//                 <td className='col head'>Total cash</td>
//                 <td className='col head'>Total debt</td>
//             </tr>
//             </thead>
//             <DragDropContext onDragEnd={handleOnDragEnd}>
//                 <Droppable droppableId="droppable">
//                     {(provided) => (
//                         <tbody {...provided.droppableProps} ref={provided.innerRef}>
//                             {renderStocks}
//                             {provided.placeholder}
//                         </tbody>
//                     )}
//                 </Droppable>
//             </DragDropContext>
//         </table>
//         <div className='allPages'>
//             <i onClick={props.onFirstPage} className="fa fa-angle-double-left page end" aria-hidden="true" />
//             <i onClick={props.onPrevPage} className="fa fa-angle-left page" aria-hidden="true" />
//             <span>{renderPageNumbers}</span>
//             <i onClick={props.onNextPage} className="fa fa-angle-right page" aria-hidden="true" />
//             <i onClick={props.onLastPage} className="fa fa-angle-double-right page end" aria-hidden="true" />
//         </div>
//     </div>
// }
//
// export default StocksComponent22;