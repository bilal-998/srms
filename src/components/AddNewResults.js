import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewResults = () => {
    // Example data for courses and students, replace with your actual data
    const courses = ['Course A', 'Course B', 'Course C'];
    const students = ['Student 1', 'Student 2', 'Student 3'];
    const scores = ['A', 'B', 'C', 'D', 'E', 'F'];

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Your logic to add the new result to the system
        console.log('New Result Added:', data);

        // Show notification
        alert('New result added successfully!');

        // Clear form controls
        reset();
    };

    return (
        <div>
            <h2>Add New Result</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Course Name */}
                <div>
                    <label>Course Name</label>
                    <Controller
                        name="courseName"
                        control={control}
                        rules={{ required: 'Course name is required' }}
                        render={({ field }) => (
                            <select {...field}>
                                {courses.map((course) => (
                                    <option key={course} value={course}>
                                        {course}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.courseName && <p>{errors.courseName.message}</p>}
                </div>

                {/* Student Name */}
                <div>
                    <label>Student Name</label>
                    <Controller
                        name="studentName"
                        control={control}
                        rules={{ required: 'Student name is required' }}
                        render={({ field }) => (
                            <select {...field}>
                                {students.map((student) => (
                                    <option key={student} value={student}>
                                        {student}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.studentName && <p>{errors.studentName.message}</p>}
                </div>

                {/* Score */}
                <div>
                    <label>Score</label>
                    <Controller
                        name="score"
                        control={control}
                        rules={{ required: 'Score is required' }}
                        render={({ field }) => (
                            <select {...field}>
                                {scores.map((score) => (
                                    <option key={score} value={score}>
                                        {score}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.score && <p>{errors.score.message}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewResults;
