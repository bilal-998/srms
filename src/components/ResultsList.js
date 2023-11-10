import React, { useState } from 'react';

const ResultsList = () => {
    // Example state for results, replace with your actual state management
    const [results, setResults] = useState([
        { id: 1, courseName: 'Web Technology', 'studentName': 'Bilal Khalid', score: 'A'},
        { id: 2, courseName: 'Java', 'studentName': 'Bilal Khalid', score: 'A'},
        { id: 3, courseName: 'AI', 'studentName': 'Bilal Khalid', score: 'A'},
        { id: 4, courseName: 'Block Chain', 'studentName': 'Bilal Khalid', score: 'A'},
        // Add more results as needed
    ]);

    // Function to handle result deletion
    const handleDelete = (id) => {
        setResults((prevResults) => prevResults.filter((result) => result.id !== id));
    };

    return (
        <div>
            <h2>Result List</h2>
            <table>
                <thead>
                <tr>
                    <th>Course</th>
                    <th>Student Name</th>
                    <th>Score</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                    <tr key={result.id}>
                        <td>{result.courseName}</td>
                        <td>{result.studentName}</td>
                        <td>{result.score}</td>
                        <td>
                            <button onClick={() => handleDelete(result.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsList;
