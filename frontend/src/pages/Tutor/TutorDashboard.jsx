import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider
} from '@mui/material';

function TutorDashboard() {
  return (
    <div style={{ padding: '20px', marginTop: '80px', marginLeft: '-160px' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#3f51b5' }}>
        Welcome Back!
      </Typography>
      <Typography variant="body1" paragraph>
        Get ready to inspire and make a difference today! Check out the latest updates and opportunities to engage with your students.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card style={{ backgroundColor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#1976d2' }}>Quick Stats</Typography>
              <Divider />
              <Typography>Total Courses: 8</Typography>
              <Typography>Students Enrolled: 200</Typography>
              <Typography>Assignments Pending: 5</Typography>
              <Typography>Upcoming Deadlines: 3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card style={{ backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#388e3c' }}>Course Overview</Typography>
              <Divider />
              <Grid container spacing={2}>
                {[
                  { title: 'Introduction to Programming', enrollment: 25, completion: '75%' },
                  { title: 'Data Structures and Algorithms', enrollment: 30, completion: '85%' },
                  { title: 'Web Development Fundamentals', enrollment: 20, completion: '90%' },
                  { title: 'Machine Learning Basics', enrollment: 15, completion: '70%' },
                  { title: 'Database Management Systems', enrollment: 22, completion: '80%' }
                ].map((course, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card style={{ backgroundColor: '#fff' }}>
                      <CardContent>
                        <Typography variant="subtitle1" style={{ color: '#424242' }}>{course.title}</Typography>
                        <Typography>Enrollment: {course.enrollment}</Typography>
                        <Typography>Completion: {course.completion}</Typography>
                        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>View Course</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Typography variant="h6" gutterBottom style={{ color: '#388e3c' }}>Recent Activity</Typography>
      <Paper style={{ padding: '10px', backgroundColor: '#f1f8e9' }}>
        <Typography>New Assignment Posted: "Introduction to Programming: Project 1"</Typography>
        <Typography>Grade Updated for Student John Doe</Typography>
      </Paper>
    </div>
  );
}

export default TutorDashboard;
