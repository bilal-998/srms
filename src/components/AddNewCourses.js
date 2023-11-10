import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewCourses = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('New Course Added:', data);

        // Show notification
        alert('New Course added successfully!');

        // Clear form controls
        reset();
    };

    return (
        <div>
            <h2>Add New Courses</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Course Name */}
                <div>
                    <label>Course Name</label>
                    <Controller
                        defaultValue=""
                        name="courseName"
                        control={control}
                        rules={{ required: 'Course name is required' }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.courseName && <p>{errors.courseName.message}</p>}
                </div>
                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewCourses;
