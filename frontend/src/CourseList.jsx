// // import React, { useState, useEffect } from 'react';
// // import { Grid, Card, CardContent, Typography, Button, IconButton, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// // import { Search as SearchIcon } from '@mui/icons-material';
// // import { Link } from 'react-router-dom';

// // const CourseList = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [search, setSearch] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [difficulty, setDifficulty] = useState('');
// //   const [sort, setSort] = useState('Most Popular');
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch('/Coursedata.json')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setCourses(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching courses:', error);
// //         setError('Failed to load courses.');
// //         setLoading(false);
// //       });
// //   }, []);

// //   const filteredCourses = courses
// //     .filter(course =>
// //       course.title.toLowerCase().includes(search.toLowerCase()) &&
// //       (category === '' || course.category === category) &&
// //       (difficulty === '' || course.difficulty === difficulty)
// //     )
// //     .sort((a, b) => {
// //       if (sort === 'Most Popular') return b.rating - a.rating;
// //       if (sort === 'Newest') return new Date(b.date) - new Date(a.date);
// //       if (sort === 'Highest Rated') return b.rating - a.rating;
// //       return 0;
// //     });

// //   return (
// //     <div className="p-4">
// //       {/* Centered Search Bar */}
// //       <div className="flex justify-center mb-4 mt-16"> {/* Adjust margin-top to account for navbar */}
// //         <TextField
// //           label="Search"
// //           variant="outlined"
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           InputProps={{
// //             endAdornment: (
// //               <IconButton>
// //                 <SearchIcon />
// //               </IconButton>
// //             ),
// //           }}
// //           className="w-full max-w-md"
// //         />
// //       </div>

// //       {/* Filtering Options */}
// //       <div className="mb-4">
// //         <div className="flex flex-wrap justify-center gap-4">
// //           <FormControl variant="outlined" className="w-full max-w-xs">
// //             <InputLabel>Category</InputLabel>
// //             <Select
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //               label="Category"
// //             >
// //               <MenuItem value="">All</MenuItem>
// //               <MenuItem value="Programming">Programming</MenuItem>
// //               <MenuItem value="Design">Design</MenuItem>
// //               <MenuItem value="Business">Business</MenuItem>
// //               <MenuItem value="Data Science">Data Science</MenuItem>
// //               <MenuItem value="Marketing">Marketing</MenuItem>
// //             </Select>
// //           </FormControl>
// //           <FormControl variant="outlined" className="w-full max-w-xs">
// //             <InputLabel>Difficulty</InputLabel>
// //             <Select
// //               value={difficulty}
// //               onChange={(e) => setDifficulty(e.target.value)}
// //               label="Difficulty"
// //             >
// //               <MenuItem value="">All</MenuItem>
// //               <MenuItem value="Beginner">Beginner</MenuItem>
// //               <MenuItem value="Intermediate">Intermediate</MenuItem>
// //               <MenuItem value="Advanced">Advanced</MenuItem>
// //             </Select>
// //           </FormControl>
// //           <FormControl variant="outlined" className="w-full max-w-xs">
// //             <InputLabel>Sort By</InputLabel>
// //             <Select
// //               value={sort}
// //               onChange={(e) => setSort(e.target.value)}
// //               label="Sort By"
// //             >
// //               <MenuItem value="Most Popular">Most Popular</MenuItem>
// //               <MenuItem value="Newest">Newest</MenuItem>
// //               <MenuItem value="Highest Rated">Highest Rated</MenuItem>
// //             </Select>
// //           </FormControl>
// //         </div>
// //       </div>

// //       {/* Display Loading or Error Messages */}
// //       {loading ? (
// //         <Typography>Loading...</Typography>
// //       ) : error ? (
// //         <Typography color="error">{error}</Typography>
// //       ) : (
// //         <Grid container spacing={3}>
// //           {filteredCourses.length > 0 ? (
// //             filteredCourses.map((course) => (
// //               <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// //                 <Card>
// //                   <CardContent>
// //                     <Typography variant="h6" component="div">
// //                       {course.title}
// //                     </Typography>
// //                     <Typography color="textSecondary">
// //                       Instructor: {course.instructor}
// //                     </Typography>
// //                     <Typography color="textSecondary">
// //                       Category: {course.category}
// //                     </Typography>
// //                     <Typography color="textSecondary">
// //                       Difficulty: {course.difficulty}
// //                     </Typography>
// //                     <Typography color="textSecondary">
// //                       Rating: {course.rating} / 5
// //                     </Typography>
// //                     <Typography variant="body2" component="p">
// //                       {course.shortDescription}
// //                     </Typography>
// //                     <Link to={`/course/${course.id}`}>
// //                       <Button variant="contained" color="primary" className="mt-2">
// //                         View Details
// //                       </Button>
// //                     </Link>
// //                   </CardContent>
// //                 </Card>
// //               </Grid>
// //             ))
// //           ) : (
// //             <Typography>No courses found.</Typography>
// //           )}
// //         </Grid>
// //       )}
// //     </div>
// //   );
// // };

// // export default CourseList;
// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, Typography, Button, IconButton, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// import { Search as SearchIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState('');
//   const [category, setCategory] = useState('');
//   const [difficulty, setDifficulty] = useState('');
//   const [sort, setSort] = useState('Most Popular');
//   const [loading, setLoading] = useState(true);

//   // Expanded static data for testing
//   const staticCourses = [
//     { id: 1, title: 'Introduction to Programming', instructor: 'Alice Smith', category: 'Programming', difficulty: 'Beginner', rating: 4.5, date: '2024-01-01', shortDescription: 'Learn the basics of programming.' },
//   { id: 2, title: 'Advanced Design Principles', instructor: 'Bob Johnson', category: 'Design', difficulty: 'Intermediate', rating: 4.7, date: '2024-02-01', shortDescription: 'Explore advanced design techniques.' },
//   { id: 3, title: 'Digital Marketing 101', instructor: 'Charlie Davis', category: 'Marketing', difficulty: 'Beginner', rating: 4.2, date: '2024-03-01', shortDescription: 'An introduction to digital marketing strategies.' },
//   { id: 4, title: 'Data Science with Python', instructor: 'Dana Lee', category: 'Data Science', difficulty: 'Advanced', rating: 4.8, date: '2024-04-01', shortDescription: 'Learn data science using Python.' },
//   { id: 5, title: 'Fundamentals of Graphic Design', instructor: 'Eva Carter', category: 'Design', difficulty: 'Beginner', rating: 4.3, date: '2024-05-01', shortDescription: 'Master the fundamentals of graphic design.' },
//   { id: 6, title: 'Web Development Bootcamp', instructor: 'Frank Harris', category: 'Programming', difficulty: 'Intermediate', rating: 4.6, date: '2024-06-01', shortDescription: 'A comprehensive bootcamp on web development.' },
//   { id: 7, title: 'Business Strategy Essentials', instructor: 'Grace Martin', category: 'Business', difficulty: 'Intermediate', rating: 4.4, date: '2024-07-01', shortDescription: 'Learn essential business strategies for success.' },
//   { id: 8, title: 'Machine Learning for Everyone', instructor: 'Henry Scott', category: 'Data Science', difficulty: 'Beginner', rating: 4.9, date: '2024-08-01', shortDescription: 'A beginner-friendly course on machine learning.' },
//   { id: 9, title: 'Advanced SEO Techniques', instructor: 'Ivy Young', category: 'Marketing', difficulty: 'Advanced', rating: 4.5, date: '2024-09-01', shortDescription: 'Discover advanced SEO techniques to boost your rankings.' },
//   { id: 10, title: 'Introduction to JavaScript', instructor: 'Jack Brown', category: 'Programming', difficulty: 'Beginner', rating: 4.2, date: '2024-10-01', shortDescription: 'An introduction to JavaScript programming.' },
//   { id: 11, title: 'UX/UI Design Fundamentals', instructor: 'Kara Lee', category: 'Design', difficulty: 'Intermediate', rating: 4.6, date: '2024-11-01', shortDescription: 'Understand the fundamentals of UX/UI design.' },
//   { id: 12, title: 'Entrepreneurship Basics', instructor: 'Liam Taylor', category: 'Business', difficulty: 'Beginner', rating: 4.3, date: '2024-12-01', shortDescription: 'Get started with the basics of entrepreneurship.' },
//   { id: 13, title: 'Big Data Analysis with Hadoop', instructor: 'Mia Wilson', category: 'Data Science', difficulty: 'Advanced', rating: 4.7, date: '2025-01-01', shortDescription: 'Analyze big data using Hadoop.' },
//   { id: 14, title: 'Social Media Marketing', instructor: 'Noah White', category: 'Marketing', difficulty: 'Intermediate', rating: 4.4, date: '2025-02-01', shortDescription: 'Learn effective social media marketing strategies.' },
//   { id: 15, title: 'Introduction to SQL', instructor: 'Olivia Clark', category: 'Programming', difficulty: 'Beginner', rating: 4.5, date: '2025-03-01', shortDescription: 'Learn the basics of SQL for database management.' }
//   ];

//   useEffect(() => {
//     // Simulate fetching data with a delay
//     setTimeout(() => {
//       setCourses(staticCourses);
//       setLoading(false);
//     }, 1000); // Simulate 1-second delay
//   }, []);

//   const filteredCourses = courses
//     .filter(course =>
//       course.title.toLowerCase().includes(search.toLowerCase()) &&
//       (category === '' || course.category === category) &&
//       (difficulty === '' || course.difficulty === difficulty)
//     )
//     .sort((a, b) => {
//       if (sort === 'Most Popular') return b.rating - a.rating;
//       if (sort === 'Newest') return new Date(b.date) - new Date(a.date);
//       if (sort === 'Highest Rated') return b.rating - a.rating;
//       return 0;
//     });

//   return (
//     <div className="p-4">
//       {/* Centered Search Bar */}
//       <div className="flex justify-center mb-4 mt-16"> {/* Adjust margin-top to account for navbar */}
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <IconButton>
//                 <SearchIcon />
//               </IconButton>
//             ),
//           }}
//           className="w-full max-w-md"
//         />
//       </div>

//       {/* Filtering Options */}
//       <div className="mb-4">
//         <div className="flex flex-wrap justify-center gap-4">
//           <FormControl variant="outlined" className="w-full max-w-xs">
//             <InputLabel>Category</InputLabel>
//             <Select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               label="Category"
//             >
//               <MenuItem value="">All</MenuItem>
//               <MenuItem value="Programming">Programming</MenuItem>
//               <MenuItem value="Design">Design</MenuItem>
//               <MenuItem value="Business">Business</MenuItem>
//               <MenuItem value="Data Science">Data Science</MenuItem>
//               <MenuItem value="Marketing">Marketing</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl variant="outlined" className="w-full max-w-xs">
//             <InputLabel>Difficulty</InputLabel>
//             <Select
//               value={difficulty}
//               onChange={(e) => setDifficulty(e.target.value)}
//               label="Difficulty"
//             >
//               <MenuItem value="">All</MenuItem>
//               <MenuItem value="Beginner">Beginner</MenuItem>
//               <MenuItem value="Intermediate">Intermediate</MenuItem>
//               <MenuItem value="Advanced">Advanced</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl variant="outlined" className="w-full max-w-xs">
//             <InputLabel>Sort By</InputLabel>
//             <Select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               label="Sort By"
//             >
//               <MenuItem value="Most Popular">Most Popular</MenuItem>
//               <MenuItem value="Newest">Newest</MenuItem>
//               <MenuItem value="Highest Rated">Highest Rated</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//       </div>

//       {/* Display Loading Message */}
//       {loading ? (
//         <Typography>Loading...</Typography>
//       ) : (
//         <Grid container spacing={4}> {/* Increased spacing for rows */}
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
//                 <Card style={{ height: '400px' }}> {/* Fixed height for cards */}
//                   <CardContent>
//                     <Typography variant="h6" component="div">
//                       {course.title}
//                     </Typography>
//                     <Typography color="textSecondary">
//                       Instructor: {course.instructor}
//                     </Typography>
//                     <Typography color="textSecondary">
//                       Category: {course.category}
//                     </Typography>
//                     <Typography color="textSecondary">
//                       Difficulty: {course.difficulty}
//                     </Typography>
//                     <Typography color="textSecondary">
//                       Rating: {course.rating} / 5
//                     </Typography>
//                     <Typography variant="body2" component="p">
//                       {course.shortDescription}
//                     </Typography>
//                     <Link to={`/course/${course.id}`}>
//                       <Button 
//                         variant="contained" 
//                         style={{ backgroundColor: '#93C5FD' }} // Button color
//                         className="mt-2"
//                       >
//                         View Details
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography>No courses found.</Typography>
//           )}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default CourseList;


import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, IconButton, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [sort, setSort] = useState('Most Popular');
  const [loading, setLoading] = useState(true);

  // Static data for testing
  const staticCourses = [
    { id: 1, title: 'Introduction to Programming', instructor: 'Alice Smith', category: 'Programming', difficulty: 'Beginner', rating: 4.5, date: '2024-01-01', shortDescription: 'Learn the basics of programming.' },
    { id: 2, title: 'Advanced Design Principles', instructor: 'Bob Johnson', category: 'Design', difficulty: 'Intermediate', rating: 4.7, date: '2024-02-01', shortDescription: 'Explore advanced design techniques.' },
    { id: 3, title: 'Digital Marketing 101', instructor: 'Charlie Davis', category: 'Marketing', difficulty: 'Beginner', rating: 4.2, date: '2024-03-01', shortDescription: 'An introduction to digital marketing strategies.' },
    { id: 4, title: 'Data Science with Python', instructor: 'Dana Lee', category: 'Data Science', difficulty: 'Advanced', rating: 4.8, date: '2024-04-01', shortDescription: 'Learn data science using Python.' },
    { id: 5, title: 'Fundamentals of Graphic Design', instructor: 'Eva Carter', category: 'Design', difficulty: 'Beginner', rating: 4.3, date: '2024-05-01', shortDescription: 'Master the fundamentals of graphic design.' },
    { id: 6, title: 'Web Development Bootcamp', instructor: 'Frank Harris', category: 'Programming', difficulty: 'Intermediate', rating: 4.6, date: '2024-06-01', shortDescription: 'A comprehensive bootcamp on web development.' },
    { id: 7, title: 'Business Strategy Essentials', instructor: 'Grace Martin', category: 'Business', difficulty: 'Intermediate', rating: 4.4, date: '2024-07-01', shortDescription: 'Learn essential business strategies for success.' },
    { id: 8, title: 'Machine Learning for Everyone', instructor: 'Henry Scott', category: 'Data Science', difficulty: 'Beginner', rating: 4.9, date: '2024-08-01', shortDescription: 'A beginner-friendly course on machine learning.' },
    { id: 9, title: 'Advanced SEO Techniques', instructor: 'Ivy Young', category: 'Marketing', difficulty: 'Advanced', rating: 4.5, date: '2024-09-01', shortDescription: 'Discover advanced SEO techniques to boost your rankings.' },
    { id: 10, title: 'Introduction to JavaScript', instructor: 'Jack Brown', category: 'Programming', difficulty: 'Beginner', rating: 4.2, date: '2024-10-01', shortDescription: 'An introduction to JavaScript programming.' },
    { id: 11, title: 'UX/UI Design Fundamentals', instructor: 'Kara Lee', category: 'Design', difficulty: 'Intermediate', rating: 4.6, date: '2024-11-01', shortDescription: 'Understand the fundamentals of UX/UI design.' },
    { id: 12, title: 'Entrepreneurship Basics', instructor: 'Liam Taylor', category: 'Business', difficulty: 'Beginner', rating: 4.3, date: '2024-12-01', shortDescription: 'Get started with the basics of entrepreneurship.' },
    { id: 13, title: 'Big Data Analysis with Hadoop', instructor: 'Mia Wilson', category: 'Data Science', difficulty: 'Advanced', rating: 4.7, date: '2025-01-01', shortDescription: 'Analyze big data using Hadoop.' },
    { id: 14, title: 'Social Media Marketing', instructor: 'Noah White', category: 'Marketing', difficulty: 'Intermediate', rating: 4.4, date: '2025-02-01', shortDescription: 'Learn effective social media marketing strategies.' },
    { id: 15, title: 'Introduction to SQL', instructor: 'Olivia Clark', category: 'Programming', difficulty: 'Beginner', rating: 4.5, date: '2025-03-01', shortDescription: 'Learn the basics of SQL for database management.' },
    { id: 16, title: 'Advanced Python for Data Science', instructor: 'Paul Lewis', category: 'Data Science', difficulty: 'Advanced', rating: 4.8, date: '2024-04-15', shortDescription: 'Deep dive into Python for data science.' }
  ];

  useEffect(() => {
    // Simulate fetching data with a delay
    setTimeout(() => {
      setCourses(staticCourses);
      setLoading(false);
    }, 1000); // Simulate 1-second delay
  }, []);

  const filteredCourses = courses
    .filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === '' || course.category === category) &&
      (difficulty === '' || course.difficulty === difficulty)
    )
    .sort((a, b) => {
      if (sort === 'Most Popular') return b.rating - a.rating;
      if (sort === 'Newest') return new Date(b.date) - new Date(a.date);
      if (sort === 'Highest Rated') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="p-4 dark:text-white ml-20">
      {/* Centered Search Bar */}
      <div className="flex justify-center mb-4 mt-16"> {/* Adjust margin-top to account for navbar */}
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          className="w-full max-w-md"
        />
      </div>

      {/* Filtering Options */}
      <div className="mb-4">
        <div className="flex flex-wrap justify-center gap-4">
          <FormControl variant="outlined" className="w-full max-w-xs">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Programming">Programming</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Data Science">Data Science</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className="w-full max-w-xs">
            <InputLabel>Difficulty</InputLabel>
            <Select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              label="Difficulty"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className="w-full max-w-xs">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="Most Popular">Most Popular</MenuItem>
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="Highest Rated">Highest Rated</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Display Loading Message */}
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                <Card sx={{ maxWidth: 300, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography color="black">
                      Instructor: {course.instructor}
                    </Typography>
                    <Typography color="black">
                      Category: {course.category}
                    </Typography>
                    <Typography color="black">
                      Difficulty: {course.difficulty}
                    </Typography>
                    <Typography color="black">
                      Rating: {course.rating} / 5
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      {course.shortDescription}
                    </Typography>
                    <Link to={`/course/${course.id}`}>
                      <Button
                        variant="contained"
                        sx={{ mt: 2, bgcolor: '#93C5FD', color: 'black' ,border:'none'}}
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No courses found.</Typography>
          )}
        </Grid>
      )}
    </div>
  );
};

export default CourseList;

