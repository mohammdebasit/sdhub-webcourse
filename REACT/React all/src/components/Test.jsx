import React from 'react'
import { useForm } from 'react-hook-form';

export const Test = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center h-screen '>
            <input type="text" placeholder="name" {...register("name", { required: true })} />
            <input type="email" placeholder="email" {...register("email", { required: true })} />
            <input type="password" placeholder="password" {...register("password", { required: true })} />
            <input type="password" placeholder="password2" {...register("password2", { required: true })} />

            <input type="submit" />
        </form>
    )
}
