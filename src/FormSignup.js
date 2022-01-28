import React from 'react';
import useForm from './useForm';

const FormSignup = () => {
    const { handleChange, values } = useForm();
    return (
        <div className='form-content-right'>
           <form className='form'>
               <h1>Get started with us today! Create your account by filling out the information below</h1>
               <div className='form-inputs'>
                   <label htmlFor='username' className='form-label'>Username</label>
                   <input 
                        type='text' 
                        name='username'
                        id='username' 
                        className='form-input' 
                        placeholder='Enter your username' 
                        value={values.username}
                        onChange={handleChange}
                    />
               </div>
               <div className='form-inputs'>
                   <label htmlFor='email' className='form-label'>Email</label>
                   <input 
                        type='email' 
                        name='email' 
                        id='email'
                        className='form-input' 
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange} 
                    />
               </div>
               <div className='form-inputs'>
                   <label htmlFor='password' className='form-label'>Password</label>
                   <input 
                        type='password' 
                        name='password' 
                        id='password'
                        className='form-input' 
                        placeholder='Enter your password' 
                        value={values.password}
                        onChange={handleChange}
                    />
               </div>
               <div className='form-inputs'>
                   <label htmlFor='password2' className='form-label'>Confirm Password</label>
                   <input 
                        type='password' 
                        name='password2' 
                        id='password2'
                        className='form-input' 
                        placeholder='Enter your password' 
                        value={values.password2}
                        onChange={handleChange}
                    />
               </div>
               <button type='submit' className='form-input-btn'>Sign up</button>
               <span className='form-input-login'>Already have an account? Login <a href='#'>here</a></span>
           </form>
        </div>
    )
}

export default FormSignup;
