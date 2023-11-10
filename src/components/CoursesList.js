import React, { useState } from 'react';

const CoursesList = () => {
    // Example state for course, replace with your actual state management
    const [courses, setCourses] = useState([
        { id: 1, courseName: 'Web Technology' },
        { id: 2, courseName: 'Java' },
        { id: 3, courseName: 'AI' },
        { id: 4, courseName: 'Block Chain' },
        // Add more courses as needed
    ]);

    // Function to handle course deletion
    const handleDelete = (id) => {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
    };

    return (
        <div>
            <h2>Students List</h2>
            <table>
                <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course) => (
                    <tr key={course.id}>
                        <td>{course.courseName}</td>
                        <td>
                            <button onClick={() => handleDelete(course.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoursesList;
