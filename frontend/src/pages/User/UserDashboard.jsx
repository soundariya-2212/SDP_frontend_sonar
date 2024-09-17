// import React, { useState } from 'react';
// import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
// import { useSpring, animated } from 'react-spring';
// const mockData = {
//   enrolledCourses: 5,
//   completionLevels: [
//     { course: 'React Basics', completion: '80%', lastTestDate: '2024-07-15' },
//     { course: 'Advanced React', completion: '60%', lastTestDate: '2024-07-20' },
//     { course: 'JavaScript Fundamentals', completion: '90%', lastTestDate: '2024-07-25' },
//     { course: 'UI/UX Design', completion: '70%', lastTestDate: '2024-07-10' },
//     { course: 'Backend Development', completion: '50%', lastTestDate: '2024-07-22' }
//   ],
//   additionalInfo: {
//     totalTestsTaken: 12,
//     upcomingTests: [
//       { course: 'React Basics', date: '2024-08-01' },
//       { course: 'Advanced React', date: '2024-08-15' }
//     ],
//     achievements: [
//       { title: 'Completed 5 Courses', date: '2024-07-25' },
//       { title: 'Passed React Basics Exam', date: '2024-07-10' }
//     ]
//   }
// };

// function UserDashboard() {
//   const [flipped, setFlipped] = useState(false);

//   const { transform, opacity } = useSpring({
//     transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
//     opacity: flipped ? 0.5 : 1,
//     config: { tension: 200, friction: 20 }
//   });

//   const handleFlip = () => setFlipped(!flipped);

//   return (
//     <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <Typography variant="h4" gutterBottom>
//         User Dashboard
//       </Typography>

//       <Card
//         style={{ marginBottom: '16px', width: '100%', maxWidth: '600px', backgroundColor: '#90caf9', cursor: 'pointer' }}
//         onClick={handleFlip}
//       >
//         <CardContent>
//           <animated.div style={{ transform, opacity, position: 'relative' }}>
//             <Typography variant="h6">Total Enrolled Courses</Typography>
//             <Typography variant="h4">{mockData.enrolledCourses}</Typography>
//           </animated.div>
//           <animated.div
//             style={{
//               transform: transform.to(t => `${t} rotateY(180deg)`),
//               opacity: opacity.to(o => 1 - o),
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundColor: '#2196F3',
//               color: 'white',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: '4px'
//             }}
//           >
//             <Typography variant="h6">Swipe to View Details</Typography>
//           </animated.div>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Course Completion Levels
//       </Typography>

//       <Grid container spacing={2}>
//         {mockData.completionLevels.map((level, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Card style={{ marginBottom: '16px', backgroundColor: '#90caf9' }}>
//               <CardContent>
//                 <Typography variant="h6">{level.course}</Typography>
//                 <Typography>Completion Level: {level.completion}</Typography>
//                 <Typography>Last Test Date: {level.lastTestDate}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Divider style={{ margin: '16px 0', width: '100%', maxWidth: '600px' }} />

//       <Typography variant="h6">Additional Information</Typography>

//       <Typography variant="h5" gutterBottom>Upcoming Tests</Typography>
//       <Grid container spacing={2}>
//         {mockData.additionalInfo.upcomingTests.map((test, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Card style={{ marginBottom: '16px', backgroundColor: '#90caf9' }}>
//               <CardContent>
//                 <Typography variant="h6">{test.course}</Typography>
//                 <Typography>Date: {test.date}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Typography variant="h5" gutterBottom>Achievements</Typography>
//       <Grid container spacing={2}>
//         {mockData.additionalInfo.achievements.map((achievement, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Card style={{ marginBottom: '16px', backgroundColor: '#90caf9' }}>
//               <CardContent>
//                 <Typography variant="h6">{achievement.title}</Typography>
//                 <Typography>Date: {achievement.date}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default UserDashboard;


import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const mockData = {
  enrolledCourses: 5,
  completionLevels: [
    { course: 'React Basics', completion: '80%', lastTestDate: '2024-07-15' },
    { course: 'Advanced React', completion: '60%', lastTestDate: '2024-07-20' },
    { course: 'JavaScript Fundamentals', completion: '90%', lastTestDate: '2024-07-25' },
    { course: 'UI/UX Design', completion: '70%', lastTestDate: '2024-07-10' },
    { course: 'Backend Development', completion: '50%', lastTestDate: '2024-07-22' }
  ],
  additionalInfo: {
    totalTestsTaken: 12,
    upcomingTests: [
      { course: 'React Basics', date: '2024-08-01' },
      { course: 'Advanced React', date: '2024-08-15' }
    ],
    achievements: [
      { title: 'Completed 5 Courses', date: '2024-07-25' },
      { title: 'Passed React Basics Exam', date: '2024-07-10' }
    ]
  }
};

function UserDashboard() {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    opacity: flipped ? 0.5 : 1,
    config: { tension: 200, friction: 20 }
  });

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginLeft:'-160px',marginTop:'50px' }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>

      <Card
        style={{ marginBottom: '16px', width: '100%', maxWidth: '600px', backgroundColor: '#90caf9', cursor: 'pointer' }}
        onClick={handleFlip}
      >
        <CardContent>
          <animated.div style={{ transform, opacity, position: 'relative' }}>
            <Typography variant="h6">Total Enrolled Courses</Typography>
            <Typography variant="h4">{mockData.enrolledCourses}</Typography>
          </animated.div>
          <animated.div
            style={{
              transform: transform.to(t => `${t} rotateY(180deg)`),
              opacity: opacity.to(o => 1 - o),
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#2196F3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px'
            }}
          >
            <Typography variant="h6">Swipe to View Details</Typography>
          </animated.div>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom>
        Course Completion Levels:
      </Typography>

      <Grid container spacing={2}>
        {mockData.completionLevels.map((level, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card style={{ marginBottom: '16px', backgroundColor: '#90caf9' }}>
              <CardContent>
                <Typography variant="h6">{level.course}</Typography>
                <Typography>Completion Level: {level.completion}</Typography>
                <Typography>Last Test Date: {level.lastTestDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider style={{ margin: '16px 0', width: '100%', maxWidth: '600px' }} />

      <Typography variant="h4">Additional Information:</Typography>

      <Typography variant="h4" gutterBottom>Upcoming Tests:</Typography>
      <Grid container spacing={2}>
        {mockData.additionalInfo.upcomingTests.map((test, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card style={{ marginBottom: '16px', backgroundColor: '#90caf9' }}>
              <CardContent>
                <Typography variant="h6">{test.course}</Typography>
                <Typography>Date: {test.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>Achievements:</Typography>
      <Grid container spacing={2}>
        {mockData.additionalInfo.achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card style={{ marginBottom: '16px', backgroundColor: '#90caf9' }}>
              <CardContent>
                <Typography variant="h6">{achievement.title}</Typography>
                <Typography>Date: {achievement.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserDashboard;

