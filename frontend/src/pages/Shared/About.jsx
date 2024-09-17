import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
// import undraw from './assets/img/undraw.png'
import undraw from '../../assets/Images/undraw.png'
function App() {
  return (
    <div style={{ padding: '4rem' }}>
      <Typography variant="h4" gutterBottom align='center' className='font-bold'>About Us</Typography>
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom align='center'>Our Mission</Typography>
              <Typography variant="body1" paragraph>
                At our e-learning platform, our mission is to make education accessible and engaging for everyone. 
                We offer a wide range of courses designed to help you develop new skills, advance your career, and 
                achieve your personal goals. Our platform is built on the principles of flexibility, interactivity, 
                and support, ensuring that you have the best learning experience possible.
              </Typography>
              <Typography variant="h5" gutterBottom align='center' style={{ marginTop: '2rem' }}>Our Values</Typography>
              <Typography variant="body1" paragraph>
                We are committed to providing high-quality content, fostering a supportive community, and continuously 
                improving our offerings. Our values are centered around innovation, inclusivity, and excellence, and 
                we strive to reflect these in everything we do. Join us on our journey to transform the future of education.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={undraw}
            alt="About Us Illustration"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
