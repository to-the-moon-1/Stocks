import stocksReducer, {
  initialState,
  SET_CURRENT_PAGE,
  SET_STOCKS,
  SET_STOCKS_FINANCIALS,
  setCurrentPageAC,
  setStocksAC,
  setStocksFinAC,
} from '../redux/stocks-reducer';

// TESTS OF REDUCER

describe('Reducer', () => {
  it('SET_STOCKS', () => {
    const action = {
      type: SET_STOCKS,
      stocks: initialState,
    };
    expect(stocksReducer(initialState, action)).toEqual({
      ...initialState,
      stocks: action.stocks,
      pageSize: 4,
      currentPage: 1,
    });
  });

  it('SET_CURRENT_PAGE', () => {
    const action = {
      type: SET_CURRENT_PAGE,
      currentPage: 1,
    };
    expect(stocksReducer(initialState, action)).toEqual({
      ...initialState,
      stocks: initialState,
      pageSize: 4,
      currentPage: action.currentPage,
    });
  });

  it('SET_STOCKS_FINANCIALS', () => {
    const action = {
      type: SET_STOCKS_FINANCIALS,
      financials: ['a', 'b', 'c'],
    };
    expect(stocksReducer(initialState, action)).toEqual({
      ...initialState,
      stocks: { symbol: '', financials: action.financials },
      pageSize: 4,
      currentPage: 1,
    });
  });
});

// TESTS OF ACTIONS

describe('Actions', () => {
  it('setStocksAC', () => {
    expect(setStocksAC(initialState)).toEqual({
      type: SET_STOCKS,
      stocks: initialState,
    });
  });

  it('setCurrentPageAC', () => {
    expect(setCurrentPageAC(1)).toEqual({
      type: SET_CURRENT_PAGE,
      currentPage: 1,
    });
  });

  it('setStocksFinAC', () => {
    expect(setStocksFinAC(['a', 'b', 'c'])).toEqual({
      type: SET_STOCKS_FINANCIALS,
      financials: ['a', 'b', 'c'],
    });
  });
});

describe('API and store', () => {
  it('setStocksAC', () => {
    expect(setStocksAC(initialState)).toEqual({
      type: SET_STOCKS,
      stocks: initialState,
    });
  });

  it('setCurrentPageAC', () => {
    expect(setCurrentPageAC(1)).toEqual({
      type: SET_CURRENT_PAGE,
      currentPage: 1,
    });
  });

  it('setStocksFinAC', () => {
    expect(setStocksFinAC(['a', 'b', 'c'])).toEqual({
      type: SET_STOCKS_FINANCIALS,
      financials: ['a', 'b', 'c'],
    });
  });
});
