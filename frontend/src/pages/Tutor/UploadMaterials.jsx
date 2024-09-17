// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadMaterials = () => {
//   const [title, setTitle] = useState('');
//   const [url, setUrl] = useState('');
//   const [courseId] = useState(1); // Replace with the desired course ID

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleUrlChange = (event) => {
//     setUrl(event.target.value);
//   };

//   const handleAddMaterial = async (event) => {
//     event.preventDefault();

//     if (!title || !url) {
//       console.error('Title and URL are required');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8080/api/v1/learning-materials/materials', {
//         title,
//         url,
//         course: {
//           id: courseId // Use the fixed course ID
//         }
//       });
//       // Handle success (e.g., reset form, show a message)
//       setTitle('');
//       setUrl('');
//       console.log('Material added successfully');
//     } catch (error) {
//       console.error('Error adding material:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Material</h1>
//       <form onSubmit={handleAddMaterial}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={handleTitleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="url">URL:</label>
//           <input
//             type="text"
//             id="url"
//             value={url}
//             onChange={handleUrlChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Material</button>
//       </form>
//     </div>
//   );
// };

// export default UploadMaterials;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UploadMaterials = () => {
//   const [title, setTitle] = useState('');
//   const [url, setUrl] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/courses');
//         console.log('Fetched courses:', response.data); // Debugging line
//         setCourses(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching courses:', error); // Debugging line
//         setError('Error fetching courses');
//         setIsLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleUrlChange = (event) => {
//     setUrl(event.target.value);
//   };

//   const handleCourseChange = (event) => {
//     setCourseId(event.target.value);
//   };

//   const handleAddMaterial = async (event) => {
//     event.preventDefault();

//     if (!title || !url || !courseId) {
//       console.error('Title, URL, and Course ID are required');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8080/api/v1/learning-materials/materials', {
//         title,
//         url,
//         course: {
//           id: parseInt(courseId, 10) // Ensure courseId is sent as a number
//         }
//       });
//       // Handle success (e.g., reset form, show a message)
//       setTitle('');
//       setUrl('');
//       setCourseId('');
//       console.log('Material added successfully');
//     } catch (error) {
//       console.error('Error adding material:', error);
//     }
//   };

//   if (isLoading) return <p>Loading courses...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-4 mt-40 -ml-36">
//       <h1 className="text-2xl font-bold mb-4">Upload Material</h1>
//       <form onSubmit={handleAddMaterial} className="space-y-4">
//         <div>
//           <label htmlFor="course" className="block text-lg font-medium mb-2">Course:</label>
//           <select
//             id="course"
//             value={courseId}
//             onChange={handleCourseChange}
//             required
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black"
//           >
//             <option value="">Select a course</option>
//             {courses.length > 0 ? (
//               courses.map((course) => (
//                 <option key={course.id} value={course.id}>
//                   {course.name}
//                 </option>
//               ))
//             ) : (
//               <option value="">No courses available</option>
//             )}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="title" className="block text-lg font-medium mb-2">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={handleTitleChange}
//             required
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="url" className="block text-lg font-medium mb-2">URL:</label>
//           <input
//             type="text"
//             id="url"
//             value={url}
//             onChange={handleUrlChange}
//             required
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Add Material
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadMaterials;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadMaterials = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courses, setCourses] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses for the dropdown
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Error fetching courses');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Fetch materials to display in the table
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/learning-materials/materials');
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
        setError('Error fetching materials');
      }
    };

    fetchMaterials();
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleAddMaterial = async (event) => {
    event.preventDefault();

    if (!title || !url || !courseId) {
      console.error('Title, URL, and Course ID are required');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/v1/learning-materials/materials', {
        title,
        url,
        course: {
          id: parseInt(courseId, 10) 
        }
      });

     
      setTitle('');
      setUrl('');
      setCourseId('');

      const response = await axios.get('http://localhost:8080/api/v1/learning-materials/materials');
      setMaterials(response.data);

      console.log('Material added successfully');
    } catch (error) {
      console.error('Error adding material:', error);
    }
  };

  // const handleDeleteMaterial = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8080/api/v1/learning-materials/materials/${id}`);

  //     // Fetch materials again to update the table
  //     const response = await axios.get('http://localhost:8080/api/v1/learning-materials/materials');
  //     setMaterials(response.data);

  //     console.log('Material deleted successfully');
  //   } catch (error) {
  //     console.error('Error deleting material:', error);
  //   }
  // };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className="p-4 mt-40 -ml-36">
      <h1 className="text-2xl font-bold mb-4">Upload Material</h1>
      <form onSubmit={handleAddMaterial} className="space-y-4">
        <div>
          <label htmlFor="course" className="block text-lg font-medium mb-2">Course:</label>
          <select
            id="course"
            value={courseId}
            onChange={handleCourseChange}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a course</option>
            {courses.length > 0 ? (
              courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))
            ) : (
              <option value="">No courses available</option>
            )}
          </select>
        </div>
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="url" className="block text-lg font-medium mb-2">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={handleUrlChange}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Material
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Uploaded Materials</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {materials.map((material) => (
              <tr key={material.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{material.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.url}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.course?.name || 'Unknown'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium"> */}
                  {/* <button
                    onClick={() => handleDeleteMaterial(material.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadMaterials;
