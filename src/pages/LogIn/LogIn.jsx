import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../providers/AuthProvider';
const LogIn = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log('Error:', error.message)
            })
    }

    // google sign in
    const handleGooglelSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        // <div className='flex justify-center pt-30'>
        //     <div className="rounded-xl border border-gray-200 py-8 px-6 max-w-90 w-full">
        //         <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        //             <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        //             </svg>
        //         </div>

        //         <h3 className="mb-6 text-center text-xl font-bold text-gray-800">Quick Login</h3>

        //         <form>
        //             <div className="mb-4">
        //                 <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
        //                 <input type="text" name='email' className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" required="" />
        //             </div>

        //             <div className="mb-6">
        //                 <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
        //                 <input type="password" name='password' className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" required="" />
        //             </div>

        //             <button type="submit" className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition duration-300 hover:bg-blue-600">Sign In</button>

        //             <div className="mt-4 text-center">
        //                 <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Forgot Password?</a>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div>
            <div className="flex h-180 w-full">
                <div className="w-full hidden md:inline-block">
                    <img className="h-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" alt="leftSideImage" />
                </div>

                <div className="w-full flex flex-col items-center justify-center">

                    <form className="md:w-96 w-80 flex flex-col items-center justify-center" onSubmit={handleLogIn}>
                        <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
                        <p className="text-sm text-gray-500/90 mt-3">Welcome back! Please sign in to continue</p>

                        <button onClick={handleGooglelSignIn} type="button" className="btn w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
                            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
                        </button>
                        <div className="flex items-center gap-4 w-full my-5">
                            <div className="w-full h-px bg-gray-300/90"></div>
                            <p className="w-full text-nowrap text-sm text-gray-500/90">or sign in with email</p>
                            <div className="w-full h-px bg-gray-300/90"></div>
                        </div>

                        <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input name='email' type="email" placeholder="Email" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input name='password' type="password" placeholder="Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                        </div>

                        <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
                            <div className="flex items-center gap-2">
                                <input className="h-5" type="checkbox" id="checkbox" />
                                <label className="text-sm" htmlFor="checkbox">Remember me</label>
                            </div>
                            <a className="text-sm underline" href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            Login
                        </button>
                        <p className="text-gray-500/90 text-sm mt-4">Don’t have an account? <Link to='/register'><a className="text-indigo-400 hover:underline">Sign up</a></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;