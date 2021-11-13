export const baseStocks = { symbol: '', financials: [] };

export const totalPages = 12;

export const pageSize = 4;

export const headTable = [
  { name: 'Report date' },
  { name: 'Total assets' },
  { name: 'Total cash' },
  { name: 'Total debt' },
];

// API

const BASE_PATH = 'https://sandbox.iexapis.com/stable';

const ENDPOINT_PATH = '/stock/AAPL/financials/';
const QUERY_PARAM = 'token=';
const API_KEY = 'Tpk_d232dd87ed34407dacc92eee1edbf407';

const PARAMS = `${ENDPOINT_PATH}${totalPages}?${QUERY_PARAM}${API_KEY}`;

export const URL = `${BASE_PATH}${PARAMS}`;
