// import React from "react";
// import {connect} from "react-redux";
// import {setCurrentPageAC, setStocksAC, setTotalCountAC} from "../redux/stocks-reducer";
// import * as axios from "axios";
// import {URL} from "./api";
// import StocksComponent from "./StocksComponent";
//
// class StocksContainer extends React.Component {
//     componentDidMount() {
//         axios.get(URL).then(response => {
//             this.props.setStocks(response.data);
//             this.props.setTotalCount(response.data.totalCount);
//         })
//     }
//
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         axios.get({URL}).then(response => {
//             this.props.setStocks(response.data)
//         })
//     }
//
//     render() {
//         return <StocksComponent totalCount={this.props.totalCount}
//                                 pageSize={this.props.pageSize}
//                                 currentPage={this.props.currentPage}
//                                 onPageChanged={this.onPageChanged}
//                                 stocks={this.props.stocks}
//         />
//     }
// }
//
// let mapStateToProps = (state) => {
//     return {
//         stocks: state.stocksPage.stocks,
//         pageSize: state.stocksPage.pageSize,
//         totalCount: state.stocksPage.totalCount,
//         currentPage: state.stocksPage.currentPage,
//         isFetching: state.stocksPage.isFetching,
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         setStocks: (stocks) => {
//             dispatch(setStocksAC(stocks))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);