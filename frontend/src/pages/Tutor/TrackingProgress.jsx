import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  CircularProgress
} from '@mui/material';
import { PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const COLORS = ['#ff7300', '#387908', '#1f77b4', '#d62728', '#9467bd'];

const progressData = [
  { name: 'John Doe', course: 'Introduction to Programming', progress: 75 },
  { name: 'Jane Smith', course: 'Data Structures and Algorithms', progress: 85 },
  { name: 'Emily Johnson', course: 'Web Development Fundamentals', progress: 90 },
];

const overallCompletionData = [
  { name: 'Completed', value: 80 },
  { name: 'Remaining', value: 20 },
];

function TrackingProgress() {
  return (
    <div style={{ padding: '20px', marginTop: '80px',marginLeft:'-160px' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#3f51b5' }}>
        Student Progress Tracking
      </Typography>
      <Typography variant="body1" paragraph>
        Monitor the progress of your students and ensure they are on track with their coursework.
      </Typography>
      
      <Grid container spacing={3}>
        {/* Overall Course Completion */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#1976d2' }}>Overall Course Completion</Typography>
              <Divider />
              <PieChart width={300} height={300}>
                <Pie
                  data={overallCompletionData}
                  dataKey="value"
                  outerRadius={120}
                  fill="#8884d8"
                >
                  {overallCompletionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
              <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>Overall Completion: 80%</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Student Progress */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#388e3c' }}>Student Progress</Typography>
              <Divider />
              <BarChart
                width={500}
                height={300}
                data={progressData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default TrackingProgress;
