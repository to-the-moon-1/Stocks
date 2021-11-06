import { initialStocks, pageSize, totalPages } from '../consts/initial-state';

export const SET_STOCKS = 'SET_STOCKS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_STOCKS_FINANCIALS = 'SET_STOCKS_FINANCIALS';

export const initialState = {
  stocks: initialStocks,
  pageSize,
  currentPage: 1,
  totalPages,
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCKS: {
      return { ...state, stocks: action.stocks };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_STOCKS_FINANCIALS: {
      return {
        ...state,
        stocks: { ...state.stocks, financials: action.financials },
      };
    }
    default:
      return state;
  }
};

export const setStocksAC = stocks => ({ type: SET_STOCKS, stocks });
export const setCurrentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setStocksFinAC = financials => ({
  type: SET_STOCKS_FINANCIALS,
  financials,
});

export default stocksReducer;
