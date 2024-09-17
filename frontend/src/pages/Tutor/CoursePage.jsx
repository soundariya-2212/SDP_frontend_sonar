import React, { useState, useEffect } from 'react';
import UploadMaterials from './UploadMaterials';
import axios from 'axios';

function ParentComponent() {
  const [courseId, setCourseId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseId = async () => {
      try {
        // Replace with your API to get course ID
        const response = await axios.get('http://localhost:8080/courses/1');
        setCourseId(response.data.id); // Adjust based on your API response
      } catch (error) {
        console.error('Error fetching course details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseId();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (courseId === null) {
    return <div>No course ID found</div>;
  }

  return (
    <div>
      <UploadMaterials selectedCourseId={courseId} />
    </div>
  );
}

export default ParentComponent;
