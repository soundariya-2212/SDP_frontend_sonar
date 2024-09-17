import React, { useState } from 'react';
import { Button, TextField, Grid, Card, CardContent, Typography, IconButton, Select, MenuItem, FormControl, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CourseManagement({ isAdmin }) {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ title: '', description: '', tutor: '' });
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [tutorError, setTutorError] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const isDarkMode = true; // Replace this with your actual dark mode state

  // Dummy list of tutors
  const tutors = ['Tutor 1', 'Tutor 2', 'Tutor 3'];

  const handleAddCourse = () => {
    setTitleError(!course.title);
    setDescriptionError(!course.description);
    setTutorError(!course.tutor);

    if (course.title && course.description && course.tutor) {
      setCourses([...courses, course]);
      setCourse({ title: '', description: '', tutor: '' });
      setTitleError(false);
      setDescriptionError(false);
      setTutorError(false);
    } else {
      alert("The field is empty");
    }
  };

  const handleDeleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const handleOpenEditDialog = (index) => {
    setSelectedCourseIndex(index);
    setCourse(courses[index]);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleUpdateCourse = () => {
    setCourses(courses.map((c, index) => (index === selectedCourseIndex ? course : c)));
    handleCloseEditDialog();
  };

  return (
    <div className={`p-6 ${isDarkMode ? 'dark:text-white' : 'text-black'} mt-14`}>
      <Typography variant="h5" style={{ marginLeft: '-150px' }}>Manage Courses</Typography>
      <Card className="m-8 dark:bg-black dark:text-white -ml-40">
        <CardContent>
          <Typography variant="h6" style={{ marginBottom: '3px' }}>Add Course</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                value={course.title}
                onChange={(e) => setCourse({ ...course, title: e.target.value })}
                className={`dark:bg-white dark:text-black ${titleError ? 'border-red-500' : ''}`}
                error={titleError}
                helperText={titleError ? 'Title is required' : ''}
                // required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Description"
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
                className={`dark:bg-white dark:text-black ${descriptionError ? 'border-red-500' : ''}`}
                error={descriptionError}
                helperText={descriptionError ? 'Description is required' : ''}
                // required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={tutorError}>
                <InputLabel>Select Tutor</InputLabel>
                <Select
                  value={course.tutor}
                  onChange={(e) => setCourse({ ...course, tutor: e.target.value })}
                  className={`dark:bg-white dark:text-black ${tutorError ? 'border-red-500' : ''}`}
                >
                  {tutors.map((tutor, index) => (
                    <MenuItem key={index} value={tutor}>{tutor}</MenuItem>
                  ))}
                </Select>
                {tutorError && <Typography color="error">Tutor is required</Typography>}
              </FormControl>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddCourse}
            className={`${isDarkMode ? 'bg-teal-800 text-white' : 'bg-blue-300'} mb-11`}
            style={{ marginTop: '20px',backgroundColor:'#93C5FD' }}
          >
            Add Course
          </Button>
        </CardContent>
      </Card>
      <Card className="dark:bg-teal-800 dark:text-white m-8 -ml-40">
        <CardContent>
          <Typography variant="h6" className="mb-4">Course List</Typography>
          {courses.length === 0 ? (
            <Typography>No courses found</Typography>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-white">
                <thead className="bg-gray-50 dark:bg-teal-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-teal-800">
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">{course.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">{course.tutor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        
                          <IconButton onClick={() => handleOpenEditDialog(index)} color="primary">
                            <EditIcon />
                          </IconButton>
                        <IconButton onClick={() => handleDeleteCourse(index)} color="secondary">
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

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Course</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                value={course.title}
                onChange={(e) => setCourse({ ...course, title: e.target.value })}
                disabled
                className="dark:bg-white dark:text-black"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Description"
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
                disabled
                className="dark:bg-white dark:text-black"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Tutor</InputLabel>
                <Select
                  value={course.tutor}
                  onChange={(e) => setCourse({ ...course, tutor: e.target.value })}
                  className="dark:bg-white dark:text-black"
                >
                  {tutors.map((tutor, index) => (
                    <MenuItem key={index} value={tutor}>{tutor}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={handleUpdateCourse} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseManagement;


// import React, { useState } from 'react';
// import { Typography, Paper, Divider, Button, TextField } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SyllabusManagement from './SyllabusManagement'; // Import SyllabusManagement component

// const initialCourses = [
//   { id: 1, title: 'Mathematics', duration: '3 months' },
//   { id: 2, title: 'Physics', duration: '4 months' },
//   { id: 3, title: 'Chemistry', duration: '6 months' },
//   { id: 4, title: 'Biology', duration: '5 months' },
// ];

// const CourseManagement = () => {
//   const [courses, setCourses] = useState(initialCourses);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [showSyllabusManagement, setShowSyllabusManagement] = useState(false);

//   const handleEdit = (course) => {
//     setSelectedCourse(course);
//   };

//   const handleDelete = (id) => {
//     setCourses(courses.filter(course => course.id !== id));
//   };

//   const handleSave = () => {
//     if (selectedCourse) {
//       setCourses(courses.map(course => 
//         course.id === selectedCourse.id ? selectedCourse : course
//       ));
//       setSelectedCourse(null);
//     }
//   };

//   const handleSyllabusManagement = () => {
//     setShowSyllabusManagement(!showSyllabusManagement);
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'title', headerName: 'Title', width: 200 },
//     { field: 'duration', headerName: 'Duration', width: 150 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 150,
//       renderCell: (params) => (
//         <div>
//           <Button
//             color="primary"
//             onClick={() => handleEdit(params.row)}
//             startIcon={<EditIcon />}
//           >
//             Edit
//           </Button>
//           <Button
//             color="secondary"
//             onClick={() => handleDelete(params.row.id)}
//             startIcon={<DeleteIcon />}
//           >
//             Delete
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="p-4 dark:bg-teal-800">
//       <Typography variant="h5" gutterBottom className="text-white">
//         Course Management
//       </Typography>
//       <Divider className="mb-4" />

//       <Paper className="p-4 mb-8 bg-gray-100 dark:bg-teal-800">
//         <Typography variant="h6" gutterBottom className="text-black dark:text-white">
//           Courses List
//         </Typography>
//         <DataGrid
//           rows={courses}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//         />
//       </Paper>

//       {selectedCourse && (
//         <Paper className="p-4 bg-gray-100 dark:bg-teal-800">
//           <Typography variant="h6" gutterBottom className="text-black dark:text-white">
//             Edit Course
//           </Typography>
//           <Divider className="mb-4" />
//           <TextField
//             label="Title"
//             value={selectedCourse.title}
//             onChange={(e) => setSelectedCourse({ ...selectedCourse, title: e.target.value })}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Duration"
//             value={selectedCourse.duration}
//             onChange={(e) => setSelectedCourse({ ...selectedCourse, duration: e.target.value })}
//             fullWidth
//             margin="normal"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSave}
//             className="mt-4"
//           >
//             Save
//           </Button>
//         </Paper>
//       )}

//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={handleSyllabusManagement}
//         className="mt-4"
//       >
//         Manage Syllabus
//       </Button>

//       {showSyllabusManagement && (
//         <SyllabusManagement courses={courses} />
//       )}
//     </div>
//   );
// };

// export default CourseManagement;

