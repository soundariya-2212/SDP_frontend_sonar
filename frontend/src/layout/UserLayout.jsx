// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Divider } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import CertificateIcon from '@mui/icons-material/EmojiEvents';
// import PeopleIcon from '@mui/icons-material/People';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import CertificateComponent from '../pages/User/CertificateComponent';
// import EnrollComponent from '../pages/User/EnrollComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <AccountCircle />
//           </IconButton>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 // { name: 'Dashboard', icon: <BookIcon />, section: 'dashboard' },
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 // { name: 'Certificates', icon: <CertificateIcon />, section: 'certificates' },
//                 // { name: 'Enrollments', icon: <PeopleIcon />, section: 'enrollments' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {/* {activeSection === 'certificates' && <CertificateComponent />}
//         {activeSection === 'enrollments' && <EnrollComponent />} */}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;

// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <AccountCircle sx={{ fontSize: 40 }} />
//             </IconButton>
//         <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//           <ModeToggle/>
//         </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;

// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider,
//   Avatar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ fontWeight: activeSection === 'dashboard' ? 'bold' : 'normal' }}>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <Avatar src="/path-to-profile-image.jpg" alt="Profile" sx={{ width: 40, height: 40 }} />
//           </IconButton>
//           <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//             <ModeToggle />
//           </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', fontWeight: 'bold', marginLeft: '20px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;



// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider,
//   Avatar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ fontWeight: activeSection === 'dashboard' ? 'bold' : 'normal' }}>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <Avatar src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="Profile" sx={{ width: 30, height: 30 }} />
//           </IconButton>
//           <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//             <ModeToggle />
//           </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', fontWeight: 'bold', marginLeft: '20px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;


// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider,
//   Avatar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import EventIcon from '@mui/icons-material/Event'; // Import an appropriate icon for Enrollment
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import EnrollmentComponent from '../pages/User/EnrollmentComponent'; // Import the Enrollment component
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ fontWeight: activeSection === 'dashboard' ? 'bold' : 'normal' }}>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <Avatar src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="Profile" sx={{ width: 30, height: 30 }} />
//           </IconButton>
//           <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//             <ModeToggle />
//           </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', fontWeight: 'bold', marginLeft: '20px' }}>
//               Student Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Learning materails', icon: <SchoolIcon />, section: 'seat-availability' },
//                 { name: 'Enrollment', icon: <EventIcon />, section: 'enrollment' }, // Added Enrollment option
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//         {activeSection === 'enrollment' && <EnrollmentComponent />} {/* Added Enrollment component */}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;



// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider,
//   Avatar,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import EventIcon from '@mui/icons-material/Event'; // Import an appropriate icon for Enrollment
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import EnrollmentComponent from '../pages/User/EnrollmentComponent'; // Import the Enrollment component
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [activeSection, setActiveSection] = useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//     setIsMenuOpen(true);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setIsMenuOpen(false);
//   };

//   const handleDialogOpen = () => {
//     // Fetch user details from local storage or API
//     const userId = localStorage.getItem('userId'); // Adjust according to your local storage key
//     const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')); // Adjust according to your storage structure
//     setUserDetails(storedUserDetails); // Set user details for dialog
//     setDialogOpen(true);
//     handleMenuClose(); // Close profile menu
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); 
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ fontWeight: activeSection === 'dashboard' ? 'bold' : 'normal' }}>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <Avatar src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="Profile" sx={{ width: 30, height: 30 }} />
//           </IconButton>
//           <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//             <ModeToggle />
//           </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleDialogOpen}>Profile</MenuItem>
//             <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '20px', fontWeight: 'bold', marginLeft: '20px' }}>
//               Student Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Learning Materials', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem
//                     button
//                     onClick={() => handleSectionChange(item.section)}
//                     style={{
//                       marginBottom: '30px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       borderBottom: '2px solid black', // Black line between items
//                     }}
//                   >
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//         {activeSection === 'enrollment' && <EnrollmentComponent />} {/* Added Enrollment component */}
//       </main>

//       {/* Dialog for User Details */}
//       <Dialog open={dialogOpen} onClose={handleDialogClose}>
//         <DialogTitle>User Profile</DialogTitle>
//         <DialogContent>
//           {userDetails ? (
//             <div>
//               <Typography variant="h6">Name: {userDetails.name}</Typography>
//               <Typography variant="body1">Email: {userDetails.email}</Typography>
//               <Typography variant="body1">Role: {userDetails.role}</Typography>
//               {/* Add more fields as needed */}
//             </div>
//           ) : (
//             <Typography variant="body1">Loading...</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default UserLayout;



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
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event'; // Import an appropriate icon for Enrollment
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import SyllabusComponent from '../pages/User/SyllabusComponent';
import TestComponent from '../pages/User/TestComponent';
import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
import EnrollmentComponent from '../pages/User/EnrollmentComponent'; // Import the Enrollment component
import UserDashboard from '../pages/User/UserDashboard'; 

const drawerWidth = 240;

function UserLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
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
    setMobileOpen(false); // Close drawer on section change
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap style={{ fontWeight: 'bold' }}>
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </Typography>
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
          <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
            <ModeToggle />
          </div>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
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
              Student Dashboard
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
              {[
                // { name: 'Dashboard', icon: <BookIcon />, section: 'dashboard' },
                { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
                { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
                { name: 'Learning Materials', icon: <SchoolIcon />, section: 'seat-availability' },
                { name: 'Enrollment', icon: <EventIcon />, section: 'enrollment' },
              ].map((item) => (
                <React.Fragment key={item.section}>
                  <ListItem
                    button
                    onClick={() => handleSectionChange(item.section)}
                    style={{
                      marginBottom: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      borderBottom: '2px solid black', // Black line between items
                      transition: 'background-color 0.3s, transform 0.2s',
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                        transform: 'scale(1.02)',
                      },
                      backgroundColor: activeSection === item.section ? '#e0e0e0' : 'transparent',
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
        {activeSection === 'dashboard' && <UserDashboard />}
        {activeSection === 'syllabus' && <SyllabusComponent />}
        {activeSection === 'tests' && <TestComponent />}
        {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
        {activeSection === 'enrollment' && <EnrollmentComponent />}
      </main>
    </div>
  );
}

export default UserLayout;
