// import React, { useEffect, useState } from "react";
// // import { Home } from "./Home";
// import "./PreLoader.scss";

// function PreLoader() {
//   const [data, setData] = useState([]);
//   const [loading, setloading] = useState(undefined);
//   const [completed, setcompleted] = useState(undefined);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           setData(json);
//           setloading(true);

//           setTimeout(() => {
//             setcompleted(true);
//           }, 1000);
//         });
//     }, 4000);
//   }, []);

//   return (
//     <>
//       {!completed ? (
//         <>
//           {!loading ? (
//             <div className="spinner">
//               <span>Loading...</span>
//               <div className="half-spinner"></div>
//             </div>
//           ) : (
//             <div className="completed">&#x2713;</div>
//           )}
//         </>
//       ) : (
//         <>
//           <h1>Your Data</h1>
//         </>
//       )}
//     </>
//   );
// }

// export default PreLoader;
