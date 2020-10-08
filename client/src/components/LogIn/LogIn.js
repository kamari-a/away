import React from 'react';
import './LogIn.scss';

const LogIn = (props) => {
    return (
        <main className='login'> 
            <section className='login__container'>
                <h1 className='login__title'>Welcome.</h1>     
                <form className='login__form' id='loginForm'>

                    <label htmlFor='email' className='login__email-label'>Email</label>
                    <input value={props.email} onChange={props.handleChange} type='email' name='email' id='email' className='login__email' placeholder='Email' />

                    <label htmlFor='password' className='login__password-label'>Password</label>
                    <input value={props.password} onChange={props.handleChange} type='password' name='password' id='password' className='login__password' placeholder='Password' />

                    <div className='login__btn-container'>
                        <button type='submit' name='submit' id='submit' className='login__btn login__btn--submit' onClick={props.signUp}>Sign Up</button>

                        <button type='submit' name='login' id='login' className='login__btn login__btn--login' onClick={props.login}>Log In</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default LogIn;