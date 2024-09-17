
import React from 'react';
import { Typography, Paper, Divider } from '@mui/material';
import CourseIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/People';
import TestIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart'; // Example icon for charts
import NotificationsIcon from '@mui/icons-material/Notifications'; // Example icon for notifications

const data = {
  courses: 120,  // Example data, replace with actual data
  users: 350,    // Example data, replace with actual data
  tests: 50      // Example data, replace with actual data
};

const AdminDashboard = () => {
  return (
    <div className="mt-24 dark:bg-black px-4"> {/* Added padding */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 -ml-60"> {/* Added negative margin-left */}
        {/* Key Metrics Overview */}
        <div className="bg-[#93C5FD] p-4 rounded-lg shadow-md flex items-center dark:bg-teal-800">
          <CourseIcon className="text-black dark:text-white text-4xl mr-4" />
          <div>
            <Typography variant="h5" component="div" className="text-black dark:text-white">
              {data.courses}
            </Typography>
            <Typography variant="body2" className="text-black dark:text-white">
              Courses Available
            </Typography>
          </div>
        </div>
        <div className="bg-[#93C5FD] p-4 rounded-lg shadow-md flex items-center dark:bg-teal-800">
          <UserIcon className="text-black dark:text-white text-4xl mr-4" />
          <div>
            <Typography variant="h5" component="div" className="text-black dark:text-white">
              {data.users}
            </Typography>
            <Typography variant="body2" className="text-black dark:text-white">
              Users Available
            </Typography>
          </div>
        </div>
        <div className="bg-[#93C5FD] p-4 rounded-lg shadow-md flex items-center dark:bg-teal-800">
          <TestIcon className="text-black dark:text-white text-4xl mr-4" />
          <div>
            <Typography variant="h5" component="div" className="text-black dark:text-white">
              {data.tests}
            </Typography>
            <Typography variant="body2" className="text-black dark:text-white">
              Tests Issued
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mb-8 -ml-40">
        {/* Recent Activity */}
        <Paper className="p-4 bg-gray-100 dark:bg-teal-800 shadow-md -ml-4"> {/* Added negative margin-left */}
          <Typography variant="h6" gutterBottom className="text-black dark:text-white">
            Recent Activity
          </Typography>
          <Divider className="mb-2" />
          <Typography variant="body2" className="text-black dark:text-white">
            - Added new courses: 5
            <br />
            - New users registered: 10
            <br />
            - New tests created: 3
          </Typography>
        </Paper>

        {/* System Health & Notifications */}
        <Paper className="p-4 bg-gray-100 dark:bg-teal-800 shadow-md -ml-4"> {/* Added negative margin-left */}
          <Typography variant="h6" gutterBottom className="text-black dark:text-white">
            System Notifications
          </Typography>
          <Divider className="mb-2" />
          <Typography variant="body2" className="text-black dark:text-white">
            <NotificationsIcon className="inline mr-2" />
            - System update scheduled for tomorrow.
            <br />
            <NotificationsIcon className="inline mr-2" />
            - Maintenance window on Friday.
          </Typography>
        </Paper>

        {/* Performance Metrics */}
        <Paper className="p-4 bg-gray-100 dark:bg-teal-800 shadow-md -ml-4"> {/* Added negative margin-left */}
          <Typography variant="h6" gutterBottom className="text-black dark:text-white">
            Performance Metrics
          </Typography>
          <Divider className="mb-2" />
          <Typography variant="body2" className="text-black dark:text-white">
            <BarChartIcon className="inline mr-2" />
            - Daily active users: 200
            <br />
            <BarChartIcon className="inline mr-2" />
            - Course completion rate: 75%
          </Typography>
        </Paper>

        {/* Upcoming Events */}
        <Paper className="p-4 bg-gray-100 dark:bg-teal-800 shadow-md -ml-4"> {/* Added negative margin-left */}
          <Typography variant="h6" gutterBottom className="text-black dark:text-white">
            Upcoming Events
          </Typography>
          <Divider className="mb-2" />
          <Typography variant="body2" className="text-black dark:text-white">
            - Test on Mathematics: July 30, 2024
            <br />
            - Webinar on Advanced JavaScript: August 2, 2024
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default AdminDashboard;
