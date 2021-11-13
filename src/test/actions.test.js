import {
  initialState,
  SET_CURRENT_PAGE,
  SET_STOCKS,
  SET_STOCKS_FINANCIALS,
  setCurrentPage,
  setStocks,
  setStocksFin,
} from '../redux/stocks-reducer';

describe('Actions', () => {
  it('setStocks', () => {
    expect(setStocks(initialState)).toEqual({
      type: SET_STOCKS,
      stocks: initialState,
    });
  });

  it('setCurrentPage', () => {
    expect(setCurrentPage(1)).toEqual({
      type: SET_CURRENT_PAGE,
      currentPage: 1,
    });
  });

  it('setStocksFin', () => {
    const stocks = ['apple', 'microsoft', 'tesla'];
    expect(setStocksFin(stocks)).toEqual({
      type: SET_STOCKS_FINANCIALS,
      financials: stocks,
    });
  });
});
