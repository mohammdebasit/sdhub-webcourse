import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';


const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        await axios.post('http://localhost:3000/', data)
    }
    // console.log(errors);


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-2xl m-5'>
                <input type="text" placeholder="name" {...register("name", { required: true })} className='p-3 border' />
                <input type="email" placeholder="email" {...register("email", { required: true })} className='p-3 border' />
                <input type="password" placeholder="password" {...register("password", { required: true })} className='p-3 border' />
                <input type="password" placeholder="password2" {...register("password2", { required: true })} className='p-3 border' />

                <input type="submit" className='p-3 border' />
            </form>
        </>
    )
}

export default Form