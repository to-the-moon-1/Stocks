import React from "react";
import {connect} from "react-redux";
import {setCurrentItemAC, setCurrentPageAC, setStocksAC} from "../redux/stocks-reducer";
import * as axios from "axios";
import {URL} from "./api";
import StocksComponent2 from "./StocksComponent2";

class StocksContainer2 extends React.Component {
    componentDidMount() {
        axios.get(URL).then(response => {
            this.props.setStocks(response.data);
        })
    }

    // componentDidMount() {
    //     this.props.setStocks({symbol: 'APPL',
    //         financials: [
    //             { reportDate: '15-06-2020', totalAssets: 1324324324, totalCash: 434234234234, totalDebt: 34322343 },
    //             { reportDate: '16-06-2020', totalAssets: 3244324, totalCash: 234, totalDebt: 324432423 },
    //             { reportDate: '17-06-2020', totalAssets: 324324, totalCash: 2342, totalDebt: 35234 },
    //             { reportDate: '18-06-2020', totalAssets: 5454535, totalCash: 4342543234234234, totalDebt: 456456546 },
    //             { reportDate: '19-06-2020', totalAssets: 23234, totalCash: 435, totalDebt: 234423235 },
    //             { reportDate: '20-06-2020', totalAssets: 43543, totalCash: 5, totalDebt: 345345435435 },
    //             { reportDate: '21-06-2020', totalAssets: 345323, totalCash: 324, totalDebt: 65765 },
    //             { reportDate: '22-06-2020', totalAssets: 324342, totalCash: 435, totalDebt: 56564 },
    //             { reportDate: '23-06-2020', totalAssets: 5435, totalCash: 23445, totalDebt: 234545 },
    //             { reportDate: '24-06-2020', totalAssets: 243432423, totalCash: 34433, totalDebt: 3232234 },
    //             { reportDate: '25-06-2020', totalAssets: 3253245, totalCash: 21312, totalDebt: 34343434 },
    //             { reportDate: '26-06-2020', totalAssets: 1324332432424324, totalCash: 125443, totalDebt: 5553443 }
    //         ]});
    // }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(+pageNumber.target.id);
        // axios.get({URL}).then(response => {
        //     this.props.setStocks(response.data)
        // })
    }

    onPrevPage = () => {
        if (this.props.currentPage > 1) {
            return this.props.setCurrentPage(this.props.currentPage - 1);
        } else {
            return null
        }

        // if (this.props.currentPage === 3) {
        //     this.props.setCurrentPage(2);
        // } else if (this.props.currentPage === 2) {
        //     this.props.setCurrentPage(1);
        // } else {
        //     this.props.setCurrentPage(1);
        // }
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

        // if (this.props.currentPage === 1) {
        //     this.props.setCurrentPage(2);
        // } else if (this.props.currentPage === 2) {
        //     this.props.setCurrentPage(3);
        // } else {
        //     this.props.setCurrentPage(3);
        // }
    }

    onLastPage = () => {
        this.props.setCurrentPage(Math.ceil(12 / this.props.pageSize));
    }

    dragStartHandler = (e, item) => {
        // const indexOfLastStocks = this.props.currentPage * this.props.pageSize;
        // const indexOfFirstStocks = indexOfLastStocks - this.props.pageSize;
        // const currentStocks = this.props.stocks.financials.slice(indexOfFirstStocks, indexOfLastStocks);
        console.log('drag', item)
        this.props.setCurrentItem(item)
    }

    dragEndHandler = (e) => {
        e.target.style.background = 'none'
    }

    dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'blue'
    }

    dropHandler = (e, item) => {
        e.preventDefault()
        console.log('drop', item)
        this.props.setStocks(this.props.stocks.financials.map(stock => {
            if(stock.id === item.id) {
                return {...stock, order: this.props.currentItem.order}
            }
            if(stock.id === this.props.currentItem.id) {
                return {...stock, order: item.order}
            }
            return stock
        }))
        e.target.style.background = 'none'
    }

    // handleOnDragEnd = (result) => {
    //     const items = Array.from(currentStocks);
    //     const [reorderedItem] = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedItem);
    //     this.props.setStocks(items);
    //     console.log(result)
    // }

    render() {
        return <StocksComponent2 pageSize={this.props.pageSize}
                                 currentPage={this.props.currentPage}
                                 stocks={this.props.stocks}
                                 currentItem={this.currentItem}
                                 onPageChanged={this.onPageChanged}
                                 onPrevPage={this.onPrevPage}
                                 onFirstPage={this.onFirstPage}
                                 onNextPage={this.onNextPage}
                                 onLastPage={this.onLastPage}
                                 dragStartHandler={this.dragStartHandler}
                                 dragEndHandler={this.dragEndHandler}
                                 dragOverHandler={this.dragOverHandler}
                                 dropHandler={this.dropHandler}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer2);