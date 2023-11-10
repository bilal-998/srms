// StudentsList.js
import React, { useState } from 'react';

const StudentsList = () => {
    // Example state for students, replace with your actual state management
    const [students, setStudents] = useState([
        { id: 1, firstName: 'John', familyName: 'Doe', dob: '2000-01-01', email: 'john@example.com' },
        { id: 2, firstName: 'Jane', familyName: 'Doe', dob: '2002-03-15', email: 'jane@example.com' },
        // Add more students as needed
    ]);

    // Function to handle student deletion
    const handleDelete = (id) => {
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    };

    return (
        <div>
            <h2>Students List</h2>
            <table>
                <thead>
                <tr>
                    <th>Name & Family Name</th>
                    <th>DOB</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.firstName} {student.familyName}</td>
                        <td>{student.dob}</td>
                        <td>{student.email}</td>
                        <td>
                            <button onClick={() => handleDelete(student.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsList;
