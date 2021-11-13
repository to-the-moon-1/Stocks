import stocksReducer, {
  initialState,
  SET_CURRENT_PAGE,
  SET_STOCKS,
  SET_STOCKS_FINANCIALS,
} from '../redux/stocks-reducer';

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
      stocks: { symbol: '', financials: [] },
      pageSize: 4,
      currentPage: action.currentPage,
    });
  });

  it('SET_STOCKS_FINANCIALS', () => {
    const action = {
      type: SET_STOCKS_FINANCIALS,
      financials: ['apple', 'microsoft', 'tesla'],
    };
    expect(stocksReducer(initialState, action)).toEqual({
      ...initialState,
      stocks: { symbol: '', financials: action.financials },
      pageSize: 4,
      currentPage: 1,
    });
  });
});
