// import React from "react";
// import Dashboard from "./indexData";
// import * as axios from 'axios';
//
// // https://sandbox.iexapis.com/stable/stock/AAPL/financials/12?token=Tpk_d232dd87ed34407dacc92eee1edbf407
//
// const STOCKS_COUNT = 12;
// const BASE_PATH = 'https://sandbox.iexapis.com/stable';
// const ENDPOINT_PATH = '/stock/AAPL/financials/';
// const QUERY_PARAM = 'token=';
// const API_KEY = 'Tpk_d232dd87ed34407dacc92eee1edbf407';
// export const URL = `${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`;
//
// axios.get(URL).then(response => {
//     debugger
// })
//
// const data = {
//     symbol: 'APPL',
//     financials: [
//         { reportDate: '15-06-2020', totalAssets: 1324324324, totalCash: 434234234234, totalDebt: 34322343 },
//         { reportDate: '16-06-2020', totalAssets: 3244324, totalCash: 234, totalDebt: 324432423 },
//         { reportDate: '17-06-2020', totalAssets: 324324, totalCash: 2342, totalDebt: 35234 },
//         { reportDate: '18-06-2020', totalAssets: 5454535, totalCash: 4342543234234234, totalDebt: 456456546 },
//         { reportDate: '19-06-2020', totalAssets: 23234, totalCash: 435, totalDebt: 234423235 },
//         { reportDate: '20-06-2020', totalAssets: 43543, totalCash: 5, totalDebt: 345345435435 },
//         { reportDate: '21-06-2020', totalAssets: 345323, totalCash: 324, totalDebt: 65765 },
//         { reportDate: '22-06-2020', totalAssets: 324342, totalCash: 435, totalDebt: 56564 },
//         { reportDate: '23-06-2020', totalAssets: 5435, totalCash: 23445, totalDebt: 234545 },
//         { reportDate: '24-06-2020', totalAssets: 243432423, totalCash: 34433, totalDebt: 3232234 },
//         { reportDate: '25-06-2020', totalAssets: 3253245, totalCash: 21312, totalDebt: 34343434 },
//         { reportDate: '26-06-2020', totalAssets: 1324332432424324, totalCash: 125443, totalDebt: 5553443 }
//     ]
// };
//
// export default props => (
//     <div>
//         {/*<Dashboard data={data} />*/}
//     </div>
// );