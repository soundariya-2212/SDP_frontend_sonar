// import React from 'react'

// const Leftbar = () => {

//   const AdminLinks=[
//     {
//         title:'Dashboard',
//         link:'admin/dashboard'
//         // icon:
//     },
//     {
//         title:'Users',
//         link:'/admin/users'
//         // icon:
//     }
// ]
//   return (
//     <div className='h-screen w-1/6 flex justify-center items-center flex-col'>
//         <div className='h-5/6 w-full flex justify-start items-center py-5'>
//           {
//             AdminLinks.map((data,index)=>
//               <li key={index}>
//                   <NavLink to={data.link} className='list-none w-full text-left px-3 py-8 '>{data.title}</NavLink>
//               </li>
//             )
//           }
//         </div>
//         <div className='h-5/6 w-full flex justify-start items-center py-5'>
//             logout
//         </div>
//     </div>
//   )
// }

// export default Leftbar