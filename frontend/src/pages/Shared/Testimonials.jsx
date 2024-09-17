import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { Star } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'This platform has greatly helped me advance my career. The courses are well-structured and the support team is fantastic!',
    avatar: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'John Smith',
    text: 'An excellent resource for learning new skills. The interactive courses and knowledgeable instructors make learning enjoyable.',
    avatar: 'https://i.pravatar.cc/100?img=2'
  },
  {
    name: 'Emily Johnson',
    text: 'A game-changer for anyone looking to improve their skills. The course materials are comprehensive and the community is very supportive.',
    avatar: 'https://i.pravatar.cc/100?img=3'
  },
];

function Testimonials() {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center" style={{marginBottom:'30px'}}>What Our Students Say</Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar src={testimonial.avatar} />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body1" paragraph>{testimonial.text}</Typography>
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Testimonials;
