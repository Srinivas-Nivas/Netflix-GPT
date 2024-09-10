import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
    <div>
        <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/CA-en-20240903-TRIFECTA-perspective_753eb230-ee8c-48bf-a82a-c3acf0814dfe_small.jpg"
        alt="logo"
        />
      </div>
      <form className=" p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 absolute rounded-lg bg-opacity-85 text-white">
      <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
      {!isSignInForm &&
        <input type="text" placeholder="User Name" className="p-4 my-4 w-full bg-gray-600" />}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600" />
        <input type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-600" />
       

        <button  className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In": "Sign Up"}</button>
        <p onClick={toggleSignInForm} className="py-6 cursor-pointer">{isSignInForm?"New to Netflix? sign up now":"Already Registered! Please Sign In Now."}</p>
   

      </form>
       
    </div>
    );

};
export default Login;