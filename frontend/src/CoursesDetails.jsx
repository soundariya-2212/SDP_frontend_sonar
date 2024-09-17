import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Card, CardContent, List, ListItem } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CoursesDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/coursesData.json')
      .then(response => response.json())
      .then(data => {
        const foundCourse = data.find(c => c.id === parseInt(id));
        setCourse(foundCourse);
      })
      .catch(error => console.error('Error fetching course details:', error));
  }, [id]);

  if (!course) return <Typography>Loading...</Typography>;

  return (
    <div className="p-4">
      <Link to="/" className="mb-4 inline-block">
        <Button variant="outlined" color="primary" startIcon={<ArrowBackIcon />}>
          Back to Course List
        </Button>
      </Link>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="h6" component="div">
            Instructor: {course.instructor}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Category: {course.category} | Difficulty: {course.difficulty}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Rating: {course.rating} / 5
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Description:</strong> {course.shortDescription}
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Price:</strong> {course.price}
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Schedule:</strong> {course.schedule}
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Prerequisites:</strong> {course.prerequisites}
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Syllabus:</strong>
          </Typography>
          <List>
            {course.syllabus.map((item, index) => (
              <ListItem key={index}>
                {item}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoursesDetails;
