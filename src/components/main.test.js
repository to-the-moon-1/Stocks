import stocksReducer, {
    initialState,
    SET_CURRENT_PAGE,
    SET_STOCKS,
    SET_STOCKS_FINANCIALS, setCurrentPageAC, setStocksAC, setStocksFinancialsAC
} from './../redux/stocks-reducer'



// TESTS OF REDUCER

describe('Reducer', () => {

    it('SET_STOCKS', () => {
        const action = {
            type: SET_STOCKS,
            stocks: {symbol: '', financials: []},
        }
        expect(stocksReducer(initialState, action)).toEqual({
            ...initialState,
            stocks: action.stocks,
            pageSize: 4,
            currentPage: 1,
        })
    })

    it('SET_CURRENT_PAGE', () => {
        const action = {
            type: SET_CURRENT_PAGE,
            currentPage: 1,
        }
        expect(stocksReducer(initialState, action)).toEqual({
            ...initialState,
            stocks: {symbol: '', financials: []},
            pageSize: 4,
            currentPage: action.currentPage,
        })
    })

    it('SET_STOCKS_FINANCIALS', () => {
        const action = {
            type: SET_STOCKS_FINANCIALS,
            financials: ['a', 'b', 'c'],
        }
        expect(stocksReducer(initialState, action)).toEqual({
            ...initialState,
            stocks: {symbol: '', financials: action.financials},
            pageSize: 4,
            currentPage: 1,
        })
    })
})



// TESTS OF ACTIONS

describe('Actions', () => {

    it('setStocksAC', () => {
        expect(setStocksAC({symbol: '', financials: []})).toEqual({type: SET_STOCKS, stocks: {symbol: '', financials: []}})
    })

    it('setCurrentPageAC', () => {
        expect(setCurrentPageAC(1)).toEqual({type: SET_CURRENT_PAGE, currentPage: 1})
    })

    it('setStocksFinancialsAC', () => {
        expect(setStocksFinancialsAC(['a', 'b', 'c'])).toEqual({type: SET_STOCKS_FINANCIALS, financials: ['a', 'b', 'c']})
    })
})

describe('API and store', () => {

    it('setStocksAC', () => {
        expect(setStocksAC({symbol: '', financials: []})).toEqual({type: SET_STOCKS, stocks: {symbol: '', financials: []}})
    })

    it('setCurrentPageAC', () => {
        expect(setCurrentPageAC(1)).toEqual({type: SET_CURRENT_PAGE, currentPage: 1})
    })

    it('setStocksFinancialsAC', () => {
        expect(setStocksFinancialsAC(['a', 'b', 'c'])).toEqual({type: SET_STOCKS_FINANCIALS, financials: ['a', 'b', 'c']})
    })
})