
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
  Menu,
  MenuItem,
  Divider,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserIcon from '@mui/icons-material/People';
import CourseIcon from '@mui/icons-material/Book';
import SyllabusIcon from '@mui/icons-material/Description';
import TestIcon from '@mui/icons-material/Assignment';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import UserManagement from '../pages/Admin/UserManagement';
import CourseManagement from '../pages/Admin/CourseManagement';
import SyllabusManagement from '../pages/Admin/SyllabusManagement';
import TestManagement from '../pages/Admin/TestManagement';
import AdminSettings from '../pages/Admin/AdminSettings';
import { ModeToggle } from '@/components/mode-toggle';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;

function AdminLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('admin-dashboard');
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const isMenuOpen = Boolean(anchorEl);

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
            <Link to="/signin" className='no-underline'><MenuItem onClick={handleMenuClose}>Logout</MenuItem></Link>
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
          open
        >
          <div style={{ width: drawerWidth, padding: '16px', backgroundColor: 'white' }}>
            <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', marginLeft: '25px', fontWeight: 'bold' }}>
              Admin Dashboard
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
              {[
                { name: 'User Management', icon: <UserIcon />, section: 'user-management' },
                // { name: 'Course Management', icon: <CourseIcon />, section: 'course-management' },
                // { name: 'Syllabus Management', icon: <SyllabusIcon />, section: 'syllabus-management' },
                // { name: 'Test Management', icon: <TestIcon />, section: 'test-management' },
                { name: 'Settings', icon: <AccountCircle />, section: 'settings' }
              ].map((item, index) => (
                <React.Fragment key={item.section}>
                  <ListItem
                    button
                    onClick={() => handleSectionChange(item.section)}
                    style={{
                      marginBottom: index < 4 ? '35px' : '0',
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
                  {index < 4 && <Divider style={{ margin: '8px 0' }} />}
                </React.Fragment>
              ))}
            </List>
          </div>
        </Drawer>
      </nav>
      <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
        {activeSection === 'admin-dashboard' && <AdminDashboard />}
        {activeSection === 'user-management' && <UserManagement />}
        {activeSection === 'course-management' && <CourseManagement />}
        {activeSection === 'syllabus-management' && <SyllabusManagement />}
        {activeSection === 'test-management' && <TestManagement />}
        {activeSection === 'settings' && <AdminSettings />}
      </main>
      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <ModeToggle />
      </div>
    </div>
  );
}

export default AdminLayout;
