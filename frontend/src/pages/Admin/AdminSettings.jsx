// // import React, { useEffect, useState } from 'react'
// // import adminico from '../../assets/Images/admin.svg';
// // import { Key, Pencil } from 'lucide-react'

// // import { UpdateUserByID } from '../../services/api'

// // import toast, { Toaster } from 'react-hot-toast'
// // import { User } from '../../services/user'

// // const AdminSettings = () => {

// //   const [editmodel, setEditmodel] = useState(false)
// //   const [editkeymodel, setEditkeymodel] = useState(false)
// //   const [userdata, setUserdata] = useState({
// //     id: 0,
// //     name: '',
// //     email: '',
// //     // phone: ''
// //   })

// //   const handleChange = (e) => {
// //     e.preventDefault();
// //     setUserdata({ ...userdata, [e.target.id]: e.target.value })
// //   }
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const res = await UpdateUserByID(userdata.id, userdata)
// //     console.log(res.status)
// //     if (res.status === 200) {
// //       setEditmodel(false);
// //       toast.success('Admin Updated !');
// //     }
// //     else {
// //       toast.error("Update Failed !")
// //     }
// //   }
// //   const handleEditClose = (e) => {
// //     e.preventDefault();
// //     fetchUserData()
// //     setEditmodel(false)
// //   }
// //   const fetchUserData = async () => {
// //     const data = await User.getUserData();
// //     return setUserdata({
// //       id: data.id,
// //       name: data.name,
// //     //   phone: data.phone,
// //       email: data.email
// //     });
// //   };
// //   useEffect(() => {
// //     fetchUserData()
// //   }, [])
// //   return (
// //     <>
// //       <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
// //         <div className='h-[40vh] w-[50vw] flex flex-row shadow-md shadow-orange-500/20'>
// //           <div className='w-1/2 h-full flex flex-col'>
// //             <div className='h-1/6 w-full flex justify-end items-center px-3 gap-3'>
// //               <button className='p-2 border-2 border-orange-500/50 hover:border-orange-700 hover:bg-orange-200/40 rounded-full' onClick={() => { setEditmodel(true) }}>
// //                 <Pencil className='text-orange-500' />
// //               </button>
// //               <button className='p-2 border-2 border-orange-500/50 hover:border-orange-700 hover:bg-orange-200/40 rounded-full' onClick={() => { setEditkeymodel(true) }}>
// //                 <Key className='text-orange-500' />
// //               </button>
// //             </div>
// //             <div className='h-3/6 w-full flex justify-center items-center'>
// //               <img src={adminico} alt='user' className='h-28 w-28 border-4 border-orange-500/10 rounded-full shadow-md shadow-orange-500/40' />
// //             </div>
// //             <div className='h-2/6 w-full flex justify-center items-center'>
// //               <p className='text-3xl font-bold text-orange-500'> {userdata.name} </p>
// //             </div>
// //           </div>
// //           <div className='w-1/2 h-full flex justify-center items-center flex-col'>
// //             <div className='h-1/2 w-full flex flex-row border-2 border-orange-100/50'>
// //               <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
// //                 Email
// //               </div>
// //               <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
// //                 {userdata.email}
// //               </div>
// //             </div>
// //             {/* <div className='h-1/2 w-full flex flex-row border-2 border-orange-100/50'>
// //               <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
// //                 Phone
// //               </div>
// //               <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
// //                 {userdata.phone}
// //               </div> */}
// //             {/* </div> */}
// //           </div>
// //         </div>
// //       </div>
// //       {
// //         editmodel && (
// //           <>
// //             <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
// //               <form className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm'>
// //                 <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
// //                   <input type="text" name="" id="name" placeholder='Name' value={userdata.name} className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required onChange={handleChange} />
// //                   <input type="email" name="" id="email" placeholder='Email' value={userdata.email} className='bg-red-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm cursor-not-allowed' required onChange={handleChange} disabled />
// //                   {/* <input type="number" name="" id="phone" placeholder='Phone' value={userdata.phone} className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required onChange={handleChange} /> */}
// //                 </div>
// //                 <div className='h-1/6 w-full flex flex-row justify-center items-center'>
// //                   <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={handleEditClose}> Cancel </button>
// //                   <button className='w-1/2 h-full bg-blue-500 font-bold text-white' onClick={handleSubmit}>Update Profile</button>
// //                 </div>
// //               </form>
// //             </div>
// //           </>
// //         )
// //       }

// //       {
// //         editkeymodel && (
// //           <>
// //             <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
// //               <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm'>
// //                 <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
// //                   <input type="text" name="" id="" placeholder='Old Password' value='' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
// //                   <input type="text" name="" id="" placeholder='New Password' value='' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
// //                   <input type="text" name="" id="" placeholder='Confirm Password' value='' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
// //                 </div>
// //                 <div className='h-1/6 w-full flex flex-row justify-center items-center'>
// //                   <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setEditkeymodel(false) }}> Cancel </button>
// //                   <button className='w-1/2 h-full bg-blue-500 font-bold text-white'>Update Password</button>
// //                 </div>
// //               </div>
// //             </div>
// //           </>
// //         )
// //       }
// //       <Toaster />
// //     </>
// //   )
// // }

// // export default AdminSettings

// import React, { useState } from 'react';
// import adminico from '../../assets/Images/admin.svg';
// import { Key, Pencil } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';

// const AdminSettings = () => {
//   const [editModel, setEditModel] = useState(false);
//   const [editKeyModel, setEditKeyModel] = useState(false);
//   const [userData, setUserData] = useState({
//     id: 1, // Static value or fetched from auth context
//     name: 'Admin', // Static value
//     email: 'admin@gmail.com', // Static value
//   });

//   const handleChange = (e) => {
//     e.preventDefault();
//     setUserData({ ...userData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`/api/admin/updateUser`, userData); // No need to include userId
//       if (response.status === 200) {
//         setEditModel(false);
//         toast.success('Admin Updated!');
//       } else {
//         toast.error('Update Failed!');
//         console.log('Update failed');
//       }
//     } catch (error) {
//       toast.error('Update Failed!');
//       console.log('Update failed', error);
//     }
//   };

//   const handleEditClose = (e) => {
//     e.preventDefault();
//     setEditModel(false);
//   };

//   const handlePasswordChange = async () => {
//     const oldPassword = document.getElementById('old-password').value;
//     const newPassword = document.getElementById('new-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (newPassword !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/admin/changePassword', {
//         oldPassword,
//         newPassword,
//         confirmPassword,
//       });
//       if (response.status === 200) {
//         setEditKeyModel(false);
//         toast.success('Password Updated!');
//       } else {
//         toast.error('Update Failed!');
//         console.log('Password update failed');
//       }
//     } catch (error) {
//       toast.error('Update Failed!');
//       console.log('Password update failed', error);
//     }
//   };

//   return (
//     <>
//       <div className='mt-52'>
//         <div className="h-[40vh] w-[50vw] flex flex-row shadow-md shadow-orange-500/20">
//           <div className="w-1/2 h-full flex flex-col">
//             <div className="h-1/6 w-full flex justify-end items-center px-3 gap-3">
//               <button
//                 className="p-2 border-2 border-orange-500/50 hover:border-orange-700 hover:bg-orange-200/40 rounded-full"
//                 onClick={() => setEditModel(true)}
//               >
//                 <Pencil className="text-orange-500" />
//               </button>
//               <button
//                 className="p-2 border-2 border-orange-500/50 hover:border-orange-700 hover:bg-orange-200/40 rounded-full"
//                 onClick={() => setEditKeyModel(true)}
//               >
//                 <Key className="text-orange-500" />
//               </button>
//             </div>
//             <div className="h-3/6 w-full flex justify-center items-center">
//               <img
//                 src={adminico}
//                 alt="user"
//                 className="h-28 w-28 border-4 border-orange-500/10 rounded-full shadow-md shadow-orange-500/40"
//               />
//             </div>
//             <div className="h-2/6 w-full flex justify-center items-center">
//               <p className="text-3xl font-bold text-orange-500">{userData.name}</p>
//             </div>
//           </div>
//           <div className="w-1/2 h-full flex justify-center items-center flex-col">
//             <div className="h-1/2 w-full flex flex-row border-2 border-orange-100/50">
//               <div className="w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4">
//                 Name
//               </div>
//               <div className="w-2/3 h-full flex items-center justify-start font-semibold px-4">
//                 {userData.name}
//               </div>
//             </div>
//           </div>
//           <div className="w-1/2 h-full flex justify-center items-center flex-col">
//             <div className="h-1/2 w-full flex flex-row border-2 border-orange-100/50">
//               <div className="w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4">
//                 Email
//               </div>
//               <div className="w-2/3 h-full flex items-center justify-start font-semibold px-4">
//                 {userData.email}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {editModel && (
//         <div className="h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0">
//           <form className="h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm">
//             <div className="h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4">
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//                 value={userData.name}
//                 className="bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
//                 required
//                 onChange={handleChange}
//               />
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 value={userData.email}
//                 className="bg-red-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm cursor-not-allowed"
//                 required
//                 onChange={handleChange}
//                 disabled
//               />
//             </div>
//             <div className="h-1/6 w-full flex flex-row justify-center items-center">
//               <button
//                 type="button"
//                 className="w-1/2 h-full bg-red-500 font-bold text-white"
//                 onClick={handleEditClose}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 className="w-1/2 h-full bg-blue-500 font-bold text-white"
//                 onClick={handleSubmit}
//               >
//                 Update Profile
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//       {editKeyModel && (
//         <div className="h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0">
//           <div className="h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm">
//             <div className="h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4">
//               <input
//                 type="password"
//                 id="old-password"
//                 placeholder="Old Password"
//                 className="bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
//               />
//               <input
//                 type="password"
//                 id="new-password"
//                 placeholder="New Password"
//                 className="bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
//               />
//               <input
//                 type="password"
//                 id="confirm-password"
//                 placeholder="Confirm Password"
//                 className="bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
//               />
//             </div>
//             <div className="h-1/6 w-full flex flex-row justify-center items-center">
//               <button
//                 type="button"
//                 className="w-1/2 h-full bg-red-500 font-bold text-white"
//                 onClick={() => setEditKeyModel(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 className="w-1/2 h-full bg-blue-500 font-bold text-white"
//                 onClick={handlePasswordChange}
//               >
//                 Change Password
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Toaster position="top-right" />
//     </>
//   );
// };

// export default AdminSettings;




// import React, { useState } from 'react';
// import { Button, Typography, Grid, TextField, Card, CardContent, IconButton, Avatar } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminDetails = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [adminDetails, setAdminDetails] = useState({
//     name: 'Admin',
//     email: 'admin@gmail.com',
//   });

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     setAdminDetails({ ...adminDetails, [e.target.id]: e.target.value });
//   };

//   const handleSave = () => {
//     toast.success('Admin details updated successfully');
//     setIsEditing(false);
//   };

//   return (
//     <div className="p-6 mt-14 dark:text-white">
//       <Card className="dark:bg-gray-800 dark:text-white rounded-lg shadow-xl">
//         <CardContent>
//           <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
//             <Avatar
//               src="https://via.placeholder.com/150" // Replace with your avatar URL
//               alt="Admin Avatar"
//               sx={{ width: 120, height: 120 }}
//               className="border-4 border-white"
//             />
//             <div className="ml-6">
//               <Typography variant="h4" className="font-bold text-white">
//                 Admin Details
//               </Typography>
//               <IconButton
//                 onClick={handleEditClick}
//                 color="primary"
//                 className="text-white mt-2"
//               >
//                 <EditIcon />
//               </IconButton>
//             </div>
//           </div>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 value={adminDetails.name}
//                 onChange={handleChange}
//                 id="name"
//                 disabled={!isEditing}
//                 className="dark:bg-gray-700 dark:text-white"
//                 InputProps={{
//                   style: { borderRadius: 8 },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={adminDetails.email}
//                 onChange={handleChange}
//                 id="email"
//                 disabled={!isEditing}
//                 className="dark:bg-gray-700 dark:text-white"
//                 InputProps={{
//                   style: { borderRadius: 8 },
//                 }}
//               />
//             </Grid>
//           </Grid>
//           {isEditing && (
//             <div className="mt-6 flex justify-end">
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleSave}
//                 style={{ backgroundColor: '#f50057', color: 'white', fontWeight: 'bold' }}
//               >
//                 Save
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminDetails;


import React, { useState } from 'react';
import { Button, Typography, Grid, Card, CardContent, IconButton, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminIcon from '../../assets/Images/admin.svg'; // Corrected the import statement

const AdminDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    name: 'Admin',
    email: 'admin@gmail.com',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.id]: e.target.value });
  };

  const handleSave = () => {
    toast.success('Admin details updated successfully');
    setIsEditing(false);
  };

  return (
    <div className="p-6 mt-28 dark:text-white -ml-48">
      <Card className="dark:bg-gray-800 dark:text-white rounded-lg shadow-xl">
        <CardContent>
          <div className="flex items-center mb-6 p-4 bg-blue-300 rounded-lg">
            <Avatar
              src={AdminIcon} // Corrected the variable name for the image
              alt="Admin Avatar"
              sx={{ width: 120, height: 120 }}
              className="border-4 border-white"
            />
            <div className="ml-6">
              <Typography variant="h4" className="font-bold text-white">
                Admin Details
              </Typography>
              <IconButton
                onClick={handleEditClick}
                color="primary"
                className="text-white mt-2"
              >
                <EditIcon />
              </IconButton>
            </div>
          </div>
          <div className="mt-4">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold text-lg">
                  Name
                  <input
                    type="text"
                    id="name"
                    value={adminDetails.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-lg"
                  />
                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold text-lg">
                  Email
                  <input
                    type="email"
                    id="email"
                    value={adminDetails.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-lg"
                  />
                </label>
              </Grid>
            </Grid>
          </div>
          {isEditing && (
            <div className="mt-6 flex justify-end">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSave}
                style={{ backgroundColor: '#f50057', color: 'white', fontWeight: 'bold' }}
              >
                Save
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default AdminDetails;
