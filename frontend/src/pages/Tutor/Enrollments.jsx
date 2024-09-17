// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { Box, Typography, Paper } from '@mui/material';

// ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

// const Enrollments = () => {
//   const [totalEnrollments, setTotalEnrollments] = useState(0);
//   const [courseData, setCourseData] = useState({ labels: [], data: [] });
//   const userId = localStorage.getItem('userId'); // Get the user ID from local storage

//   useEffect(() => {
//     const fetchEnrollmentData = async () => {
//       try {
//         // Fetch total enrollments count for the current user
//         const totalResponse = await axios.get(`http://localhost:8080/enroll/count`, {
//           params: { userId } // Send userId as a query parameter
//         });
//         setTotalEnrollments(totalResponse.data);

//         // Fetch enrollments by course
//         const courseResponse = await axios.get(`http://localhost:8080/enroll/by-course`);
//         const courses = courseResponse.data;

//         const labels = Object.keys(courses);
//         const data = Object.values(courses);

//         setCourseData({ labels, data });

//       } catch (error) {
//         console.error('Error fetching enrollment data:', error);
//       }
//     };

//     if (userId) { // Only fetch data if userId is available
//       fetchEnrollmentData();
//     }
//   }, [userId]);

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Enrollments Overview
//       </Typography>
//       <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
//         <Typography variant="h6">Total Enrollments</Typography>
//         <Pie
//           data={{
//             labels: ['Total Enrollments'],
//             datasets: [{
//               data: [totalEnrollments],
//               backgroundColor: ['#36A2EB'],
//             }],
//           }}
//           options={{ responsive: true }}
//         />
//       </Paper>
//       <Paper elevation={3} sx={{ padding: 2 }}>
//         <Typography variant="h6">Enrollments by Course</Typography>
//         <Bar
//           data={{
//             labels: courseData.labels,
//             datasets: [{
//               label: 'Number of Enrollments',
//               data: courseData.data,
//               backgroundColor: '#FF6384',
//               borderColor: '#FF6384',
//               borderWidth: 1,
//             }],
//           }}
//           options={{ responsive: true, scales: { x: { beginAtZero: true } } }}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default Enrollments;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { Box, Typography, Paper } from '@mui/material';

// ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

// const Enrollments = () => {
//   const [totalEnrollments, setTotalEnrollments] = useState(0);
//   const [courseData, setCourseData] = useState({ labels: [], data: [] });
//   const userId = localStorage.getItem('userId'); // Get the user ID from local storage

//   useEffect(() => {
//     const fetchEnrollmentData = async () => {
//       try {
//         if (userId) { 
//           const totalResponse = await axios.get(`http://localhost:8080/enroll/count`, {
//             params: { userId } // Send userId as a query parameter
//           });
//           setTotalEnrollments(totalResponse.data);

//           // Fetch enrollments by course
//           const courseResponse = await axios.get(`http://localhost:8080/enroll/by-course`);
//           const courses = courseResponse.data;

//           const labels = Object.keys(courses);
//           const data = Object.values(courses);

//           setCourseData({ labels, data });
//         }
//       } catch (error) {
//         console.error('Error fetching enrollment data:', error);
//       }
//     };

//     fetchEnrollmentData();
//   }, [userId]);

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Enrollments Overview
//       </Typography>
//       <Paper elevation={3} sx={{ padding: 2, marginBottom: 4, width: '300px', height: '300px' }}>
//         <Typography variant="h6">Total Enrollments</Typography>
//         <Pie
//           data={{
//             labels: ['Total Enrollments'],
//             datasets: [{
//               data: [totalEnrollments],
//               backgroundColor: ['#36A2EB'],
//             }],
//           }}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'bottom',
//               },
//             },
//             maintainAspectRatio: false,
//           }}
//           width={300}
//           height={300}
//         />
//       </Paper>
//       <Paper elevation={3} sx={{ padding: 2, width: '600px', height: '500px' }}>
//         <Typography variant="h6">Enrollments by Course</Typography>
//         <Bar
//           data={{
//             labels: courseData.labels,
//             datasets: [{
//               label: 'Number of Enrollments',
//               data: courseData.data,
//               backgroundColor: '#FF6384',
//               borderColor: '#FF6384',
//               borderWidth: 1,
//             }],
//           }}
//           options={{
//             responsive: true,
//             scales: {
//               x: {
//                 beginAtZero: true,
//                 ticks: {
//                   maxRotation: 45,
//                   minRotation: 45,
//                 },
//               },
//               y: {
//                 beginAtZero: true,
//               },
//             },
//           }}
//           width={600}
//           height={400}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default Enrollments;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { Box, Typography, Paper } from '@mui/material';

// ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

// const Enrollments = () => {
//   const [totalEnrollments, setTotalEnrollments] = useState(0);
//   const [courseData, setCourseData] = useState({ labels: [], data: [] });
//   const userId = localStorage.getItem('userId'); // Get the user ID from local storage

//   useEffect(() => {
//     const fetchEnrollmentData = async () => {
//       try {
//         if (userId) {
//           // Fetch total enrollments count for the current user
//           const totalResponse = await axios.get(`http://localhost:8080/enroll/count`, {
//             params: { userId } // Send userId as a query parameter
//           });
//           console.log('Total Response:', totalResponse.data); // Log the response for debugging
//           setTotalEnrollments(totalResponse.data);

//           // Fetch enrollments by course
//           const courseResponse = await axios.get(`http://localhost:8080/enroll/by-course`);
//           const courses = courseResponse.data;

//           const labels = Object.keys(courses);
//           const data = Object.values(courses);

//           setCourseData({ labels, data });
//         }
//       } catch (error) {
//         console.error('Error fetching enrollment data:', error);
//       }
//     };

//     fetchEnrollmentData();

//     // Set up polling every 10 seconds to refresh data
//     const intervalId = setInterval(fetchEnrollmentData, 10000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [userId]);

//   return (
//     <Box sx={{ padding: 7 }} className='font-extrabold'>
//       <Typography variant="h6" gutterBottom>
//         Enrollments Overview
//       </Typography>
//       <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, width: '300px', height: '300px' }}>
//         <Typography variant="h6">Total Enrollments</Typography>
//         <Pie
//           data={{
//             labels: ['Total Enrollments'],
//             datasets: [{
//               data: [totalEnrollments],
//               backgroundColor: ['#36A2EB'],
//             }],
//           }}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'bottom',
//               },
//             },
//             maintainAspectRatio: false,
//           }}
//           width={300}
//           height={300}
//         />
//       </Paper>
//       <Paper elevation={3} sx={{ padding: 2, width: '600px', height: '500px' }}>
//         <Typography variant="h6">Enrollments by Course</Typography>
//         <Bar
//           data={{
//             labels: courseData.labels,
//             datasets: [{
//               label: 'Number of Enrollments',
//               data: courseData.data,
//               backgroundColor: '#FF6384',
//               borderColor: '#FF6384',
//               borderWidth: 1,
//             }],
//           }}
//           options={{
//             responsive: true,
//             scales: {
//               x: {
//                 beginAtZero: true,
//                 ticks: {
//                   maxRotation: 45,
//                   minRotation: 45,
//                 },
//               },
//               y: {
//                 beginAtZero: true,
//               },
//             },
//           }}
//           width={600}
//           height={400}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default Enrollments;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Box, Typography, Paper } from '@mui/material';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const Enrollments = () => {
  const [totalEnrollments, setTotalEnrollments] = useState(0);
  const [courseData, setCourseData] = useState({ labels: [], data: [] });
  const userId = localStorage.getItem('userId'); // Get the user ID from local storage

  useEffect(() => {
    const fetchEnrollmentData = async () => {
      try {
        if (userId) {
          // Fetch total enrollments count for the current user
          const totalResponse = await axios.get(`http://localhost:8080/enroll/count`, {
            params: { userId } // Send userId as a query parameter
          });
          console.log('Total Enrollments Response:', totalResponse.data); // Log the response for debugging
          setTotalEnrollments(totalResponse.data);

          // Fetch enrollments by course
          const courseResponse = await axios.get(`http://localhost:8080/enroll/by-course`);
          const courses = courseResponse.data;

          const labels = Object.keys(courses);
          const data = Object.values(courses);

          setCourseData({ labels, data });
        }
      } catch (error) {
        console.error('Error fetching enrollment data:', error);
      }
    };

    fetchEnrollmentData();

    // Set up polling every 10 seconds to refresh data
    const intervalId = setInterval(fetchEnrollmentData, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [userId]);

  // Prepare data for Pie chart
  const pieData = {
    labels: ['Total Enrollments'],
    datasets: [{
      data: [totalEnrollments],
      backgroundColor: ['#36A2EB'],
    }],
  };

  // Prepare data for Bar chart
  const barData = {
    labels: courseData.labels,
    datasets: [{
      label: 'Number of Enrollments',
      data: courseData.data,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
    }],
  };

  return (
    <Box sx={{ padding: 7 }} className='font-extrabold'>
      <Typography variant="h6" gutterBottom>
        Enrollments Overview
      </Typography>
      {/* <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, width: '300px', height: '300px' }}>
        <Typography variant="h6">Total Enrollments</Typography>
        <Pie
          data={pieData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
            maintainAspectRatio: false,
          }}
          width={300}
          height={300}
        />
      </Paper> */}
      <Paper elevation={3} sx={{ padding: 2, width: '600px', height: '500px' }}>
        <Typography variant="h6">Enrollments by Course</Typography>
        <Bar
          data={barData}
          options={{
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  maxRotation: 45,
                  minRotation: 45,
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
          width={600}
          height={400}
        />
      </Paper>
    </Box>
  );
};

export default Enrollments;
