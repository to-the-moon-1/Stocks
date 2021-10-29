// import React from "react";
// import './table.css';
//
// const StocksComponent = (props) => {
//     let pagesCount = Math.ceil(props.totalCount / props.pageSize);
//
//     let pages = [];
//     for (let i = 0; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//     console.log(props.stocks)
//     return <div className='main-content'>
//         <h1>Symbol: {props.stocks.symbol}</h1>
//         <table>
//             <thead>
//             <tr>
//                 <td className='col head'>#</td>
//                 <td className='col head'>Report date</td>
//                 <td className='col head'>Total assets</td>
//                 <td className='col head'>Total cash</td>
//                 <td className='col head'>Total debt</td>
//             </tr>
//             </thead>
//             {props.stocks.financials.map((item, index) => (
//                 <tbody key={index}>
//                 <tr>
//                     <td className='col index'>{index + 1}</td>
//                     <td className='col'>{item.reportDate}</td>
//                     <td className='col'>{item.totalAssets}</td>
//                     <td className='col'>{item.totalCash}</td>
//                     <td className='col'>{item.totalDebt}</td>
//                 </tr>
//                 </tbody>
//             ))}
//         </table>
//         <div>
//             {pages.map((page, index) => {
//                 return <span key={index} className={props.currentPage === page ? 'selectedPage' : ' '}
//                              onClick={(e) => {props.onPageChanged(page)}}>{page}</span>
//             })}
//         </div>
//     </div>
// }
//
// export default StocksComponent;