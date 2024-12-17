import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Login(){
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [error,setError] = useState("");
   const navigate = useNavigate(); //initialize navigate

   const validateEmail = (email)=> {
    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
   }
   const validatePassword = (password)=> {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
   }

   const handleSubmit= (e) => {
    e.preventDefault()
    if(!validateEmail(email)){
        setError("Invalid email format");
        return;
    }
    if(!validatePassword(password)){
        setError("Password must contain at least 8 characters, one letter, one number, and one special character");
        return;
    }
    setError("");
    navigate("/");
   }



    return (<div className='loginPage min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800' >
        <div className='loginFormDiv w-full max-w-md p-8 mx-8 space-y-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg'>

            <h2 className='heading text-2xl font-bold text-center text-grey-900 dark:text-white'>Login</h2>
            {error && <div className='error text-red-500 text-sm'>{error}</div>}

            <form className='form' onSubmit={handleSubmit}>
                <div className='mt-4'>
                    <label className='form block text-base text-gray-700 dark:text-gray-300'>Email: </label>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    className='w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500' ></input>
                </div>
                <div className='mt-4'>
                    <label className='form block text-base text-gray-700 dark:text-gray-300'>Password: </label>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    className='w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500'></input>
                </div>
                <button type="submit" className='w-full px-4 py-2 mt-6 text-base text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none'>Login</button>
                <button onClick={()=> navigate("/")} className='w-full px-4 py-2 mt-6 text-base text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none'>Continue without login</button>
            </form>
        </div>
    </div>)
}

export default Login;