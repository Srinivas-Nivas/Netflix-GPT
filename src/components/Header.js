import { signOut,  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants";



const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store => store.user);


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            
          }).catch((error) => {
            // An error happened.
            navigate('/Error');
          });

    };

    useEffect ( () => {
        console.log("This is the useEffect on Header component");
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
              navigate("/browse");
              
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
              
            }
          });

          // unsubscribes when component unmounts

          return () => unsubscribe();



    },[]);







    return (
        <div className=" flex  absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
            <img 
            className="w-44"
            src={LOGO}
            alt="logo"/>
            {user &&
            <div className="flex p-2">
                <img className="w-10 h-10"
                
                alt="sign out logo"
                src={user?.photoURL}
                />
                <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">
                    Sign Out
                </button>
            </div>
               }
        </div>
        

        
    );
};
export default Header;