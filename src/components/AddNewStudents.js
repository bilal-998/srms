import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewStudents = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Custom validation for age (at least 10 years old)
        const birthDate = new Date(data.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age < 10) {
            alert('Student must be at least 10 years old.');
            return;
        }

        // Your logic to add the new student to the system
        console.log('New Student Added:', data);

        // Show notification
        alert('New student added successfully!');

        // Clear form controls
        reset();
    };

    return (
        <div>
            <h2>Add New Students</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name */}
                <div>
                    <label>First Name</label>
                    <Controller
                        defaultValue=""
                        name="firstName"
                        control={control}
                        rules={{ required: 'First name is required' }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>

                {/* Family Name */}
                <div>
                    <label>Family Name</label>
                    <Controller
                        defaultValue=""
                        name="familyName"
                        control={control}
                        rules={{ required: 'Family name is required' }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.familyName && <p>{errors.familyName.message}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                    <label>Date of Birth</label>
                    <Controller
                        defaultValue=""
                        name="dateOfBirth"
                        control={control}
                        rules={{
                            required: 'Date of birth is required',
                            validate: (value) => {
                                const birthDate = new Date(value);
                                const today = new Date();
                                const age = today.getFullYear() - birthDate.getFullYear();
                                return age >= 10 || 'Student must be at least 10 years old.';
                            },
                        }}
                        render={({ field }) => <input type="date" {...field} />}
                    />
                    {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
                </div>

                {/* Email Address */}
                <div>
                    <label>Email Address</label>
                    <Controller
                        defaultValue=""
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email address is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewStudents;
