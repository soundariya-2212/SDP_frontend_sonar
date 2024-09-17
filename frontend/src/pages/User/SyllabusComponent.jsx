// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle
// } from '@mui/material';

// const syllabusData = [
//   { title: 'Introduction to React', duration: '4 weeks', syllabus: 'This course covers the fundamentals of React, including JSX, components, props, and state management. Students will learn how to build and manage React applications efficiently.' },
//   { title: 'Advanced React', duration: '6 weeks', syllabus: 'Focuses on advanced React concepts like hooks, context API, and performance optimization. The course also covers best practices for building scalable React applications.' },
//   { title: 'JavaScript Fundamentals', duration: '5 weeks', syllabus: 'Explores essential JavaScript concepts such as ES6 features, asynchronous JavaScript, and DOM manipulation. Includes hands-on projects and exercises to solidify understanding.' },
//   { title: 'UI/UX Design', duration: '4 weeks', syllabus: 'Introduces design principles, user research methods, and prototyping techniques. Students will learn how to create intuitive and user-friendly interfaces.' },
//   { title: 'Backend Development', duration: '8 weeks', syllabus: 'Covers server-side development using Node.js and Express. Includes database management, RESTful APIs, and security practices. Designed for those looking to build robust backend systems.' }
// ];

// const SyllabusComponent = () => {
//   const [selectedSyllabus, setSelectedSyllabus] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCardClick = (syllabus) => {
//     setSelectedSyllabus(syllabus);
//   };

//   const handleCloseDialog = () => {
//     setSelectedSyllabus(null);
//   };

//   const filteredData = syllabusData.filter(item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '16px', marginLeft: '-170px', marginTop: '50px' }}>
//       <Typography variant="h4" gutterBottom>Syllabus Overview</Typography>

//       <TextField
//         label="Search"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         onChange={(e) => setSearchTerm(e.target.value)}
//         value={searchTerm}
//       />

//       {/* Syllabus Cards */}
//       <Grid container spacing={2} style={{ marginTop: '20px' }}>
//         {filteredData.map((item, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               style={{ backgroundColor: '#90caf9', cursor: 'pointer' }}
//               onClick={() => handleCardClick(item)}
//             >
//               <CardContent>
//                 <Typography variant="h6">{item.title}</Typography>
//                 <Typography>Duration: {item.duration}</Typography>
//                 <Typography>Syllabus: {item.syllabus.substring(0, 50)}...</Typography> {/* Display a snippet of the syllabus */}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Detailed View Dialog */}
//       <Dialog
//         open={Boolean(selectedSyllabus)}
//         onClose={handleCloseDialog}
//         fullWidth
//         maxWidth="md"
//       >
//         <DialogTitle>{selectedSyllabus?.title}</DialogTitle>
//         <DialogContent>
//           <Typography variant="h6">Duration: {selectedSyllabus?.duration}</Typography>
//           <Typography variant="body1">Syllabus: {selectedSyllabus?.syllabus}</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default SyllabusComponent;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';

const Syllabus = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseDialog = () => {
    setSelectedCourse(null);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!category || course.category === category) &&
    (!difficultyLevel || course.difficultyLevel === difficultyLevel) &&
    (!prerequisites || course.prerequisites.toLowerCase().includes(prerequisites.toLowerCase()))
  );

  return (
    <div style={{ padding: '16px' }} className='mt-28 -ml-36'>
      <Typography variant="h4" gutterBottom>
        Course Titles and Syllabus
      </Typography>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              {/* Replace these options with actual categories from your backend */}
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="Programming">Programming</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Data science">Data science</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Mathematics">Mathematics</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
              <MenuItem value="History">History</MenuItem>
              <MenuItem value="Arts">Arts</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Difficulty Level</InputLabel>
            <Select
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
              label="Difficulty Level"
            >
              {/* Replace these options with actual difficulty levels from your backend */}
              <MenuItem value="">All Levels</MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Prerequisites"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setPrerequisites(e.target.value)}
            value={prerequisites}
          />
        </Grid>
      </Grid>

      {/* Course Cards */}
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                style={{ backgroundColor: '#90caf9', cursor: 'pointer' }}
                onClick={() => handleCardClick(course)}
              >
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography>Syllabus: {course.syllabus.substring(0, 50)}...</Typography> {/* Display a snippet of the syllabus */}
                  <Typography>Difficulty Level: {course.difficultyLevel}</Typography>
                  <Typography>Prerequisites: {course.prerequisites}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No courses available</Typography> // Display a message if no courses are found
        )}
      </Grid>

      {/* Detailed View Dialog */}
      <Dialog
        open={Boolean(selectedCourse)}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>{selectedCourse?.title}</DialogTitle>
        <DialogContent>
          {/* <Typography variant="h6">Duration: {selectedCourse?.duration}</Typography> */}
          <Typography variant="body1">Syllabus: {selectedCourse?.syllabus}</Typography>
          <Typography variant="h6">Difficulty Level: {selectedCourse?.difficultyLevel}</Typography>
          <Typography variant="body1">Prerequisites: {selectedCourse?.prerequisites}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Syllabus;
