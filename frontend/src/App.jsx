
// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Shared/Home'
// import Login from './pages/Shared/Login'
// import Register from './pages/Shared/Register'
// import UserLayout from './layout/UserLayout'
// import UserDashboard from './pages/User/UserDashboard'
// import AdminLayout from './layout/AdminLayout'
// import AdminDashboard from './pages/Admin/AdminDashboard'
// // import NotFound from './pages/Shared/NotFound'
// import HomeLayout from './layout/HomeLayout'
// import CourseList from './CourseList'
// import CoursesDetails from './CoursesDetails'
// const App = () => {
//     return (
//         <>
//              <BrowserRouter>
//                 <Routes>
//                     <Route element={<HomeLayout />}>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/signup' element={<Register />} />
//                         <Route path='/signin' element={<Login />} />
//                         {/* <Route path='/courses' element={<courses/>}/> */}
//                         <Route path="/courses" element={<CourseList />} />
//                         <Route path="/course/:id" element={<CoursesDetails />} />
//                     </Route> 

//                     <Route element={<UserLayout />}>
//                         <Route path='/dashboard' element={<UserDashboard />} />
//                     </Route>
// {/*                     
//                     <Route element={<AdminLayout />}>
//                         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//                     </Route> */}

//                     {/* <Route path='*' element={<NotFound />} /> */}
//                 </Routes>
//             </BrowserRouter>

//         </>
//     )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Shared/Home';
import Login from './pages/Shared/Login';
import Register from './pages/Shared/Register';
import UserLayout from './layout/UserLayout';
import UserDashboard from './pages/User/UserDashboard';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HomeLayout from './layout/HomeLayout';
import CourseList from './CourseList';
import CoursesDetails from './CoursesDetails';
import TutorLayout from './layout/TutorLayout';
import TutorDashboard from './pages/Tutor/TutorDashboard';
// import NotFound from './pages/Shared/NotFound'; // Uncomment if you have a NotFound page

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/signin' element={<Login />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/course/:id" element={<CoursesDetails />} />
                </Route>

                <Route element={<UserLayout />}>
                    <Route path='/dashboard' element={<UserDashboard />} />
                </Route>

                <Route element={<AdminLayout />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />} />
                </Route>
                <Route element={<TutorLayout />}>
                    <Route path='/tutor/dashboard' element={<TutorDashboard />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default App;

{/* Uncomment if you have a NotFound page */}
{/* <Route path='*' element={<NotFound />} /> */}