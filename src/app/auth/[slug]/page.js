"use client"

import React from 'react'
import { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

const Login = ({params}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();

    const router = useRouter();

    const handleSubmit = () => {
        let credential = {
            email: email,
            password: password,
        }

        axiosInstance.post('users/login', credential, {
            headers: {
                'Content-Type': 'application/json'
              },
            withCredentials: true,
            
        }).then((res) => {
            console.log(res.data)
            router.back();
            login()
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        {params.slug === "login" ? 
        <div className='flex flex-col items-center bg-slate-900 w-3/5 p-12'>
            <h1 className='text-2xl mb-8'>Login to Spurs Shop</h1>
            <form className='space-y-8 w-full'>
                <div className='space-y-6'>
                    <label for="uname">Username</label><br></br>
                    <input type='text' id="uname" name='uname' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full text-black px-2'/><br></br>
                </div>
                <div className='space-y-6'>
                <label for="pword">Password</label><br></br>
                <input type='password' id="pword" name='pword' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full text-black px-2'/>
                </div>
            </form>
            <button className='border p-2 mt-8 rounded-md w-full hover:bg-white hover:text-black' onClick={handleSubmit}>Submit</button>
        </div>: 
        <div className='flex flex-col items-center bg-slate-900 w-3/5 p-12'>
            <h1 className='text-2xl mb-8'>Create an account</h1>
            <form className='space-y-8 w-full'>
                <div className='space-y-6'>
                    <label for="uname">Username</label><br></br>
                    <input type='text' id="uname" name='uname' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full text-black px-2'/><br></br>
                </div>
                <div className='space-y-6'>
                    <label for="uname">Email</label><br></br>
                    <input type='text' id="uname" name='uname' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full text-black px-2'/><br></br>
                </div>
                <div className='space-y-6'>
                <label for="pword">Password</label><br></br>
                <input type='password' id="pword" name='pword' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full text-black px-2'/>
                </div>
                <div className='space-y-6'>
                <label for="pword">Password Confirm</label><br></br>
                <input type='password' id="pword" name='pword' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full text-black px-2'/>
                </div>
            </form>
            <button className='border p-2 mt-8 rounded-md w-full hover:bg-white hover:text-black' onClick={handleSubmit}>Submit</button>
        </div>}
    </div>
  )
}

export default Login