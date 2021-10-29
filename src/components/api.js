const STOCKS_COUNT = 12;
const BASE_PATH = 'https://sandbox.iexapis.com/stable';
const ENDPOINT_PATH = '/stock/AAPL/financials/';
const QUERY_PARAM = 'token=';
const API_KEY = 'Tpk_d232dd87ed34407dacc92eee1edbf407';
export const URL = `${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`;