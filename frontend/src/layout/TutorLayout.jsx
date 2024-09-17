import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Modal,
  Box,
  CircularProgress,
  Button,
  MenuItem,
  Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AssessmentIcon from '@mui/icons-material/Assessment';
import UploadIcon from '@mui/icons-material/Upload';
import CourseIcon from '@mui/icons-material/Book';
import ListIcon from '@mui/icons-material/List';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import TrackingProgress from '../pages/Tutor/TrackingProgress';
import UploadMaterials from '../pages/Tutor/UploadMaterials';
import TutorDashboard from '../pages/Tutor/TutorDashboard';
import CourseManagement from '../pages/Tutor/CourseManagement';
import Enrollments from '../pages/Tutor/Enrollments';
import LearningMaterials from '../pages/Tutor/LearningMaterials';

const drawerWidth = 240;

function TutorLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('tutor-dashboard');
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [userModalOpen, setUserModalOpen] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const id = localStorage.getItem('userId');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  const handleProfileClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/v1/users/${id}`); // Replace with your API endpoint
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Failed to fetch user details', error);
    } finally {
      setLoading(false);
      setUserModalOpen(true);
    }
    handleMenuClose();
  };

  const handleUserModalClose = () => {
    setUserModalOpen(false);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="black"
          >
            <Avatar src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="Profile" sx={{ width: 30, height: 30 }} />
          </IconButton>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          style={{
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: 'white',
          }}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
        >
          <div style={{ width: drawerWidth, padding: '16px', backgroundColor: 'white' }}>
            <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', fontWeight: 'bold', marginLeft: '20px' }}>
              Instructor Dashboard
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
              {[
                { name: 'Tracking Progress', icon: <AssessmentIcon />, section: 'tracking-progress' },
                { name: 'Upload Materials', icon: <UploadIcon />, section: 'upload-materials' },
                { name: 'Course Management', icon: <CourseIcon />, section: 'course-management' },
                { name: 'Enrollments', icon: <ListIcon />, section: 'enrollments' },
                // { name: 'Learning Materials', icon: <DescriptionIcon />, section: 'learning-materials' },
              ].map((item) => (
                <React.Fragment key={item.section}>
                  <ListItem
                    button
                    onClick={() => handleSectionChange(item.section)}
                    style={{
                      marginBottom: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: '2px solid black',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {item.icon}
                    {drawerOpen && <ListItemText primary={item.name} style={{ marginLeft: '16px' }} />}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '0',
                      width: '100%',
                      height: '4px',
                      backgroundColor: 'black',
                      borderRadius: '4px',
                      transition: 'transform 0.3s ease-in-out',
                      transform: activeSection === item.section ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }} />
                  </ListItem>
                  <Divider style={{ margin: '8px 0' }} />
                </React.Fragment>
              ))}
            </List>
          </div>
        </Drawer>
      </nav>
      <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
        {activeSection === 'tutor-dashboard' && <TutorDashboard />}
        {activeSection === 'tracking-progress' && <TrackingProgress />}
        {activeSection === 'upload-materials' && <UploadMaterials />}
        {activeSection === 'course-management' && <CourseManagement />}
        {activeSection === 'enrollments' && <Enrollments />}
        {/* {activeSection === 'learning-materials' && <LearningMaterials />} */}
      </main>
      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <ModeToggle />
      </div>
      <Modal
        open={userModalOpen}
        onClose={handleUserModalClose}
        aria-labelledby="user-modal-title"
        aria-describedby="user-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
          }}
        >
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Typography id="user-modal-title" variant="h6" component="h2">
                User Profile
              </Typography>
              <Divider sx={{ my: 2 }} />
              {userDetails ? (
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    Name: {userDetails.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Email: {userDetails.email}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Role: {userDetails.role}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body1">No user details available.</Typography>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleUserModalClose}>
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default TutorLayout;
