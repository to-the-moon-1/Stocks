import React, {useEffect} from "react";
import {connect} from "react-redux";
import './table.css';
import 'font-awesome/css/font-awesome.min.css';
import {setCurrentPageAC, setStocksAC, setStocksFinancialsAC} from "../redux/stocks-reducer";
import * as axios from "axios";
import {URL} from "./api";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const StocksContainer22 = (props) => {
    useEffect(() => {
        axios.get(URL).then(response => {
            props.setStocks(response.data);
        })
    }, [])

    const indexOfLastStocks = props.currentPage * props.pageSize;
    const indexOfFirstStocks = indexOfLastStocks - props.pageSize;
    const currentStocks = props.stocks.financials.slice(indexOfFirstStocks, indexOfLastStocks);

    const renderStocks = currentStocks.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index + (props.pageSize * props.currentPage) - props.pageSize}>
            {(provided) => (
                <tr {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <td className='col index'>{((props.pageSize * props.currentPage) + index) - (props.pageSize - 1)}</td>
                    <td className='col'>{item.reportDate}</td>
                    <td className='col'>{item.totalAssets}</td>
                    <td className='col'>{item.totalCash}</td>
                    <td className='col'>{item.totalDebt}</td>
                </tr>
            )}
        </Draggable>
    ));

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.stocks.financials.length / props.pageSize); i++) {
        pageNumbers.push(i);
    }

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(+pageNumber.target.id);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        return (
            <span
                className={props.currentPage === number ? 'page selectedPage' : 'page'}
                key={number}
                id={number}
                onClick={onPageChanged}
            >
                {number}
            </span>
        );
    });

    const onPrevPage = () => {
        if (props.currentPage > 1) {
            return props.setCurrentPage(props.currentPage - 1);
        } else {
            return null
        }
    }

    const onFirstPage = () => {
        props.setCurrentPage(1);
    }

    const onNextPage = () => {
        if (props.currentPage < 12 / props.pageSize) {
            return props.setCurrentPage(props.currentPage + 1);
        } else {
            return null
        }
    }

    const onLastPage = () => {
        props.setCurrentPage(Math.ceil(12 / props.pageSize));
    }

    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list);
    //     const [removed] = result.splice(startIndex, 1);
    //     result.splice(endIndex, 0, removed);
    //     debugger
    //     return result;
    // };

    const handleOnDragEnd = (result) => {
        if (!result.destination) {return}
        const items = Array.from(props.stocks.financials);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // const items = reorder(
        //     props.stocks.financials,
        //     result.source.index,
        //     result.destination.index
        // );
        console.log(items)
        console.log(result.destination.index * props.currentPage)
        props.setStocksFinancials(items);
    }

        return <div className='main-content'>
            <h1>Symbol: {props.stocks.symbol}</h1>
            <table>
                <thead>
                <tr>
                    <td className='col head number'>#</td>
                    <td className='col head'>Report date</td>
                    <td className='col head'>Total assets</td>
                    <td className='col head'>Total cash</td>
                    <td className='col head'>Total debt</td>
                </tr>
                </thead>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <tbody {...provided.droppableProps} ref={provided.innerRef}>
                            {renderStocks}
                            {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </DragDropContext>
            </table>
            <div className='allPages'>
                <i onClick={onFirstPage} className="fa fa-angle-double-left page end" aria-hidden="true" />
                <i onClick={onPrevPage} className="fa fa-angle-left page" aria-hidden="true" />
                <span>{renderPageNumbers}</span>
                <i onClick={onNextPage} className="fa fa-angle-right page" aria-hidden="true" />
                <i onClick={onLastPage} className="fa fa-angle-double-right page end" aria-hidden="true" />
            </div>
        </div>
}

let mapStateToProps = (state) => {
    return {
        stocks: state.stocksPage.stocks,
        pageSize: state.stocksPage.pageSize,
        currentPage: state.stocksPage.currentPage,
        currentItem: state.stocksPage.currentItem,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setStocks: (stocks) => {
            dispatch(setStocksAC(stocks))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setStocksFinancials: (financials) => {
            dispatch(setStocksFinancialsAC(financials))
        },
        // setCurrentItem: (currentItem) => {
        //     dispatch(setCurrentItemAC(currentItem))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer22);