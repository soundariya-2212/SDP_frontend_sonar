// // import React from 'react';
// // import '../../assets/css/Cards.css';
// // import img2 from '../../assets/Images/react.png'
// // import img1 from '../../assets/Images/data.png'
// // import img3 from '../../assets/Images/jsframeworks.png'
// // import img4 from '../../assets/Images/gatsby.png'
// // import img5 from '../../assets/Images/mobile.png'
// // import img6 from '../../assets/Images/htmlim.png'
// // import img7 from '../../assets/Images/usability.png'
// // import img8 from '../../assets/Images/flutter.png'
// // import img9 from '../../assets/Images/interface.png'
// // import {Link} from 'react-router-dom'
// // import {Typography} from '@mui/material';
// // const Courses = () => {
// //   return (
// //     <div>
// //         {/* <h1 className='text-black dark:text-white'>Courses</h1> */}
// //         <Typography variant="h4" gutterBottom align="center" style={{marginBottom:'30px'}} className='text-black dark:text-white'>Courses</Typography>
// // <div className='card-wrap dark:text-black'>
// //   <div class='card'>
// //     <div class='set-image'>
// //       <img src={img9} alt="no image"/>
// //       </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div className='set-text mt-3 justify-evenly items-center'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'>sedrftyguhjikjfdf</div>
// //     <div class='set-text'>sqdwdfghjyk</div>
// //     <div class='set-text'>wefrgthy</div>
// //     <div class='set-text'>wefrgthy</div>
// //     <div class='set-text'>qwefrgthy</div> */}
// //     <div class='ribbon-wrapper-1'>
// //       <div class='ribbon-1'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //       <img src={img2} alt="no image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text' className='mt-3 justify-center align-items'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'>szdrftyguhi</div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-2'>
// //       <div class='ribbon-2'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //     <img src={img1}  alt="no image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text' className='mt-3 justify-center align-items'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-3'>
// //       <div class='ribbon-3'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img3}  alt="No image" />
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-4'>
// //       <div class='ribbon-4'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img4} alt="No image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>
// //     HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.
// //     </div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-5'>
// //       <div class='ribbon-5'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img5} alt="No image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-6'>
// //       <div class='ribbon-6'>Ribbon</div>
// //     </div>
// //         <div>
// //         <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg text-black mt-5 border-none dark:bg-teal-800 dark:text-white'>
// //                 Enroll
// //                 </button>
// //         </div>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img6} alt="No image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-7'>
// //       <div class='ribbon-7'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img7} alt="no image" />
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-8'>
// //       <div class='ribbon-8'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img8} alt="no image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>
// //         HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //        It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.
// //     </div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='ribbon-wrapper-9'>
// //       <div class='ribbon-9'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// // </div>
// //     </div>
// //   )
// // }

// // export default Courses;



// import React from 'react';
// import '../../assets/css/Cards.css';
// import img2 from '../../assets/Images/react.png'
// import img1 from '../../assets/Images/data.png'
// import img3 from '../../assets/Images/jsframeworks.png'
// import img4 from '../../assets/Images/gatsby.png'
// import img5 from '../../assets/Images/mobile.png'
// import img6 from '../../assets/Images/htmlim.png'
// import img7 from '../../assets/Images/usability.png'
// import img8 from '../../assets/Images/flutter.png'
// import img9 from '../../assets/Images/interface.png'
// import { Link } from 'react-router-dom'
// import { Typography } from '@mui/material';

// const Courses = () => {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '30px' }} className='text-black dark:text-white'>
//         Courses
//       </Typography>
//       <div className='card-wrap dark:text-black'>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img9} alt="No image" />
//           </div>
//           <div className='set-text mt-3 justify-evenly items-center'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-1'>
//             <div className='ribbon-1'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img2} alt="No image" />
//           </div>
//           <div className='set-text mt-3 justify-center align-items'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-2'>
//             <div className='ribbon-2'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img1} alt="No image" />
//           </div>
//           <div className='set-text mt-3 justify-center align-items'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-3'>
//             <div className='ribbon-3'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img3} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-4'>
//             <div className='ribbon-4'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img4} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-5'>
//             <div className='ribbon-5'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img5} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-6'>
//             <div className='ribbon-6'>Ribbon</div>
//           </div>
//           <div>
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg text-black mt-5 border-none dark:bg-teal-800 dark:text-white'>
//               Enroll
//             </button>
//           </div>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img6} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-7'>
//             <div className='ribbon-7'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img7} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-8'>
//             <div className='ribbon-8'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img8} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-9'>
//             <div className='ribbon-9'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;


import React from 'react';
import '../../assets/css/Cards.css';
import img2 from '../../assets/Images/react.png';
import img1 from '../../assets/Images/data.png';
import img3 from '../../assets/Images/jsframeworks.png';
import img4 from '../../assets/Images/gatsby.png';
import img5 from '../../assets/Images/mobile.png';
import img6 from '../../assets/Images/htmlim.png';
import img7 from '../../assets/Images/usability.png';
import img8 from '../../assets/Images/flutter.png';
import img9 from '../../assets/Images/interface.png';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Courses = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '30px' }} className='text-black dark:text-white'>
        Courses
      </Typography>
      <div className='card-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ml-11'>
        <div className='card'>
          <div className='set-image'>
            <img src={img9} alt="No image" />
          </div>
          <div className='set-text mt-6'>
          Computer graphics is a field of computer science that focuses on the creation, manipulation, and representation of visual images and animations using computers. It encompasses a wide range of techniques and technologies for rendering, displaying, and processing graphical content. 
          </div>
          <div className='ribbon-wrapper-1'>
            <div className='ribbon-1'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img2} alt="No image" />
          </div>
          <div className='set-text mt-6'>
          React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a responsive and interactive user experience. Developed and maintained by Facebook, React simplifies the process of creating complex UIs by breaking them down into reusable components.
          </div>
          <div className='ribbon-wrapper-2'>
            <div className='ribbon-2'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img1} alt="No image" />
          </div>
          <div className='set-text mt-6'>
          Data analysis is the process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. It involves a series of steps and techniques to extract insights from data, which can be used to understand trends, patterns, and relationships.
          </div>
          <div className='ribbon-wrapper-3'>
            <div className='ribbon-3'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img3} alt="No image" />
          </div>
          <div className='set-text'>
          jQuery is a fast, small, and feature-rich JavaScript library that simplifies things like HTML document traversal and manipulation, event handling, and animation. It was created by John Resig and released in 2006, and it quickly became popular due to its ease of use and cross-browser compatibility.
            </div>
          <div className='ribbon-wrapper-4'>
            <div className='ribbon-4'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img4} alt="No image" />
          </div>
          <div className='set-text'>
          Gatsby is a React-based open-source framework that helps developers build fast, secure, and modern websites and applications. It uses GraphQL to fetch data from various sources and then generates static HTML pages at build time, which can be served quickly to users.
          </div>
          <div className='ribbon-wrapper-5'>
            <div className='ribbon-5'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img5} alt="No image" />
          </div>
          <div className='set-text'>
          Flutter is an open-source UI framework developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It is known for its ability to create high-performance, visually attractive applications with a smooth and responsive user experience.
          </div>
          <div className='ribbon-wrapper-6'>
            <div className='ribbon-6'>Ribbon</div>
          </div>
          <div>
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg text-black mt-5 border-none dark:bg-teal-800 dark:text-white'>
            Go To Course
            </button>
          </div>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img6} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-7'>
            <div className='ribbon-7'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img7} alt="No image" />
          </div>
          <div className='set-text'>
          Visual representation in the context of data analysis and user interface design refers to the use of graphical elements to convey information, insights, or interactions. It plays a crucial role in making complex data and ideas more understandable, accessible, and engaging. Here’s a breakdown of key aspects and types of visual representation.
          </div>
          <div className='ribbon-wrapper-8'>
            <div className='ribbon-8'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img8} alt="No image" />
          </div>
          <div className='set-text'>
          Mobile app development involves creating software applications that run on mobile devices such as smartphones and tablets. The field encompasses various aspects, including design, coding, testing, and deployment. Here’s an overview of the key components and trends in mobile app development.
          </div>
          <div className='ribbon-wrapper-9'>
            <div className='ribbon-9'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
            Go To Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
