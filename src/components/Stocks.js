import React from "react";
import {connect} from "react-redux";
import {setCurrentItemAC, setCurrentPageAC, setStocksAC} from "../redux/stocks-reducer";
import * as axios from "axios";
import {URL} from "./api";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

class Stocks extends React.Component {
    componentDidMount() {
        axios.get(URL).then(response => {
            this.props.setStocks(response.data);
        })
    }

    indexOfLastStocks = this.props.currentPage * this.props.pageSize;
    indexOfFirstStocks = this.indexOfLastStocks - this.props.pageSize;
    currentStocks = this.props.stocks.financials.slice(this.indexOfFirstStocks, this.indexOfLastStocks);

    renderStocks = this.props.currentStocks.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
                <tr {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <td className='col index'>{((this.props.pageSize * this.props.currentPage) + index) - (this.props.pageSize - 1)}</td>
                    <td className='col'>{item.reportDate}</td>
                    <td className='col'>{item.totalAssets}</td>
                    <td className='col'>{item.totalCash}</td>
                    <td className='col'>{item.totalDebt}</td>
                </tr>
            )}
        </Draggable>
    ));

    pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(this.props.stocks.financials.length / this.props.pageSize); i++) {
    //     pageNumbers.push(i);
    // }

    renderPageNumbers = this.props.pageNumbers.map((number, index) => {
        return (
            <span
                className={this.props.currentPage === number ? 'page selectedPage' : 'page'}
                key={number}
                id={number}
                onClick={this.props.onPageChanged}>
                {number}
            </span>
        );
    });

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(+pageNumber.target.id);
    }

    onPrevPage = () => {
        if (this.props.currentPage > 1) {
            return this.props.setCurrentPage(this.props.currentPage - 1);
        } else {
            return null
        }
    }

    onFirstPage = () => {
        this.props.setCurrentPage(1);
    }

    onNextPage = () => {
        if (this.props.currentPage < 12 / this.props.pageSize) {
            return this.props.setCurrentPage(this.props.currentPage + 1);
        } else {
            return null
        }
    }

    onLastPage = () => {
        this.props.setCurrentPage(Math.ceil(12 / this.props.pageSize));
    }

    handleOnDragEnd = (result) => {
        const items = Array.from(this.currentStocks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        this.props.setStocks(items);
        console.log(result)
    }

    render() {
        return <div className='main-content'>
            <h1>Symbol: {this.props.stocks.symbol}</h1>
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
                <DragDropContext onDragEnd={this.props.handleOnDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <tbody {...provided.droppableProps} ref={provided.innerRef}>
                            {this.renderStocks}
                            {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </DragDropContext>
            </table>
            <div className='allPages'>
                <i onClick={this.props.onFirstPage} className="fa fa-angle-double-left page end" aria-hidden="true" />
                <i onClick={this.props.onPrevPage} className="fa fa-angle-left page" aria-hidden="true" />
                <span>{this.renderPageNumbers}</span>
                <i onClick={this.props.onNextPage} className="fa fa-angle-right page" aria-hidden="true" />
                <i onClick={this.props.onLastPage} className="fa fa-angle-double-right page end" aria-hidden="true" />
            </div>
        </div>
    }
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
        setCurrentItem: (currentItem) => {
            dispatch(setCurrentItemAC(currentItem))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);