// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css'; 
// // import {
// //   Facebook as FacebookIcon,
// //   YouTube as YouTubeIcon,
// //   Twitter as TwitterIcon,
// //   LinkedIn as LinkedInIcon,
// //   GitHub as GitHubIcon,
// //   Email as EmailIcon,
// //   Phone as PhoneIcon,
// //   LocationOn as LocationOnIcon,
// // } from '@mui/icons-material';

// // const Contactus = () => {
// //   return (
// //     <div>
// //       {/* Contact Header */}
// //       <header className="text-center my-5">
// //         <h4>Contact Us</h4>
// //       </header>

// //       {/* Main Contact Content */}
// //       <main>
// //         <div className="container py-5">
// //           <div className="row g-5">
// //             {/* Contact Information Block */}
// //             <div className="col-xl-6">
// //               <div className="row g-4">
// //                 <div className="col-md-6">
// //                   <div className="bg-light p-3 rounded shadow-sm">
// //                     <div className="d-flex align-items-center mb-2">
// //                       <EmailIcon className="h3 pe-2" />
// //                       <span className="h5">Email</span>
// //                     </div>
// //                     <span>example@domain.com</span>
// //                   </div>
// //                 </div>
// //                 <div className="col-md-6">
// //                   <div className="bg-light p-3 rounded shadow-sm">
// //                     <div className="d-flex align-items-center mb-2">
// //                       <PhoneIcon className="h3 pe-2" />
// //                       <span className="h5">Phone</span>
// //                     </div>
// //                     <span>+0123456789, +9876543210</span>
// //                   </div>
// //                 </div>
// //                 <div className="col-md-12 mt-4">
// //                   <div className="bg-light p-3 rounded shadow-sm">
// //                     <div className="d-flex align-items-center mb-2">
// //                       <LocationOnIcon className="h3 pe-2" />
// //                       <span className="h5">Office Location</span>
// //                     </div>
// //                     <span>#007, Street name, Bigtown BG23 4YZ, England</span>
// //                   </div>
// //                 </div>
// //                 <div className="col-md-12 mt-4">
// //                   <iframe
// //                     className="w-100 rounded"
// //                     width="100%"
// //                     height="345"
// //                     frameBorder="0"
// //                     scrolling="no"
// //                     marginHeight="0"
// //                     marginWidth="0"
// //                     src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
// //                     title="Google Map"
// //                   >
// //                     <a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a>
// //                   </iframe>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Contact Form Block */}
// //             <div className="col-xl-6">
// //               <h2 className="pb-4">Leave a Message</h2>
// //               <form>
// //                 <div className="row g-4">
// //                   <div className="col-12 col-md-6 mb-3">
// //                     <label htmlFor="fname" className="form-label">First Name</label>
// //                     <input type="text" className="form-control" id="fname" placeholder="John"/>
// //                   </div>
// //                   <div className="col-12 col-md-6 mb-3">
// //                     <label htmlFor="lname" className="form-label">Last Name</label>
// //                     <input type="text" className="form-control" id="lname" placeholder="Doe"/>
// //                   </div>
// //                 </div>
// //                 <div className="mb-3">
// //                   <label htmlFor="email" className="form-label">Email</label>
// //                   <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
// //                 </div>
// //                 <div className="mb-3">
// //                   <label htmlFor="phone" className="form-label">Phone</label>
// //                   <input type="tel" className="form-control" id="phone" placeholder="+1234567890"/>
// //                 </div>
// //                 <div className="mb-3">
// //                   <label htmlFor="country" className="form-label">Country</label>
// //                   <select className="form-select" id="country">
// //                     <option value="1">USA</option>
// //                     <option value="2">Non USA</option>
// //                   </select>
// //                 </div>
// //                 <div className="mb-3">
// //                   <label htmlFor="message" className="form-label">Message</label>
// //                   <textarea className="form-control" id="message" rows="3"></textarea>
// //                 </div>
// //                 <button type="submit" className="btn btn-dark">Send Message</button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       {/* Footer Block */}
// //       {/* <footer id="site-footer"> */}
// //         <div className="bg-blue-300 py-5">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
// //                 <h5 className="pb-3"><i className="fa-solid fa-link pe-1"></i> Important Links</h5>
// //                 <ul className="list-unstyled">
// //                   <li><a href="#" className="text-decoration-none link-secondary">About Us</a></li>
// //                   <li><a href="#" className="text-decoration-none link-secondary">Privacy Policy</a></li>
// //                   <li><a href="#" className="text-decoration-none link-secondary">Terms of Services</a></li>
// //                 </ul>
// //               </div>
// //               <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
// //                 <h5 className="pb-3"><LocationOnIcon className="pe-1" /> Our Location</h5>
// //                 <span className="text-secondary">
// //                   Milannagar Bazar<br />
// //                   Tamluk, East Medinipore, West Bengal<br />
// //                   720001, India<br />
// //                 </span>
// //               </div>
// //               <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
// //                 <h5 className="pb-3"><i className="fa-solid fa-paper-plane pe-1"></i> Stay Updated</h5>
// //                 <form>
// //                   <input type="email" className="w-100 mb-2 form-control" placeholder="Email ID" />
// //                   <button className="w-100 btn btn-dark">Subscribe Now</button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="bg-blue-300 py-3">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
// //                 <ul className="list-inline mb-0">
// //                   <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><FacebookIcon /></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><YouTubeIcon /></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><TwitterIcon /></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><LinkedInIcon /></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><GitHubIcon /></a></li>
// //                 </ul>
// //               </div>
// //               <div className="col-md-6 col-sm-12 text-md-end text-sm-start">
// //                 <span className="text-black">Copyright &copy; 2024</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       {/* </footer> */}
// //     </div>
// //   );
// // }

// // export default Contactus;



// import React from 'react';
// import { Typography, TextField, Button } from '@mui/material';
// import { useState } from 'react';

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add form submission logic here
//   };

//   return (
//     <div className='contactus-form'>
//       <Typography variant="h4" gutterBottom align="center" className='text-black dark:text-white'>
//         Contact Us
//       </Typography>
//       <form onSubmit={handleSubmit} className='space-y-4 p-4'>
//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           variant="outlined"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className='dark:bg-teal-800 dark:text-white'
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           type="email"
//           variant="outlined"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className='dark:bg-teal-800 dark:text-white'
//         />
//         <TextField
//           fullWidth
//           label="Message"
//           name="message"
//           variant="outlined"
//           multiline
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className='dark:bg-teal-800 dark:text-white'
//         />
//         <Button type="submit" variant="contained" color="primary" className='bg-blue-300 dark:bg-teal-800'>
//           Send
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Contactus;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';

const Contactus = () => {
  return (
    <div>
      {/* Contact Header */}
      <header className="text-center my-5">
        <h4>Contact Us</h4>
      </header>

      {/* Main Contact Content */}
      <main>
        <div className="container py-5">
          <div className="row g-5">
            {/* Contact Information Block */}
            <div className="col-xl-6">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded shadow-sm">
                    <div className="d-flex align-items-center mb-2">
                      <EmailIcon className="h3 pe-2" />
                      <span className="h5">Email</span>
                    </div>
                    <span>example@domain.com</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded shadow-sm">
                    <div className="d-flex align-items-center mb-2">
                      <PhoneIcon className="h3 pe-2" />
                      <span className="h5">Phone</span>
                    </div>
                    <span>+0123456789, +9876543210</span>
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="bg-light p-3 rounded shadow-sm">
                    <div className="d-flex align-items-center mb-2">
                      <LocationOnIcon className="h3 pe-2" />
                      <span className="h5">Office Location</span>
                    </div>
                    <span>#007, Street name, Bigtown BG23 4YZ, England</span>
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <iframe
                    className="w-100 rounded"
                    width="100%"
                    height="345"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Google Map"
                  >
                    <a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a>
                  </iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Block */}
            <div className="col-xl-6">
              <h2 className="pb-4">Leave a Message</h2>
              <form>
                <div className="row g-4">
                  <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="John"/>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" placeholder="Doe"/>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" className="form-control" id="phone" placeholder="+1234567890"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country">
                    <option value="1">USA</option>
                    <option value="2">Non USA</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Block */}
      {/* <footer id="site-footer"> */}
        <div className="bg-blue-300 dark:bg-teal-800 dark:text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
                <h5 className="pb-3"><i className="fa-solid fa-link pe-1"></i> Important Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none link-secondary">About Us</a></li>
                  <li><a href="#" className="text-decoration-none link-secondary">Privacy Policy</a></li>
                  <li><a href="#" className="text-decoration-none link-secondary">Terms of Services</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
                <h5 className="pb-3"><LocationOnIcon className="pe-1" /> Our Location</h5>
                <span className="text-secondary">
                  Milannagar Bazar<br />
                  Tamluk, East Medinipore, West Bengal<br />
                  720001, India<br />
                </span>
              </div>
              <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
                <h5 className="pb-3"><i className="fa-solid fa-paper-plane pe-1"></i> Stay Updated</h5>
                <form>
                  <input type="email" className="w-100 mb-2 form-control" placeholder="Email ID" />
                  <button className="w-100 btn btn-dark">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300  dark:bg-teal-800 py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><FacebookIcon /></a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><YouTubeIcon /></a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><TwitterIcon /></a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><LinkedInIcon /></a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><GitHubIcon /></a></li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 text-md-end text-sm-start">
                <span className="text-black">Copyright &copy; 2024</span>
              </div>
            </div>
          </div>
        </div>
      {/* </footer> */}
    </div>
  );
}

export default Contactus;


