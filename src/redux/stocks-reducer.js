import { baseStocks, pageSize, totalPages } from '../consts/initial-state';

export const SET_STOCKS = 'SET_STOCKS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_STOCKS_FINANCIALS = 'SET_STOCKS_FINANCIALS';

export const initialState = {
  stocks: baseStocks,
  pageSize,
  currentPage: 1,
  totalPages,
};

const stocksReducer = (
  state = initialState,
  { type, stocks, currentPage, financials },
) => {
  switch (type) {
    case SET_STOCKS: {
      return { ...state, stocks };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage };
    }
    case SET_STOCKS_FINANCIALS: {
      return { ...state, stocks: { ...state.stocks, financials } };
    }
    default:
      return state;
  }
};

export const setStocks = stocks => ({ type: SET_STOCKS, stocks });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setStocksFin = financials => ({
  type: SET_STOCKS_FINANCIALS,
  financials,
});

export default stocksReducer;
