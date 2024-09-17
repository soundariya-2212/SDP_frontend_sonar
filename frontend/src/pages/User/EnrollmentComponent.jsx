// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   CircularProgress,
// //   Button,
// //   Snackbar,
// //   Alert
// // } from '@mui/material';

// // const EnrollmentComponent = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses');
// //         setCourses(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching course data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     const fetchUserId = () => {
// //       // Retrieve user ID from localStorage
// //       const id = localStorage.getItem('userId');
// //       if (id) {
// //         setUserId(id);
// //       } else {
// //         console.warn('User ID not found in local storage');
// //       }
// //     };

// //     fetchCourses();
// //     fetchUserId();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     if (userId) {
// //       try {
// //         await axios.post('/enroll', null, {
// //           params: {
// //             courseID: courseId,
// //             userID: userId
// //           }
// //         });

// //         setSnackbarMessage('Enrollment successful!');
// //         setSnackbarSeverity('success');
// //       } catch (error) {
// //         setSnackbarMessage('Error enrolling in course.');
// //         setSnackbarSeverity('error');
// //         console.error('Error enrolling in course:', error.response ? error.response.data : error.message);
// //       } finally {
// //         setOpenSnackbar(true);
// //       }
// //     } else {
// //       setSnackbarMessage('User not logged in.');
// //       setSnackbarSeverity('error');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false);
// //   };

// //   if (loading) {
// //     return <CircularProgress />;
// //   }

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <Typography variant="h4" gutterBottom>Available Courses</Typography>
      
// //       <TableContainer component={Paper} style={{ marginTop: '16px' }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Category</TableCell>
// //               <TableCell>Difficulty Level</TableCell>
// //               <TableCell>Syllabus</TableCell>
// //               <TableCell>Schedule</TableCell>
// //               <TableCell>Prerequisites</TableCell>
// //               <TableCell>Action</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {courses.map((course) => (
// //               <TableRow key={course.id}>
// //                 <TableCell>{course.title}</TableCell>
// //                 <TableCell>{course.category}</TableCell>
// //                 <TableCell>{course.difficultyLevel}</TableCell>
// //                 <TableCell>{course.syllabus}</TableCell>
// //                 <TableCell>{course.schedule}</TableCell>
// //                 <TableCell>{course.prerequisites}</TableCell>
// //                 <TableCell>
// //                   <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={() => handleEnroll(course.id)}
// //                     style={{ marginTop: '8px' }}
// //                   >
// //                     Enroll
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
// //         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default EnrollmentComponent;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   CircularProgress,
// //   Button,
// //   Snackbar,
// //   Alert
// // } from '@mui/material';

// // const EnrollmentComponent = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses');
// //         setCourses(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching course data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     const fetchUserId = () => {
// //       // Retrieve user ID from localStorage
// //       const id = localStorage.getItem('userId');
// //       if (id) {
// //         setUserId(id);
// //       } else {
// //         console.warn('User ID not found in local storage');
// //       }
// //     };

// //     fetchCourses();
// //     fetchUserId();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     if (userId) {
// //       try {
// //         await axios.post('http://localhost:8080/enroll', null, {
// //           params: {
// //             courseID: courseId,
// //             userID: userId
// //           }
// //         });
// //         setSnackbarMessage('Enrollment successful!');
// //         setSnackbarSeverity('success');
// //       } catch (error) {
// //         setSnackbarMessage('Error enrolling in course.');
// //         setSnackbarSeverity('error');
// //         console.error('Error enrolling in course:', error.response ? error.response.data : error.message);
// //       } finally {
// //         setOpenSnackbar(true);
// //       }
// //     } else {
// //       setSnackbarMessage('User not logged in.');
// //       setSnackbarSeverity('error');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false);
// //   };

// //   if (loading) {
// //     return <CircularProgress />;
// //   }

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <Typography variant="h4" gutterBottom>Available Courses</Typography>
      
// //       <TableContainer component={Paper} style={{ marginTop: '16px' }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Category</TableCell>
// //               <TableCell>Difficulty Level</TableCell>
// //               <TableCell>Syllabus</TableCell>
// //               <TableCell>Schedule</TableCell>
// //               <TableCell>Prerequisites</TableCell>
// //               <TableCell>Action</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {courses.map((course) => (
// //               <TableRow key={course.id}>
// //                 <TableCell>{course.title}</TableCell>
// //                 <TableCell>{course.category}</TableCell>
// //                 <TableCell>{course.difficultyLevel}</TableCell>
// //                 <TableCell>{course.syllabus}</TableCell>
// //                 <TableCell>{course.schedule}</TableCell>
// //                 <TableCell>{course.prerequisites}</TableCell>
// //                 <TableCell>
// //                   <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={() => handleEnroll(course.id)}
// //                     style={{ marginTop: '8px' }}
// //                   >
// //                     Enroll
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
// //         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default EnrollmentComponent;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   CircularProgress,
// //   Button,
// //   Snackbar,
// //   Alert
// // } from '@mui/material';

// // const EnrollmentComponent = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses'); // Adjust endpoint as needed
// //         setCourses(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching course data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     const fetchUserId = () => {
// //       const id = localStorage.getItem('userId'); // Replace with actual method to get user ID
// //       if (id) {
// //         setUserId(id);
// //       }
// //     };

// //     fetchCourses();
// //     fetchUserId();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     if (userId) {
// //       try {
// //         await axios.put('/enroll/status', null, {
// //           params: {
// //             courseID: courseId,
// //             userID: userId,
// //             isEnrolled: true
// //           }
// //         });

// //         setSnackbarMessage('Enrollment successful!');
// //         setSnackbarSeverity('success');
// //       } catch (error) {
// //         setSnackbarMessage('Error enrolling in course.');
// //         setSnackbarSeverity('error');
// //         console.error('Error enrolling in course:', error.response ? error.response.data : error.message);
// //       } finally {
// //         setOpenSnackbar(true);
// //       }
// //     } else {
// //       setSnackbarMessage('User not logged in.');
// //       setSnackbarSeverity('error');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false);
// //   };

// //   if (loading) {
// //     return <CircularProgress />;
// //   }

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <Typography variant="h4" gutterBottom>Available Courses</Typography>
      
// //       <TableContainer component={Paper} style={{ marginTop: '16px' }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Category</TableCell>
// //               <TableCell>Difficulty Level</TableCell>
// //               <TableCell>Syllabus</TableCell>
// //               <TableCell>Schedule</TableCell>
// //               <TableCell>Prerequisites</TableCell>
// //               <TableCell>Action</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {courses.map((course) => (
// //               <TableRow key={course.id}>
// //                 <TableCell>{course.title}</TableCell>
// //                 <TableCell>{course.category}</TableCell>
// //                 <TableCell>{course.difficultyLevel}</TableCell>
// //                 <TableCell>{course.syllabus}</TableCell>
// //                 <TableCell>{course.schedule}</TableCell>
// //                 <TableCell>{course.prerequisites}</TableCell>
// //                 <TableCell>
// //                   <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={() => handleEnroll(course.id)}
// //                     style={{ marginTop: '8px' }}
// //                   >
// //                     Enroll
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
// //         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default EnrollmentComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

// const EnrollmentComponent = () => {
//   const [courses, setCourses] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
//   const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

//   useEffect(() => {
//     // Fetch courses from the backend
//     axios.get('http://localhost:8080/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const handleClickOpen = (course) => {
//     setSelectedCourse(course);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedCourse(null);
//   };

//   const handleEnroll = () => {
//     axios.post('http://localhost:8080/enroll', null, {
//       params: {
//         courseId: selectedCourse.id,
//         userId: userId,
//         userEmail: userEmail
//       }
//     })
//     .then(response => {
//       alert('Enrollment successful');
//       setOpen(false);
//       setSelectedCourse(null);
//     })
//     .catch(error => {
//       console.error('Error enrolling in course:', error);
//       alert('Failed to enroll in course');
//     });
//   };

//   return (
//     <div className='mt-28 -ml-40'>
//       <Typography variant="h6">ENROLLMENTS</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Course Title</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {courses.map(course => (
//               <TableRow key={course.id}>
//                 <TableCell>{course.title}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" onClick={() => handleClickOpen(course)}>
//                     Enroll
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Confirm Enrollment</DialogTitle>
//         <DialogContent>
//           {selectedCourse && (
//             <div>
//               <p>Do you want to enroll in the course: <strong>{selectedCourse.title}</strong>?</p>
//             </div>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleEnroll} color="primary">
//             Enroll
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default EnrollmentComponent;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';

const EnrollmentComponent = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('http://localhost:8080/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleClickOpen = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

  const handleEnroll = () => {
    axios.post('http://localhost:8080/enroll', null, {
      params: {
        courseId: selectedCourse.id,
        userId: userId,
        userEmail: userEmail
      }
    })
    .then(response => {
      alert('Enrollment successful');
      setOpen(false);
      setSelectedCourse(null);
    })
    .catch(error => {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll in course');
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-24 -ml-52">
      <Typography variant="h6" gutterBottom className="text-2xl font-bold text-gray-800 mb-3">
        Enroll in Courses
      </Typography>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200">
          <Typography variant="h6" className="text-xl font-semibold text-gray-800">
            Courses Available
          </Typography>
        </div>
        <TableContainer component={Paper} className="overflow-hidden">
          <Table>
            <TableHead className="bg-blue-300 text-black">
              <TableRow>
                <TableCell className="text-lg font-bold uppercase border-r border-blue-300">Course Title</TableCell>
                <TableCell className="text-lg font-bold uppercase">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <TableRow key={course.id} className="hover:bg-blue-50">
                    <TableCell className="px-6 py-4 text-base font-medium text-gray-900 border-r border-gray-300">{course.title}</TableCell>
                    <TableCell className="px-6 py-4">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#93c5fd', // Tailwind blue-300 equivalent
                          color: '#000000', // Text color
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          '&:hover': {
                            backgroundColor: '#60a5fa' // Tailwind blue-400 equivalent
                          }
                        }}
                        onClick={() => handleClickOpen(course)}
                      >
                        Enroll
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="2" className="px-6 py-4 text-center text-sm text-gray-500">No courses available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { borderRadius: '12px', maxWidth: '600px' } // Custom dialog box styles
        }}
      >
        <DialogTitle className="bg-blue-300 text-black text-xl font-bold">Confirm Enrollment</DialogTitle>
        <DialogContent className="bg-blue-50 text-gray-800">
          {selectedCourse && (
            <Typography>
              Do you want to enroll in the course: <strong>{selectedCourse.title}</strong>?
            </Typography>
          )}
        </DialogContent>
        <DialogActions className="bg-gray-100 border-t border-gray-300">
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleEnroll} color="primary">Enroll</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EnrollmentComponent;
