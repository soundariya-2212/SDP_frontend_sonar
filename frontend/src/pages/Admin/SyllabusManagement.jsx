
// import React, { useState } from 'react';
// import { Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const initialCourses = [
//   { id: 1, title: 'Introduction to Programming' },
//   { id: 2, title: 'Advanced Design Principles' },
//   { id: 3, title: 'Digital Marketing 101' },
//   { id: 4, title: 'Data Science with Python' },
//   { id: 5, title: 'Fundamentals of Graphic Design' },
//   // Add more courses if needed
// ];

// const initialSyllabi = [
//   { id: 1, courseId: 1, title: 'Basics of Programming', description: 'Introduction to variables, data types, and control structures.', duration: '2 hours' },
//   { id: 2, courseId: 1, title: 'Advanced Programming Concepts', description: 'Functions, loops, and basic problem-solving.', duration: '3 hours' },
//   { id: 3, courseId: 2, title: 'Design Principles Overview', description: 'Principles of design and usability.', duration: '1.5 hours' },
//   { id: 4, courseId: 2, title: 'Design Patterns', description: 'Design patterns and case studies.', duration: '2 hours' },
//   // Add more syllabi if needed
// ];

// const SyllabusManagement = () => {
//   const [syllabi, setSyllabi] = useState(initialSyllabi);
//   const [courses, setCourses] = useState(initialCourses);
//   const [selectedSyllabus, setSelectedSyllabus] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [formData, setFormData] = useState({ courseId: '', title: '', description: '', duration: '' });
//   const [editing, setEditing] = useState(false);

//   const handleClickOpen = (syllabus = null) => {
//     setSelectedSyllabus(syllabus);
//     setFormData({
//       courseId: syllabus ? syllabus.courseId : '',
//       title: syllabus ? syllabus.title : '',
//       description: syllabus ? syllabus.description : '',
//       duration: syllabus ? syllabus.duration : '',
//     });
//     setEditing(!!syllabus);
//     setOpenDialog(true);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//     setSelectedSyllabus(null);
//   };

//   const handleSave = () => {
//     if (!formData.courseId || !formData.title || !formData.description || !formData.duration) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     if (editing) {
//       setSyllabi(syllabi.map((item) =>
//         item.id === selectedSyllabus?.id
//           ? { ...item, ...formData }
//           : item
//       ));
//     } else {
//       const newSyllabus = {
//         id: syllabi.length ? Math.max(syllabi.map(s => s.id)) + 1 : 1,
//         ...formData
//       };
//       setSyllabi([...syllabi, newSyllabus]);
//     }
//     handleClose();
//   };

//   const handleDelete = (id) => {
//     setSyllabi(syllabi.filter((item) => item.id !== id));
//   };

//   const columns = [
//     {
//       field: 'courseTitle',
//       headerName: 'Course',
//       width: 200,
//       valueGetter: (params) => {
//         const course = courses.find(course => course.id === params.row.courseId);
//         return course ? course.title : 'Unknown Course';
//       },
//     },
//     { field: 'title', headerName: 'Title', width: 200 },
//     { field: 'description', headerName: 'Description', width: 300 },
//     { field: 'duration', headerName: 'Duration', width: 150 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 150,
//       renderCell: (params) => (
//         <div>
//           <IconButton onClick={() => handleClickOpen(params.row)}>
//             <EditIcon />
//           </IconButton>
//           <IconButton onClick={() => handleDelete(params.row.id)}>
//             <DeleteIcon />
//           </IconButton>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <Typography variant="h4" gutterBottom>
//         Syllabus Management
//       </Typography>
//       <Button variant="contained" color="primary" onClick={() => handleClickOpen()}>
//         Add New Syllabus
//       </Button>
//       <div style={{ height: 400, width: '100%', marginTop: 20 }}>
//         <DataGrid
//           rows={syllabi}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//           getRowId={(row) => row.id}
//         />
//       </div>

//       <Dialog open={openDialog} onClose={handleClose}>
//         <DialogTitle>{editing ? 'Edit Syllabus' : 'Add Syllabus'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             select
//             label="Course"
//             fullWidth
//             variant="standard"
//             value={formData.courseId}
//             onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
//             SelectProps={{
//               native: true,
//             }}
//           >
//             <option value="">Select Course</option>
//             {courses.map((course) => (
//               <option key={course.id} value={course.id}>
//                 {course.title}
//               </option>
//             ))}
//           </TextField>
//           <TextField
//             margin="dense"
//             label="Title"
//             fullWidth
//             variant="standard"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             fullWidth
//             variant="standard"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Duration"
//             fullWidth
//             variant="standard"
//             value={formData.duration}
//             onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleSave}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default SyllabusManagement;


// import React, { useState } from 'react';
// import { Button, TextField, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// function SyllabusManagement() {
//   const [syllabi, setSyllabi] = useState([]);
//   const [syllabus, setSyllabus] = useState({ title: '', content: '' });

//   const handleAddSyllabus = () => {
//     setSyllabi([...syllabi, syllabus]);
//     setSyllabus({ title: '', content: '' });
//   };

//   const handleDeleteSyllabus = (index) => {
//     setSyllabi(syllabi.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <Typography variant="h6">Manage Syllabi</Typography>
//       <Card>
//         <CardContent>
//           <Typography variant="h6">Add Syllabus</Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 value={syllabus.title}
//                 onChange={(e) => setSyllabus({ ...syllabus, title: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Content"
//                 value={syllabus.content}
//                 onChange={(e) => setSyllabus({ ...syllabus, content: e.target.value })}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddIcon />}
//             onClick={handleAddSyllabus}
//             style={{ marginTop: '16px' }}
//           >
//             Add Syllabus
//           </Button>
//         </CardContent>
//       </Card>
//       <Card style={{ marginTop: '16px' }}>
//         <CardContent>
//           <Typography variant="h6">Syllabus List</Typography>
//           {syllabi.map((syllabus, index) => (
//             <Grid container spacing={2} key={index}>
//               <Grid item xs={12} sm={6}>
//                 <Typography>{syllabus.title}</Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography>{syllabus.content}</Typography>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <IconButton onClick={() => handleDeleteSyllabus(index)} color="secondary">
//                   <DeleteIcon />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// export default SyllabusManagement;

import React, { useState } from 'react';
import { Button, TextField, Grid, Card, CardContent, Typography, IconButton, MenuItem, Select, InputLabel, FormControl, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const staticCourses = [
    { 
      id: 1, 
      title: 'Introduction to Programming', 
      duration: '4 weeks', 
      content: 'This course covers the fundamental concepts of programming, including data types, control structures, functions, and basic algorithms. Students will gain practical experience by writing simple programs and solving problems using a popular programming language.' 
    },
    { 
      id: 2, 
      title: 'Advanced Design Principles', 
      duration: '6 weeks', 
      content: 'Explore advanced design concepts such as responsive design, typography, color theory, and user experience. This course dives deep into creating visually appealing and user-friendly designs, with a focus on practical application through real-world projects.' 
    },
    { 
      id: 3, 
      title: 'Digital Marketing 101', 
      duration: '3 weeks', 
      content: 'Gain a comprehensive understanding of digital marketing strategies including search engine optimization (SEO), social media marketing, and email marketing. The course provides practical insights into creating and managing effective digital marketing campaigns.' 
    },
    { 
      id: 4, 
      title: 'Data Science with Python', 
      duration: '8 weeks', 
      content: 'Learn how to analyze and interpret complex data using Python. Topics include data cleaning, data visualization, statistical analysis, and machine learning. Hands-on projects will help you apply these skills to real-world data problems.' 
    },
    { 
      id: 5, 
      title: 'Fundamentals of Graphic Design', 
      duration: '5 weeks', 
      content: 'Understand the core principles of graphic design including layout, typography, color theory, and visual hierarchy. The course emphasizes practical skills and creative thinking to produce effective and aesthetically pleasing design solutions.' 
    },
    { 
      id: 6, 
      title: 'Web Development Bootcamp', 
      duration: '12 weeks', 
      content: 'A comprehensive bootcamp covering front-end and back-end web development. Students will learn HTML, CSS, JavaScript, and popular frameworks like React and Node.js. The course includes hands-on projects to build and deploy web applications.' 
    },
    { 
      id: 7, 
      title: 'Business Strategy Essentials', 
      duration: '4 weeks', 
      content: 'This course covers the fundamental aspects of business strategy, including market analysis, competitive positioning, and strategic planning. Learn how to develop and implement strategies that drive business success.' 
    },
    { 
      id: 8, 
      title: 'Machine Learning for Everyone', 
      duration: '6 weeks', 
      content: 'An introductory course on machine learning concepts and techniques. Topics include supervised and unsupervised learning, neural networks, and model evaluation. The course provides practical experience through hands-on exercises and projects.' 
    },
    { 
      id: 9, 
      title: 'Advanced SEO Techniques', 
      duration: '4 weeks', 
      content: 'Dive deep into advanced SEO strategies including on-page and off-page optimization, technical SEO, and content marketing. Learn how to improve website rankings and drive organic traffic using cutting-edge SEO techniques.' 
    },
    { 
      id: 10, 
      title: 'Introduction to JavaScript', 
      duration: '4 weeks', 
      content: 'Get to know JavaScript, the programming language of the web. This course covers basic syntax, data types, functions, and DOM manipulation. Students will build interactive web features and gain a solid foundation in JavaScript programming.' 
    },
    { 
      id: 11, 
      title: 'UX/UI Design Fundamentals', 
      duration: '6 weeks', 
      content: 'Learn the principles of user experience (UX) and user interface (UI) design. This course focuses on creating intuitive and visually appealing interfaces, conducting user research, and implementing design thinking methodologies.' 
    },
    { 
      id: 12, 
      title: 'Entrepreneurship Basics', 
      duration: '5 weeks', 
      content: 'Explore the key concepts of entrepreneurship, including business planning, market research, and startup financing. The course provides practical insights into starting and managing a new business venture.' 
    }
];

const durations = ['4 weeks', '6 weeks', '3 weeks', '8 weeks']; // Static data for duration

function SyllabusManagement() {
    const [syllabi, setSyllabi] = useState(staticCourses.map(course => ({
      id: course.id,
      title: course.title,
      content: course.content,
      duration: course.duration
    })));
    const [syllabus, setSyllabus] = useState({ title: '', content: '', duration: '' });
    const [editIndex, setEditIndex] = useState(null);
    const [alert, setAlert] = useState('');
  
    const handleAddSyllabus = () => {
      if (!syllabus.title || !syllabus.content || !syllabus.duration) {
        setAlert('All fields are required.');
        return;
      }
      if (editIndex !== null) {
        // Update existing syllabus
        const updatedSyllabi = syllabi.map((item, index) =>
          index === editIndex ? { ...syllabus, id: item.id } : item
        );
        setSyllabi(updatedSyllabi);
        setEditIndex(null);
      } else {
        // Add new syllabus
        setSyllabi([...syllabi, { ...syllabus, id: syllabi.length + 1 }]); // Generate a new ID
      }
      setSyllabus({ title: '', content: '', duration: '' });
      setAlert('');
    };
  
    const handleEditSyllabus = (index) => {
      setSyllabus(syllabi[index]);
      setEditIndex(index);
    };
  
    const handleDeleteSyllabus = (index) => {
      setSyllabi(syllabi.filter((_, i) => i !== index));
      if (editIndex === index) {
        setEditIndex(null);
        setSyllabus({ title: '', content: '', duration: '' });
      }
    };
  
    return (
      <div className='-ml-40'>
        {/* <Typography variant="h6" style={{marginTop:'30px'}}>SYLLABUS</Typography> */}
        <Typography variant="h6" style={{marginTop:'90px'}}>Syllabus</Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">{editIndex !== null ? 'Edit Syllabus' : 'Add Syllabus'}</Typography>
            {alert && <Alert severity="error">{alert}</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Title"
                  value={syllabus.title}
                  onChange={(e) => setSyllabus({ ...syllabus, title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Content"
                  value={syllabus.content}
                  onChange={(e) => setSyllabus({ ...syllabus, content: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Duration</InputLabel>
                  <Select
                    value={syllabus.duration}
                    onChange={(e) => setSyllabus({ ...syllabus, duration: e.target.value })}
                  >
                    {durations.map((duration, index) => (
                      <MenuItem key={index} value={duration}>{duration}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddSyllabus}
              style={{ marginTop: '16px' }}
            >
              {editIndex !== null ? 'Update Syllabus' : 'Add Syllabus'}
            </Button>
          </CardContent>
        </Card>
        <Card style={{ marginTop: '16px' }}>
          <CardContent>
            <Typography variant="h6" className='mb-12'>Syllabus List</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center" className='justify-center items-center'>
                  <Grid item xs={4}>
                    <Typography><strong>Title</strong></Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography><strong>Content</strong></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography><strong>Duration</strong></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography><strong>Actions</strong></Typography>
                  </Grid>
                </Grid>
              </Grid>
              {syllabi.map((syllabus, index) => (
                <Grid container spacing={2} key={syllabus.id} alignItems="center" style={{ marginBottom: '16px' }}>
                  <Grid item xs={4}>
                    <Typography>{syllabus.title}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>{syllabus.content}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>{syllabus.duration}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton onClick={() => handleEditSyllabus(index)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteSyllabus(index)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default SyllabusManagement;