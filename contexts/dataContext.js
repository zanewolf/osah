// import {createContext, useState,useEffect} from 'react';
// import useSWR from 'swr'
//
// const fetcher = (...args) => fetch(...args).then((res) => res.json())
// const DataContext = createContext();
//
// const DataProvider = ({children}) => {
//
//     const [data, setData] = useState([]);
//
//     const {fetchdata, error } = useSWR('/api/getPeople', fetcher)
//     useEffect(() => {
//         return () => {
//             setData(fetchdata)
//         };
//     }, [fetchdata]);
//
//
//     // const refreshData = async () => {
//     //     try {
//     //         const res = await fetch('/api/getCourses')
//     //         const latestData = await res.json();
//     //         setData(latestData);
//     //     } catch(e) {
//     //         console.error(e)
//     //     }
//     // }
//
//     return (
//         <DataContext.Provider
//             value={{
//                 data,
//                 setData
//             }}
//         >
//             {children}
//         </DataContext.Provider>
//     );
// }
//
// export {DataProvider, DataContext}