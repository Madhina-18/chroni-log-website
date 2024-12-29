import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook from React Router for navigation


    useEffect(() => {
        window.scrollTo(0, 0);
        
        auth.onAuthStateChanged(function(user){
            if(user)
            {  
             
                navigate("/home")

            }
           
          })
      


    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }


        createUserWithEmailAndPassword(auth,email,password).then((res)=>{
            console.log(res)
            navigate("/login")
        }).catch(()=>{
            console.log("Failed to add user")
        })


        // Simulate user registration process
        console.log('User registered:', { email, password });
        // After registration, redirect to the login page
        navigate('/login'); // Replace '/login' with your login page route
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-">
            <form onSubmit={handleSubmit} className="p-10 bg-white rounded-lg shadow-lg" style={{ width: "70%" }}>
                <h2 className="text-2xl font-serif mb-5 text-gray-800">Sign In</h2>
                <div className="mb-4">
                    <label className="block text-black font-serif ">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full  rounded focus:outline-none border border-[#22C6F0]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block  text-black font-serif">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full  rounded focus:outline-none border border-[#22C6F0]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block  text-black font-serif">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full rounded focus:outline-none border border-[#22C6F0]"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <p className='text-[#1F2179] cursor-pointer my-2' onClick={() => navigate("/login")}> Already have an account? Login here</p>
                <button type="submit" className="bg-[#FF0000] text-white py-2 px-4 rounded hover:bg-[#22C6F0] transition duration-200 ease-in-out">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Signup;
