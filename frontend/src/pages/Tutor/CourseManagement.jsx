// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Button, TextField, Grid, Card, CardContent, Typography,
// //   IconButton, Dialog, DialogActions, DialogContent, DialogTitle
// // } from '@mui/material';
// // import AddIcon from '@mui/icons-material/Add';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditIcon from '@mui/icons-material/Edit';

// // function CourseManagement() {
// //   const [courses, setCourses] = useState([]);
// //   const [course, setCourse] = useState({
// //     title: '', category: '', prerequisites: '', schedule: '', syllabus: '', difficultyLevel: ''
// //   });
// //   const [editDialogOpen, setEditDialogOpen] = useState(false);
// //   const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses');
// //         console.log('Fetched Courses:', response.data); // Debug: Check if difficultyLevel is present here
// //         setCourses(response.data);
// //       } catch (error) {
// //         console.error('Error fetching courses:', error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const handleAddCourse = async () => {
// //     try {
// //       const response = await axios.post('/api/courses', {
// //         ...course,
// //         difficulty_level: course.difficultyLevel // Map difficultyLevel to difficulty_level
// //       });
// //       setCourses([...courses, response.data]); // Add newly created course
// //       setCourse({ title: '', category: '', prerequisites: '', schedule: '', syllabus: '', difficultyLevel: '' });
// //     } catch (error) {
// //       console.error('Error adding course:', error);
// //     }
// //   };

// //   const handleDeleteCourse = async (id) => {
// //     try {
// //       await axios.delete(`/api/courses/${id}`);
// //       setCourses(courses.filter(course => course.id !== id));
// //     } catch (error) {
// //       console.error('Error deleting course:', error);
// //     }
// //   };

// //   const handleOpenEditDialog = (index) => {
// //     setSelectedCourseIndex(index);
// //     setCourse({
// //       ...courses[index],
// //       difficultyLevel: courses[index].difficulty_level // Map difficulty_level to difficultyLevel
// //     });
// //     setEditDialogOpen(true);
// //   };

// //   const handleCloseEditDialog = () => {
// //     setEditDialogOpen(false);
// //   };

// //   const handleUpdateCourse = async () => {
// //     try {
// //       const updatedCourse = {
// //         ...course,
// //         difficulty_level: course.difficultyLevel // Map difficultyLevel to difficulty_level
// //       };
// //       const response = await axios.put(`/api/courses/${courses[selectedCourseIndex].id}`, updatedCourse);

// //       // Update the local state with the updated course data
// //       setCourses(courses.map((c, index) =>
// //         index === selectedCourseIndex ? response.data : c
// //       ));

// //       handleCloseEditDialog();
// //     } catch (error) {
// //       console.error('Error updating course:', error);
// //     }
// //   };

// //   return (
// //     <div className="p-6 mt-14 -ml-40">
// //       <Typography variant="h5" className='font-extrabold'>Manage Courses</Typography>
// //       <Card className="m-8">
// //         <CardContent>
// //           <Typography variant="h6" style={{ marginBottom: '3px' }}>Add Course</Typography>
// //           <Grid container spacing={3}>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Title"
// //                 value={course.title}
// //                 onChange={(e) => setCourse({ ...course, title: e.target.value })}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Category"
// //                 value={course.category}
// //                 onChange={(e) => setCourse({ ...course, category: e.target.value })}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Prerequisites"
// //                 value={course.prerequisites}
// //                 onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Schedule"
// //                 value={course.schedule}
// //                 onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Difficulty Level"
// //                 value={course.difficultyLevel}
// //                 onChange={(e) => setCourse({ ...course, difficultyLevel: e.target.value })}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Syllabus"
// //                 value={course.syllabus}
// //                 onChange={(e) => setCourse({ ...course, syllabus: e.target.value })}
// //               />
// //             </Grid>
// //           </Grid>
// //           <Button
// //             variant="contained"
// //             startIcon={<AddIcon />}
// //             onClick={handleAddCourse}
// //             style={{ marginTop: '20px' }}
// //           >
// //             Add Course
// //           </Button>
// //         </CardContent>
// //       </Card>
// //       <Card className="m-8">
// //         <CardContent>
// //           <Typography variant="h6" className="mb-4 font-extrabold">Course List</Typography>
// //           {courses.length === 0 ? (
// //             <Typography>No courses found</Typography>
// //           ) : (
// //             <div className="overflow-x-auto">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {courses.map((course, index) => (
// //                   <Card key={course.id} className="p-4">
// //                     <CardContent>
// //                       <Typography variant="h6">{course.title}</Typography>
// //                       <Typography variant="body2" color="textSecondary">Category: {course.category}</Typography>
// //                       <Typography variant="body2" color="textSecondary">Prerequisites: {course.prerequisites}</Typography>
// //                       <Typography variant="body2" color="textSecondary">Schedule: {course.schedule}</Typography>
// //                       <Typography variant="body2" color="textSecondary">Syllabus: {course.syllabus}</Typography>
// //                       <Typography variant="body2" color="textSecondary">Difficulty: {course.difficulty_level}</Typography>
// //                       <div className="flex justify-end mt-2">
// //                         <IconButton onClick={() => handleOpenEditDialog(index)}>
// //                           <EditIcon />
// //                         </IconButton>
// //                         <IconButton onClick={() => handleDeleteCourse(course.id)}>
// //                           <DeleteIcon />
// //                         </IconButton>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </CardContent>
// //       </Card>
// //       <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
// //         <DialogTitle>Edit Course</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             fullWidth
// //             label="Title"
// //             value={course.title}
// //             onChange={(e) => setCourse({ ...course, title: e.target.value })}
// //             margin="dense"
// //           />
// //           <TextField
// //             fullWidth
// //             label="Category"
// //             value={course.category}
// //             onChange={(e) => setCourse({ ...course, category: e.target.value })}
// //             margin="dense"
// //           />
// //           <TextField
// //             fullWidth
// //             label="Prerequisites"
// //             value={course.prerequisites}
// //             onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })}
// //             margin="dense"
// //           />
// //           <TextField
// //             fullWidth
// //             label="Schedule"
// //             value={course.schedule}
// //             onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
// //             margin="dense"
// //           />
// //           <TextField
// //             fullWidth
// //             label="Difficulty Level"
// //             value={course.difficultyLevel}
// //             onChange={(e) => setCourse({ ...course, difficultyLevel: e.target.value })}
// //             margin="dense"
// //           />
// //           <TextField
// //             fullWidth
// //             label="Syllabus"
// //             value={course.syllabus}
// //             onChange={(e) => setCourse({ ...course, syllabus: e.target.value })}
// //             margin="dense"
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
// //           <Button onClick={handleUpdateCourse} color="primary">Update</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }

// // export default CourseManagement;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Button, TextField, Grid, Card, CardContent, Typography,
//   IconButton, Dialog, DialogActions, DialogContent, DialogTitle
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// function CourseManagement() {
//   const [courses, setCourses] = useState([]);
//   const [course, setCourse] = useState({
//     title: '', category: '', prerequisites: '', schedule: '', syllabus: '', difficultyLevel: ''
//   });
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('/api/courses');
//         console.log('Fetched Courses:', response.data); // Debug: Check if data is correct
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleAddCourse = async () => {
//     try {
//       const response = await axios.post('/api/courses', {
//         ...course,
//         difficulty_level: course.difficultyLevel // Map difficultyLevel to difficulty_level
//       });
//       setCourses([...courses, response.data]); // Add newly created course
//       setCourse({ title: '', category: '', prerequisites: '', schedule: '', syllabus: '', difficultyLevel: '' });
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     try {
//       await axios.delete(`/api/courses/${id}`);
//       setCourses(courses.filter(course => course.id !== id));
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   const handleOpenEditDialog = (index) => {
//     setSelectedCourseIndex(index);
//     setCourse({
//       ...courses[index],
//       difficultyLevel: courses[index].difficulty_level // Map difficulty_level to difficultyLevel
//     });
//     setEditDialogOpen(true);
//   };

//   const handleCloseEditDialog = () => {
//     setEditDialogOpen(false);
//   };

//   const handleUpdateCourse = async () => {
//     try {
//       const updatedCourse = {
//         ...course,
//         difficulty_level: course.difficultyLevel // Map difficultyLevel to difficulty_level
//       };
//       const response = await axios.put(`/api/courses/${courses[selectedCourseIndex].id}`, updatedCourse);

//       // Update the local state with the updated course data
//       setCourses(courses.map((c, index) =>
//         index === selectedCourseIndex ? response.data : c
//       ));

//       handleCloseEditDialog();
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   return (
//     <div className="p-6 mt-14 -ml-40">
//       <Typography variant="h5" className='font-extrabold'>Manage Courses</Typography>
//       <Card className="m-8">
//         <CardContent>
//           <Typography variant="h6" style={{ marginBottom: '3px' }}>Add Course</Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 value={course.title}
//                 onChange={(e) => setCourse({ ...course, title: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Category"
//                 value={course.category}
//                 onChange={(e) => setCourse({ ...course, category: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Prerequisites"
//                 value={course.prerequisites}
//                 onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Schedule"
//                 value={course.schedule}
//                 onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Difficulty Level"
//                 value={course.difficultyLevel}
//                 onChange={(e) => setCourse({ ...course, difficultyLevel: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 fullWidth
//                 label="Syllabus"
//                 value={course.syllabus}
//                 onChange={(e) => setCourse({ ...course, syllabus: e.target.value })}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={handleAddCourse}
//             style={{ marginTop: '20px' }}
//           >
//             Add Course
//           </Button>
//         </CardContent>
//       </Card>
//       <Card className="m-8">
//         <CardContent>
//           <Typography variant="h6" className="mb-4 font-extrabold">Course List</Typography>
//           {courses.length === 0 ? (
//             <Typography>No courses found</Typography>
//           ) : (
//             <div className="overflow-x-auto">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {courses.map((course, index) => (
//                   <Card key={course.id} className="p-4">
//                     <CardContent>
//                       <Typography variant="h6">{course.title}</Typography>
//                       <Typography variant="body2" color="textSecondary">Category: {course.category}</Typography>
//                       <Typography variant="body2" color="textSecondary">Prerequisites: {course.prerequisites}</Typography>
//                       <Typography variant="body2" color="textSecondary">Schedule: {course.schedule}</Typography>
//                       <Typography variant="body2" color="textSecondary">Syllabus: {course.syllabus}</Typography>
//                       <Typography variant="body2" color="textSecondary">Difficulty: {course.difficulty_level}</Typography>
//                       <div className="flex justify-end mt-2">
//                         <IconButton onClick={() => handleOpenEditDialog(index)}>
//                           <EditIcon />
//                         </IconButton>
//                         <IconButton onClick={() => handleDeleteCourse(course.id)}>
//                           <DeleteIcon />
//                         </IconButton>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//       <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
//         <DialogTitle>Edit Course</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             label="Title"
//             value={course.title}
//             onChange={(e) => setCourse({ ...course, title: e.target.value })}
//             margin="dense"
//           />
//           <TextField
//             fullWidth
//             label="Category"
//             value={course.category}
//             onChange={(e) => setCourse({ ...course, category: e.target.value })}
//             margin="dense"
//           />
//           <TextField
//             fullWidth
//             label="Prerequisites"
//             value={course.prerequisites}
//             onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })}
//             margin="dense"
//           />
//           <TextField
//             fullWidth
//             label="Schedule"
//             value={course.schedule}
//             onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
//             margin="dense"
//           />
//           <TextField
//             fullWidth
//             label="Difficulty Level"
//             value={course.difficultyLevel}
//             onChange={(e) => setCourse({ ...course, difficultyLevel: e.target.value })}
//             margin="dense"
//           />
//           <TextField
//             fullWidth
//             label="Syllabus"
//             value={course.syllabus}
//             onChange={(e) => setCourse({ ...course, syllabus: e.target.value })}
//             margin="dense"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
//           <Button onClick={handleUpdateCourse} color="primary">Update</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default CourseManagement;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button, TextField, Grid, Card, CardContent, Typography,
  IconButton, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    title: '', category: '', prerequisites: '', schedule: '', syllabus: '', difficultyLevel: ''
  });
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/courses');
        console.log('Fetched Courses:', response.data);
        
        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    try {
      const response = await axios.post('http://localhost:8080/courses', {
        ...course,
        difficulty_level: course.difficultyLevel // Map difficultyLevel to difficulty_level
      });
      setCourses([...courses, response.data]); // Add newly created course
      setCourse({ title: '', category: '', prerequisites: '', schedule: '', syllabus: '', difficultyLevel: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/courses/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleOpenEditDialog = (index) => {
    setSelectedCourseIndex(index);
    setCourse({
      ...courses[index],
      difficultyLevel: courses[index].difficulty_level // Map difficulty_level to difficultyLevel
    });
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleUpdateCourse = async () => {
    try {
      const updatedCourse = {
        ...course,
        difficulty_level: course.difficultyLevel // Map difficultyLevel to difficulty_level
      };
      const response = await axios.put(`http:localhost:8080/courses/${courses[selectedCourseIndex].id}`, updatedCourse);

      // Update the local state with the updated course data
      setCourses(courses.map((c, index) =>
        index === selectedCourseIndex ? response.data : c
      ));

      handleCloseEditDialog();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="p-6 mt-14 -ml-40">
      <Typography variant="h5" className='font-extrabold'>Manage Courses</Typography>
      <Card className="m-8">
        <CardContent>
          <Typography variant="h6" style={{ marginBottom: '3px' }}>Add Course</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                value={course.title}
                onChange={(e) => setCourse({ ...course, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                value={course.category}
                onChange={(e) => setCourse({ ...course, category: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Prerequisites"
                value={course.prerequisites}
                onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Schedule"
                value={course.schedule}
                onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Difficulty Level"
                value={course.difficultyLevel}
                onChange={(e) => setCourse({ ...course, difficultyLevel: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Syllabus"
                value={course.syllabus}
                onChange={(e) => setCourse({ ...course, syllabus: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddCourse}
            style={{ marginTop: '20px' }}
          >
            Add Course
          </Button>
        </CardContent>
      </Card>
      <Card className="m-8">
        <CardContent>
          <Typography variant="h6" className="mb-4 font-extrabold">Course List</Typography>
          {courses.length === 0 ? (
            <Typography>No courses found</Typography>
          ) : (
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.isArray(courses) && courses.map((course, index) => (
                  <Card key={course.id} className="p-4">
                    <CardContent>
                      <Typography variant="h6">{course.title}</Typography>
                      <Typography variant="body2" color="textSecondary">Category: {course.category}</Typography>
                      <Typography variant="body2" color="textSecondary">Prerequisites: {course.prerequisites}</Typography>
                      <Typography variant="body2" color="textSecondary">Schedule: {course.schedule}</Typography>
                      <Typography variant="body2" color="textSecondary">Syllabus: {course.syllabus}</Typography>
                      <Typography variant="body2" color="textSecondary">Difficulty: {course.difficulty_level}</Typography>
                      <div className="flex justify-end mt-2">
                        <IconButton onClick={() => handleOpenEditDialog(index)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteCourse(course.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Course</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Category"
            value={course.category}
            onChange={(e) => setCourse({ ...course, category: e.target.value })}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Prerequisites"
            value={course.prerequisites}
            onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Schedule"
            value={course.schedule}
            onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Difficulty Level"
            value={course.difficultyLevel}
            onChange={(e) => setCourse({ ...course, difficultyLevel: e.target.value })}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Syllabus"
            value={course.syllabus}
            onChange={(e) => setCourse({ ...course, syllabus: e.target.value })}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
          <Button onClick={handleUpdateCourse} color="primary">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseManagement;
