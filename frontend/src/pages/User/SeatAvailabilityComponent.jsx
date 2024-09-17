// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   CircularProgress,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Snackbar,
//   Alert
// } from '@mui/material';


//     const sampleSeatData = [
//         { id: 1, course: 'React Basics', totalSeats: 30, availableSeats: 10 },
//         { id: 2, course: 'Advanced JavaScript', totalSeats: 25, availableSeats: 5 },
//         { id: 3, course: 'CSS Flexbox', totalSeats: 20, availableSeats: 15 },
//         { id: 4, course: 'Introduction to TypeScript', totalSeats: 28, availableSeats: 8 },
//         { id: 5, course: 'Node.js and Express', totalSeats: 32, availableSeats: 12 },
//         { id: 6, course: 'Frontend Frameworks', totalSeats: 22, availableSeats: 7 },
//         { id: 7, course: 'Database Management Systems', totalSeats: 18, availableSeats: 4 },
//         { id: 8, course: 'Version Control with Git', totalSeats: 26, availableSeats: 11 },
//         { id: 9, course: 'Python for Data Science', totalSeats: 30, availableSeats: 6 },
//         { id: 10, course: 'Introduction to Machine Learning', totalSeats: 24, availableSeats: 9 },
//         { id: 11, course: 'UI/UX Design Principles', totalSeats: 27, availableSeats: 13 },
//         { id: 12, course: 'Software Testing and QA', totalSeats: 19, availableSeats: 3 },
//         { id: 13, course: 'Agile Project Management', totalSeats: 21, availableSeats: 10 },
//         { id: 14, course: 'Cloud Computing with AWS', totalSeats: 29, availableSeats: 14 },
//         { id: 15, course: 'Cybersecurity Fundamentals', totalSeats: 17, availableSeats: 2 },
//       ];
    

// const SeatAvailabilityComponent = () => {
//   const [seatData, setSeatData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [enrollmentName, setEnrollmentName] = useState('');
//   const [enrollmentEmail, setEnrollmentEmail] = useState('');
//   const [openForm, setOpenForm] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     // Simulate fetching data
//     setTimeout(() => {
//       setSeatData(sampleSeatData);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const handleEnroll = (course) => {
//     setSelectedCourse(course);
//     setOpenForm(true);
//   };

//   const handleFormSubmit = () => {
//     if (selectedCourse && enrollmentName && enrollmentEmail) {
//       setSeatData((prevData) =>
//         prevData.map((course) =>
//           course.id === selectedCourse.id && course.availableSeats > 0
//             ? { ...course, availableSeats: course.availableSeats - 1 }
//             : course
//         )
//       );
//       setSnackbarMessage('Enrollment successful!');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);
//       setOpenForm(false);
//       // Clear form fields
//       setEnrollmentName('');
//       setEnrollmentEmail('');
//       setSelectedCourse(null); // Reset selected course
//     } else {
//       setSnackbarMessage('Please fill in all fields.');
//       setSnackbarSeverity('error');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return (
//     <div style={{ padding: '16px', marginLeft: '-170px', marginTop: '45px' }}>
//       <Typography variant="h4" gutterBottom style={{ color: '#000' }}>Seat Availability</Typography>
      
//       <TableContainer component={Paper} style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Course</TableCell>
//               <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Total Seats</TableCell>
//               <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Available Seats</TableCell>
//               <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {seatData.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell style={{ border: '1px solid #ddd', color: '#000' }}>{row.course}</TableCell>
//                 <TableCell style={{ border: '1px solid #ddd', color: '#000' }}>{row.totalSeats}</TableCell>
//                 <TableCell style={{ border: '1px solid #ddd', color: '#000' }}>{row.availableSeats}</TableCell>
//                 <TableCell style={{ border: '1px solid #ddd' }}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleEnroll(row)}
//                     disabled={row.availableSeats === 0}
//                   >
//                     Enroll
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Enrollment Form Dialog */}
//       <Dialog open={openForm} onClose={() => setOpenForm(false)}>
//         <DialogTitle style={{ color: '#000' }}>Enroll in Course</DialogTitle>
//         <DialogContent>
//           {selectedCourse && (
//             <Typography variant="h6" gutterBottom style={{ color: '#000' }}>
//               Enrolling in: {selectedCourse.course}
//             </Typography>
//           )}
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             type="text"
//             fullWidth
//             value={enrollmentName}
//             onChange={(e) => setEnrollmentName(e.target.value)}
//             InputProps={{ style: { color: '#000' } }}
//           />
//           <TextField
//             margin="dense"
//             label="Email"
//             type="email"
//             fullWidth
//             value={enrollmentEmail}
//             onChange={(e) => setEnrollmentEmail(e.target.value)}
//             InputProps={{ style: { color: '#000' } }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenForm(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleFormSubmit} color="secondary">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for Feedback */}
//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default SeatAvailabilityComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserDashboard = () => {
//   const [materials, setMaterials] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch materials to display in the dashboard
//   useEffect(() => {
//     const fetchMaterials = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/v1/learning-materials/materials');
//         setMaterials(response.data);
//       } catch (error) {
//         console.error('Error fetching materials:', error);
//         setError('Error fetching materials');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMaterials();
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-4 -ml-36">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Materials</h2>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
//               {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th> */}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {materials.length > 0 ? (
//               materials.map((material) => (
//                 <tr key={material.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{material.title}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <a
//                       href={material.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       Watch Video
//                     </a>
//                   </td>
//                   {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.course?.name || 'Unknown'}</td> */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">No materials available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch materials to display in the dashboard
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/learning-materials/materials');
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
        setError('Error fetching materials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-24 -ml-52">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Learning Materials</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Materials</h2>
        </div>
        <div className="border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-blue-300 text-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-blue-300">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">URL</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {materials.length > 0 ? (
                materials.map((material) => (
                  <tr key={material.id} className="hover:bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-900 border-r border-gray-300">{material.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-600">
                      <a
                        href={material.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Watch Video
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-4 text-center text-sm text-gray-500">No materials available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
