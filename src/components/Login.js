import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/Validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {updateProfile} from "firebase/auth";
import {auth} from "..//utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { photoURL, BGLOGO } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const dispatch=useDispatch();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);



    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    const handleButtonClick = () => {
        //validate the form data
        const Message=checkValidData(email.current.value, password.current.value);
        setErrorMessage(Message);
        if(Message) return;

        if(!isSignInForm)
        {
          //sign up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
           // Signed up 
           const user = userCredential.user;
           updateProfile(user, {
            displayName: name.current.value,
             photoURL: photoURL,
          })
          .then(() => {
            // Profile updated!
            // ...
            const 
            {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
            
           

          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          
           // ...
           })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
                // ..
  });

        }
        else{
          //Sign In Logic
          signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
          // Signed in 
              const user = userCredential.user;
              
                   // ...
             })
         .catch((error) => {
          const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + "-" + errorMessage);
         console.log(errorMessage);
  });



        }



    };
    return (
    <div>
        <Header/>
      <div className="absolute">
        <img src={BGLOGO}
        alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} 
      className=" p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 absolute rounded-lg bg-opacity-85 text-white">
      <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
      {!isSignInForm &&
        <input ref={name} type="text" placeholder="User Name" className="p-4 my-4 w-full bg-gray-600" />}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600" />
        <input ref={password} type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600" />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
       

        <button  className="p-4 my-6 bg-red-700 w-full rounded-lg" 
        onClick={handleButtonClick}>
            {isSignInForm? "Sign In": "Sign Up"}</button>
        <p onClick={toggleSignInForm} className="py-6 cursor-pointer">{isSignInForm?"New to Netflix? sign up now":"Already Registered! Please Sign In Now."}</p>
   

      </form>
       
    </div>
    );

};
export default Login;