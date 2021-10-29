export const SET_STOCKS = 'SET_STOCKS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_STOCKS_FINANCIALS = 'SET_STOCKS_FINANCIALS';
// const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export let initialState = {
    stocks: {symbol: '', financials: []},
    pageSize: 4,
    currentPage: 1,
    // currentItem: null,
    // totalCount: 12,
}

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STOCKS: {
            return {...state, stocks: action.stocks}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_STOCKS_FINANCIALS: {
            return {...state, stocks: { ...state.stocks, financials: action.financials }}
        }
        // case SET_CURRENT_ITEM: {
        //     return {...state, currentItem: action.currentItem}
        // }
        // case SET_TOTAL_COUNT: {
        //     return {...state, totalCount: action.count}
        // }
        default:
            return state
    }
}

export const setStocksAC = (stocks) => ({type: SET_STOCKS, stocks})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setStocksFinancialsAC = (financials) => ({type: SET_STOCKS_FINANCIALS, financials})
// export const setCurrentItemAC = (currentItem) => ({type: SET_CURRENT_ITEM, currentItem})
// export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount})

export default stocksReducer