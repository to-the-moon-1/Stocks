// import React from "react";
// import "./table.css"
//
// const Dashboard = (props) => {
//     console.log(props.data)
//
//     const renderStocks = () => {
//         return props.data.financials.map((item, index) => (
//             <tbody>
//                 <tr>
//                     <td className='col index'>{index + 1}</td>
//                     <td className='col'>{item.reportDate}</td>
//                     <td className='col'>{item.totalAssets}</td>
//                     <td className='col'>{item.totalCash}</td>
//                     <td className='col'>{item.totalDebt}</td>
//                 </tr>
//             </tbody>
//         ))
//     }
//
//     return <div className='main-content'>
//         <h1>Symbol: {props.data.symbol}</h1>
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
//                 {renderStocks()}
//         </table>
//     </div>
// }
//
// export default Dashboard;