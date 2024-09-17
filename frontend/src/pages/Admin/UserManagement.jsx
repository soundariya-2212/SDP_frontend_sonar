// import React, { useState } from 'react';
// import { Button, TextField, Grid, Card, CardContent, Typography, IconButton, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { toast, ToastContainer } from 'react-toastify';
// import { SignUp } from '../../services/api';
// function UserManagement() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState({ name: '', email: '',password:'',
//      role: '' });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [registerData, setRegisterData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: '',
//   });
//   // const navigate = useNavigate();
//   const handleAddUser = () => {
//     // Check if any field is empty
//     if (!user.name || !user.email || !user.type||!user.role) {
//       alert("All fields are required");
//       return;
//     }

//     if (editingIndex !== null) {
//       const updatedUsers = users.map((u, index) =>
//         index === editingIndex ? user : u
//       );
//       setUsers(updatedUsers);
//       setEditingIndex(null);
//     } else {
//       setUsers([...users, user]);
//     }
//     setUser({ name: '', email: '', type: '' });
//   };

//   const handleEditUser = (index) => {
//     setUser(users[index]);
//     setEditingIndex(index);
//   };

//   const handleDeleteUser = (index) => {
//     setUsers(users.filter((_, i) => i !== index));
//   };

//   const handleChange = (e) => {
//     setRegisterData({ ...registerData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await SignUp(registerData.name, registerData.email, registerData.password, registerData.role);

//     if (res.message === 'An error occurred during registration.') {
//       toast.error("user not added");
//     } else {
//       toast.success(res.message || "User added Successfully");
//     }
//   };
//   return (
//     <>
//     <div className="p-6 dark:text-white mt-14">
//       <Typography variant="h5" style={{ marginLeft: '-130px' }}>Manage Users</Typography>
//       <Card className="m-8 dark:bg-black dark:text-white -ml-40">
//         <CardContent>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 value={user.name}
//                 onChange={(e) => setUser({ ...user, name: e.target.value })}
//                 className="dark:bg-white dark:text-black"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={user.email}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 className="dark:bg-white dark:text-black"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Password"
//                 value={user.password}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 className="dark:bg-white dark:text-black"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <FormControl fullWidth required>
//                 <InputLabel>Role</InputLabel>
//                 <Select
//                   value={user.role}
//                   onChange={(e) => setUser({ ...user, type: e.target.value })}
//                   className="dark:bg-white dark:text-black"
//                 >
//                   <MenuItem value="student">Student</MenuItem>
//                   <MenuItem value="instructor">Instructor</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={handleAddUser}
//             style={{ marginTop: '24px', marginBottom: '44px', backgroundColor: '#93c5fd', color: 'black', fontWeight: 'bold' }}
//           >
//             {editingIndex !== null ? 'Update User' : 'Add User'}
//           </Button>
//         </CardContent>
//       </Card>
//       <Card className="dark:bg-teal-800 dark:text-white -ml-40">
//         <CardContent>
//           <Typography variant="h6" className="mb-4">User List</Typography>
//           {users.length === 0 ? (
//             <Typography>No users found</Typography>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200 dark:divide-white">
//                 <thead className="bg-gray-50 dark:bg-teal-700">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200 dark:bg-teal-800">
//                   {users.map((user, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.name}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">{user.email}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">{user.type}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <IconButton onClick={() => handleEditUser(index)} color="primary">
//                           <EditIcon />
//                         </IconButton>
//                         <IconButton onClick={() => handleDeleteUser(index)} color="secondary">
//                           <DeleteIcon />
//                         </IconButton>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//           <ToastContainer/>
//     </>
//   );
// }

// export default UserManagement;



import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', role: '' });
  const [editingUserId, setEditingUserId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/users/all');
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRegisterData({ ...registerData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.role) {
      toast.error("All fields are required");
      return;
    }
    
    try {
      if (editingUserId !== null) {
        await axios.put(`http://localhost:8080/api/v1/users/update/${editingUserId}`, registerData);
        toast.success("User updated successfully");
      } else {
        await axios.post('http://localhost:8080/api/v1/auth/register', registerData);
        toast.success("User added successfully");
      }
      fetchUsers();
      setRegisterData({ name: '', email: '', password: '', role: '' });
      setEditingUserId(null);
      setOpenDialog(false);
    } catch (error) {
      toast.error("Failed to save user");
    }
  };

  const handleEditUser = (user) => {
    setRegisterData(user);
    setEditingUserId(user.id);
    setOpenDialog(true);
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/users/delete/${id}`);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const openAddUserDialog = () => {
    setEditingUserId(null);
    setRegisterData({ name: '', email: '', password: '', role: '' });
    setOpenDialog(true);
  };

  return (
    <>
      <div className="p-6 dark:text-white mt-14">
        <Typography 
          variant="h5" 
          className="font-bold mb-4 text-gray-900 dark:text-white" style={{marginLeft:'-190px'}}
        >
          Manage Users
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddUserDialog}
          style={{ backgroundColor: '#93c5fd', color: 'black', fontWeight: 'bold',marginLeft:'-190px' }}
        >
          Add User
        </Button>
        <div className="mt-8 -ml-52">
          <Card className="dark:bg-black dark:text-white rounded-lg shadow-md">
            <CardContent>
              <Typography variant="h6" className="mb-4 font-extrabold text-black dark:text-white">User List</Typography>
              {users.length === 0 ? (
                <Typography>No users found</Typography>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-white">
                    <thead className="bg-blue-600 dark:bg-teal-800 text-white">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id} className={`text-sm ${index % 2 === 0 ? 'bg-[#93c5fd] dark:bg-[#93c5fd]' : 'bg-white dark:bg-teal-800'}`}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-white">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-white">{user.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <IconButton onClick={() => handleEditUser(user)} color="primary">
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDeleteUser(user.id)} color="secondary">
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="sm"
          fullWidth
          className="dark:bg-gray-900 dark:text-white"
        >
          <DialogTitle className="bg-blue-600 text-white dark:bg-teal-700">
            {editingUserId !== null ? 'Edit User' : 'Add User'}
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit} className="p-4">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={registerData.name}
                    onChange={handleChange}
                    id="name"
                    required
                    className="dark:bg-gray-800 dark:text-white"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={registerData.email}
                    onChange={handleChange}
                    id="email"
                    required
                    className="dark:bg-gray-800 dark:text-white"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={registerData.password}
                    onChange={handleChange}
                    id="password"
                    required
                    className="dark:bg-gray-800 dark:text-white"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Role</InputLabel>
                    <Select
                      value={registerData.role}
                      onChange={handleRoleChange}
                      id="role"
                      className="dark:bg-gray-800 dark:text-white"
                    >
                      <MenuItem value="STUDENT">STUDENT</MenuItem>
                      <MenuItem value="INSTRUCTOR">INSTRUCTOR</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions className="bg-gray-100 dark:bg-gray-800">
            <Button onClick={() => setOpenDialog(false)} color="primary" className="text-gray-700 dark:text-gray-300">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              style={{ backgroundColor: '#93c5fd', color: 'black', fontWeight: 'bold' }}
            >
              {editingUserId !== null ? 'Update User' : 'Add User'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserManagement;
